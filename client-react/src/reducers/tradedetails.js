import * as TYPES from '../types/tradedetails';

import { commodityList, counterPartyList, locationList,currencyList } from '../mockdata/mocktradedata';
const initState = {
    selectedTrade: null,
    columnHeaders: [],
    rows: [],
    commodities: commodityList,
    counterparties: counterPartyList,
    locations: locationList,
    currencies : currencyList,
    loading: false,
    error: null

}
export default (state = initState, action) => {
    switch (action.type) {
        case TYPES.TRADE_SELECTED:
            const newState = { ...state, selectedTrade: action.payload.selectedTrade };
            return newState;
        case "TRADE_DELETED":
            console.log("Trade Deleted");
        case TYPES.FETCH_TRADES_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case TYPES.FETCH_TRADES_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                columnHeaders: action.payload.headers,
                rows: action.payload.data
            };

        case TYPES.FETCH_TRADES_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state
    }
}