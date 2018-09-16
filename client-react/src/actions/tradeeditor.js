import * as TYPES from '../types/tradeeditor';
import axios from 'axios';
import store from '../../store';

export function saveTrade(tradeInfo) {
    axios.post("http://localhost:3010/trades", {data : tradeInfo})
      .then(res => {
        if(res.status != 200)
          store.dispatch(saveTradeFailure({ message : 'Failed to save trade'}))
        else 
         {
          console.log(res.data);
          store.dispatch(saveTradeSuccess(res.data));
         }
      })
      .catch(error => store.dispatch(saveTradeFailure(error)));
    return saveTradeBegin();
}

export const clearSaveStatus = () => ({
    type: TYPES.SAVE_TRADE_STATUS_CLEAR
});

const saveTradeBegin = () => ({
    type: TYPES.SAVE_TRADES_BEGIN
});

const saveTradeSuccess = result => ({
    type: TYPES.SAVE_TRADE_SUCCESS,
    payload: result
});

const saveTradeFailure = error => ({
    type: TYPES.SAVE_TRADE_FAILURE,
    payload: {error}
});
