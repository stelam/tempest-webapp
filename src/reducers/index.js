import { combineReducers } from 'redux';
import NavigationReducer from './reducer_navigation';
import AuthenticationReducer from './reducer_authentication';
import { reducer as formReducer} from 'redux-form'; 

const rootReducer = combineReducers({
  navigationOpened: NavigationReducer,
  authentication: AuthenticationReducer,
  form: formReducer
});

export default rootReducer;
