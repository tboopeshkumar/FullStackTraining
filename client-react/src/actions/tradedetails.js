import { TRADE_SELECTED } from '../types/tradedetails';
export const tradeSelected = (selectedTrade) => {
  return dispatch => {
    dispatch({
       type: TRADE_SELECTED,
       payload: {
        selectedTrade
       }
    })
  }
}