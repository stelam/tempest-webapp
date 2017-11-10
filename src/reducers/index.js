import { combineReducers } from 'redux';
import NavigationReducer from './reducer_navigation.js';

const rootReducer = combineReducers({
  navigationOpened: NavigationReducer
});

export default rootReducer;
