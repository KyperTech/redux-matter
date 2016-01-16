'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CALL_MATTER = exports.Schemas = undefined;

var _normalizr = require('normalizr');

var _humps = require('humps');

var _index = require('./index');

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callMatter(method, schema, callData) {
  var matter = (0, _index.getMatter)();
  return matter[method](callData).then(function (response) {
    var camelizedJson = (0, _humps.camelizeKeys)(response);
    return Object.assign({}, (0, _normalizr.normalize)(camelizedJson, schema));
  }, function (err) {
    console.error('Error calling matter');
  });
}

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr

var accountSchema = new _normalizr.Schema('accounts', {
  idAttribute: 'id'
});

// Schemas for Github API responses.
var Schemas = exports.Schemas = {
  ACCOUNT: accountSchema,
  ACCOUNT_ARRAY: (0, _normalizr.arrayOf)(accountSchema)
};

// Action key that carries API call info interpreted by this Redux middleware.
var CALL_MATTER = exports.CALL_MATTER = Symbol('Call Matter');

// A Redux middleware that interprets actions with CALL_MATTER info specified.
// Performs the call and promises when such actions are dispatched.

exports.default = function (store) {
  return function (next) {
    return function (action) {
      var callAPI = action[CALL_MATTER];
      if (typeof callAPI === 'undefined') {
        return next(action);
      }

      var method = callAPI.method;
      var callData = callAPI.callData;
      var schema = callAPI.schema;
      var types = callAPI.types;

      if (typeof method === 'function') {
        method = method(store.getState());
      }

      if (typeof method !== 'string') {
        throw new Error('Specify a string method URL.');
      }
      if (!schema) {
        throw new Error('Specify one of the exported Schemas.');
      }
      if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
      }
      if (!types.every(function (type) {
        return typeof type === 'string';
      })) {
        throw new Error('Expected action types to be strings.');
      }

      function actionWith(data) {
        var finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_MATTER];
        return finalAction;
      }

      var _types = _slicedToArray(types, 3);

      var requestType = _types[0];
      var successType = _types[1];
      var failureType = _types[2];

      next(actionWith({ type: requestType }));

      return callMatter(method, schema, callData).then(function (response) {
        return next(actionWith({
          response: response,
          type: successType
        }));
      }, function (error) {
        return next(actionWith({
          type: failureType,
          error: error.message || 'Something bad happened'
        }));
      });
    };
  };
};