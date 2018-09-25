import { combineReducers } from 'redux';
import authReducer from './authReducer';
import register from './register';

export default combineReducers ({
  auth: authReducer,
});
