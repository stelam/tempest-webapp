import axios from 'axios';
import qs from 'qs';

export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';
export const LOGIN = 'LOGIN';

const API_BASE_URL = 'http://trusted-app:secret@localhost:9000/api/v1';

export function toggleNavigation(navigationOpened) {

  return {
    type: TOGGLE_NAVIGATION,
    payload: navigationOpened
  };
}

export function login(values) {
  var data = qs.stringify({ 
              "grant_type": "password",
              "username": "admin",
              "password": "password"
            });
  const request = axios.request({
    url: "/oauth/token",
    baseURL: API_BASE_URL,
    method: 'post',
    auth: {
      "username": process.env.TEMPEST_OAUTH_CLIENT_NAME,
      "password": process.env.TEMPEST_OAUTH_CLIENT_SECRET
    },
    data: data,
    withCredentials: true,
    
  }, data);

  return {
    type: LOGIN,
    payload: request
  }
}