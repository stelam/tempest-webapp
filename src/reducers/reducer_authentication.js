import { AUTHENTICATE, 
  AUTHENTICATION_SUCCESS, 
  AUTHENTICATION_FAILURE } from '../actions/authentication';

const defaultState = {
  isAuthenticated: false,
  isFetching: false,
  user: null,
  errorMessage: null
}

export default function(state = defaultState, action) {
  switch(action.type) {

    case AUTHENTICATE:
      return {...state, ...action.payload};

    case AUTHENTICATION_SUCCESS: 
      return {...state, ...action.payload};

    case AUTHENTICATION_FAILURE:
      return {...state, ...action.payload};

    default:
      return state;
  }
}