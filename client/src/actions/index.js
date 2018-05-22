import axios from 'axios';
import { FETCH_USER, FETCH_EXCHANGE_RATE } from './types';

// dispatch is a function that comes from redux-thunk
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

/*
export const fetchUser = () => {
  // dispatch is a function that comes from redux-thunk
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};
*/

export const fetchExchangeRate = () => async dispatch => {
  const res = await axios.get('/api/fetch_exchange_rates');
  dispatch({ type: FETCH_EXCHANGE_RATE, payload: res.data });
};
