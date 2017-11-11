import { combineReducers } from 'redux';
import NavigationReducer from './reducer_navigation';
import AuthenticationReducer from './reducer_authentication';

const rootReducer = combineReducers({
  navigationOpened: NavigationReducer,
  loggedIn: AuthenticationReducer
});

export default rootReducer;
