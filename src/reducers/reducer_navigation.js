import { TOGGLE_NAVIGATION } from '../actions/index';

export default function(state = false, action) {
  switch(action.type) {

    case TOGGLE_NAVIGATION:
      return action.payload;

    default:
      return state;
  }
}