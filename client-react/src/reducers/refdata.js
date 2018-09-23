import * as TYPES from '../types/refdata';
import * as CONSTANTS from '../constants';

const initState = {
    loading: false,
    error: null,
}

CONSTANTS.REF_DATA_LIST.forEach((item)=>{
    initState[item] =[];
});

export default (state = initState, action) => {
    switch (action.type) {
        case TYPES.FETCH_REFDATA_SUCCESS:
            const newState = { ...state, ...action.payload };
            return newState;
        case TYPES.FETCH_REFDATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case TYPES.FETCH_TRADES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        default:
            return state
    }
}

