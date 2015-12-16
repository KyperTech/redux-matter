'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = account;

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
      console.log('login response in reducer', action);
      return (0, _lodash.merge)({}, state, { isFetching: false, id: action.response.result });
    case _actions.SIGNUP_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true });
    case _actions.SIGNUP_SUCCESS:
      console.log('signup response', action);
      return (0, _lodash.merge)({}, state, { isFetching: false, id: action.response.result });
    case _actions.LOGOUT_REQUEST:
      return (0, _lodash.merge)({}, state, { isFetching: true });
    case _actions.LOGOUT_SUCCESS:
      return (0, _lodash.merge)({}, { isFetching: false });
    default:
      return state;
  }
}