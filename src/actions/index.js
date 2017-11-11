export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';
export const LOGIN = 'LOGIN';

export function toggleNavigation(navigationOpened) {

  return {
    type: TOGGLE_NAVIGATION,
    payload: navigationOpened
  };
}

export function login(loggedIn) {
  return {
    type: LOGIN,
    payload: loggedIn
  }
}