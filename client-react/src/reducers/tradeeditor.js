import * as TYPES from '../types/tradeeditor';
const defaultState = {
    _id: '',
    side: "Buy",
    counterParty: '',
    commodity: '',
    location: '',
    currency: '',
    price: 0,
    quantity: 0,
    country: '',
    tradeDate: new Date().toISOString().slice(0, 10),
};

export default (state = {defaultState : defaultState}, action) => {
    switch (action.type) {
        case TYPES.SAVE_TRADE_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                saveStatus: 'progress',
                error: null
            };

        case TYPES.SAVE_TRADE_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            var newState = {
                ...state,
                tradeId : action.tradeId,
                saveStatus: 'success',
                error : null
            };
            return newState;
        case TYPES.SAVE_TRADE_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                saveStatus: 'failed',
                error: action.payload.error,
            };
        case TYPES.SAVE_TRADE_STATUS_CLEAR:
        return{
            ...state,
            saveStatus : 'cleared'
        }
        default:
            return state
    }
}