import { AUTHENTICATE, 
  AUTHENTICATION_SUCCESS, 
  AUTHENTICATION_FAILURE,
  LOGOUT_REQUEST } from '../actions/authentication';

import store from 'store';

const storedAuthentication = store.get("authentication");

const defaultState = {
  isAuthenticated: (storedAuthentication && storedAuthentication.access_token) ? true : false,
  isFetching: false,
  user: storedAuthentication,
  errorMessage: null
}

console.log(defaultState);

export default function(state = defaultState, action) {
  switch(action.type) {

    case AUTHENTICATE:
      return {...state, ...action.payload};

    case AUTHENTICATION_SUCCESS: 
      return {...state, ...action.payload};

    case AUTHENTICATION_FAILURE:
      return {...state, ...action.payload};

    case LOGOUT_REQUEST:
      return {...state, ...action.payload};

    default:
      return state;
  }
}