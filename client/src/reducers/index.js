import { combineReducers } from 'redux';
import authReducer from './authReducer';
import currencyConverterReducer from './currencyConverterReducer';

export default combineReducers({
  auth: authReducer,
  exchangeRate: currencyConverterReducer
});
