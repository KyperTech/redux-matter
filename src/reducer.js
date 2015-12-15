import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from '../actions/account';
import { merge } from 'lodash';
export default function account(state = {
  isFetching: false,
  id: null
}, action) {
  switch (action.type) {
  case LOGIN_REQUEST:
    return merge({}, state, {isFetching: true});
  case LOGIN_SUCCESS:
    console.log('login response', action);
    return merge({}, state, {isFetching: false, id: action.response.result});
  case SIGNUP_REQUEST:
    return merge({}, state, {isFetching: true});
  case SIGNUP_SUCCESS:
    console.log('signup response', action);
    return merge({}, state, {isFetching: false}, action.profile);
  case LOGOUT_REQUEST:
    return merge({}, state, {isFetching: true});
  case LOGOUT_SUCCESS:
    return merge({}, {isFetching: false});
  case AUTH_ERR:
    return merge({}, state, {isFetching: false});
  default:
    return state;
  }
}
