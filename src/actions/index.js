export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';

export function toggleNavigation(navigationOpened) {

  return {
    type: TOGGLE_NAVIGATION,
    payload: navigationOpened
  };
}
