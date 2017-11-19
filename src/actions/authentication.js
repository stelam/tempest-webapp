import axios from 'axios';
import qs from 'qs';
import store from 'store';

export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

const API_BASE_URL = 'http://trusted-app:secret@localhost:9000/api/v1';

function requestAuthentication() {
  return {
    type: AUTHENTICATION_REQUEST,
    payload: {
      isAuthenticated: false,
      isFetching: true
    }
  }
}

function receiveAuthenticationResponse(user) {
  store.set('authentication', user);

  return {
    type: AUTHENTICATION_SUCCESS,
    payload: {
      isAuthenticated: true,
      isFetching: false,
      user
    }
  }
}

function authenticationError(errorMessage) {
  return {
    type: AUTHENTICATION_FAILURE,
    payload: {
      isAuthenticated: false,
      isFetching: false,
      errorMessage,
      user: null
    }
  }
}

// just frontend side for now
export function requestLogout() {
  store.clearAll();

  return {
    type: LOGOUT_REQUEST,
    payload: {
      isAuthenticated: false,
      isFetching: false,
      user: null
    }
  }
}

export function authenticate(credentials) {

  const data = qs.stringify({ 
              "grant_type": "password",
              ...credentials
            });

  const request = axios.request({
    url: "/oauth/token",
    baseURL: API_BASE_URL,
    method: 'post',
    auth: {
      "username": process.env.TEMPEST_OAUTH_CLIENT_NAME,
      "password": process.env.TEMPEST_OAUTH_CLIENT_SECRET
    },
    data,
    withCredentials: true,
  });

  return (dispatch) => {
    dispatch(requestAuthentication());

    request.then(({data}) => {
      dispatch(receiveAuthenticationResponse(data));
    }).catch((error) => {
      dispatch(authenticationError(error.response.data.error_description));
    });
  };
}