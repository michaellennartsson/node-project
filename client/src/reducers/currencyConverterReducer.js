import { FETCH_EXCHANGE_RATE } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_EXCHANGE_RATE:
      return action.payload || null;

    default:
      return state;
  }
}
