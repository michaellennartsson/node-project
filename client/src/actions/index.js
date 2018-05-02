import axios from 'axios';
import { FETCH_USER } from './types';

// dispatch is a function that comes from redux-thunk
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res });
};

/*
export const fetchUser = () => {
  // dispatch is a function that comes from redux-thunk
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};
*/
