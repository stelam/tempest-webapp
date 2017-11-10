export function toggleNavigation(navigationOpened) {
  return {
    //TODO: Define types as constants
    type: 'TOGGLE_NAVIGATION',
    payload: navigationOpened
  };
}