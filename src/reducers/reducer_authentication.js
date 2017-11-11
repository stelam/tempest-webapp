import { LOGIN } from '../actions/index';

export default function(state = false, action) {
  switch(action.type) {

    case LOGIN:
      return action.payload;

    default:
      return state;
  }
}