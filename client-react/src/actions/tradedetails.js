import * as TYPES from '../types/tradedetails';
import axios from 'axios';
import store from '../../store';

export const tradeSelected = (selectedTrade) => {
  return {
    type: TYPES.TRADE_SELECTED,
    payload: {
      selectedTrade
    }
  }
}

export function fetchTrades() {
    axios.get("http://localhost:3010/trades")
      .then(res => {
        if(res.status != 200)
          store.dispatch(fetchTradesFailure({ message : 'Failed to fetch trades'}))
        else 
          store.dispatch(fetchTradesSuccess(res.data));
      })
      .catch(error => store.dispatch(fetchTradesFailure(error)));
    return fetchTradesBegin();
}

const fetchTradesBegin = () => ({
  type: TYPES.FETCH_TRADES_BEGIN
});

const fetchTradesSuccess = data => ({
  type: TYPES.FETCH_TRADES_SUCCESS,
  payload: data
});

const fetchTradesFailure = error => ({
  type: TYPES.FETCH_TRADES_FAILURE,
  payload: { error }
});


export const tradeDeleted = (deletedTrade) => {
  return {
    type: "TRADE_DELETED",
    payload: {
      deletedTrade
    }
  }

}
