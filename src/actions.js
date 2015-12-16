
import { CALL_MATTER, Schemas } from './middleware'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function login(loginData) {
  console.log('Login action called.', loginData);
  return {
    [CALL_MATTER]: {
      types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ],
      method: 'login',
      callData: loginData,
      schema: Schemas.ACCOUNT
    }
  }
}

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export function signup(signupData) {
  console.log('Signup action called.', signupData);
  return {
    [CALL_MATTER]: {
      types: [ SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE ],
      method: 'signup',
      callData: signupData,
      schema: Schemas.ACCOUNT
    }
  }
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export function logout() {
  return {
    [CALL_MATTER]: {
      types: [ LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE ],
      method: 'logout',
      schema: Schemas.ACCOUNT
    }
  }
}
