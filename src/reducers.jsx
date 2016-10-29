import {combineReducers}  from 'redux';
import {routerReducer}  from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import {reducer as uiReducer} from 'redux-ui';
import {reducer as notifications} from 'react-notification-system-redux';


export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  ui: uiReducer,
  notifications
});
