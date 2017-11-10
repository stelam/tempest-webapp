import { combineReducers } from 'redux';
import NavigationReducer from './reducer_navigation.js';

const rootReducer = combineReducers({
  navigation: NavigationReducer
});

export default rootReducer;
