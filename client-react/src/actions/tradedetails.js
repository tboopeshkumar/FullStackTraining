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
export const tradeDeleted = (delectedTarde) => {
    return dispatch => {
        dispatch({
            type: "TRADE_DELETED",
            payload: {
                delectedTarde
            }
        })
    }
}
