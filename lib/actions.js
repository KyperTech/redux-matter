'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOGOUT_FAILURE = exports.LOGOUT_SUCCESS = exports.LOGOUT_REQUEST = exports.SIGNUP_FAILURE = exports.SIGNUP_SUCCESS = exports.SIGNUP_REQUEST = exports.LOGIN_FAILURE = exports.LOGIN_SUCCESS = exports.LOGIN_REQUEST = undefined;
exports.login = login;
exports.signup = signup;
exports.logout = logout;

var _middleware = require('./middleware');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = exports.LOGIN_FAILURE = 'LOGIN_FAILURE';

function login(loginData) {
  console.log('Login action called.', loginData);
  return _defineProperty({}, _middleware.CALL_MATTER, {
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    method: 'login',
    callData: loginData,
    schema: _middleware.Schemas.ACCOUNT
  });
}

var SIGNUP_REQUEST = exports.SIGNUP_REQUEST = 'SIGNUP_REQUEST';
var SIGNUP_SUCCESS = exports.SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
var SIGNUP_FAILURE = exports.SIGNUP_FAILURE = 'SIGNUP_FAILURE';

function signup(signupData) {
  console.log('Signup action called.', signupData);
  return _defineProperty({}, _middleware.CALL_MATTER, {
    types: [SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE],
    method: 'signup',
    callData: signupData,
    schema: _middleware.Schemas.ACCOUNT
  });
}

var LOGOUT_REQUEST = exports.LOGOUT_REQUEST = 'LOGOUT_REQUEST';
var LOGOUT_SUCCESS = exports.LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
var LOGOUT_FAILURE = exports.LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function logout() {
  return _defineProperty({}, _middleware.CALL_MATTER, {
    types: [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE],
    method: 'logout',
    schema: _middleware.Schemas.ACCOUNT
  });
}