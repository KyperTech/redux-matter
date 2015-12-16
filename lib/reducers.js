'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.account = account;
exports.entities = entities;

var _actions = require('./actions');

var _lodash = require('lodash');

function account() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {
    isFetching: false,
    id: null
  } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actions.LOGIN_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true });
    case _actions.LOGIN_SUCCESS:
      return (0, _lodash.merge)({}, state, { isFetching: false, id: action.response.result });
    case _actions.SIGNUP_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true });
    case _actions.SIGNUP_SUCCESS:
      return (0, _lodash.merge)({}, state, { isFetching: false, id: action.response.result });
    case _actions.LOGOUT_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true, id: null });
    case _actions.LOGOUT_SUCCESS:
      return (0, _lodash.merge)({}, { isFetching: false, id: null });
    default:
      return state;
  }
}
// Updates an entity cache in response to any action with response.entities.
function entities() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? { accounts: {} } : arguments[0];
  var action = arguments[1];

  if (action.response && action.response.entities) {
    return (0, _lodash.merge)({}, state, action.response.entities);
  }
  return state;
}