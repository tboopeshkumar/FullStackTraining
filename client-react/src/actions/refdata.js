
import * as TYPES from '../types/refdata';
import store from '../../store';
import axios from 'axios';
import * as CONSTENTS from '../constants';

export function fetchRefData() {

    let refData = {};
    try {
            CONSTENTS.REF_DATA_LIST.forEach(async (item) => {
            let result = await axios.get(`${CONSTENTS.API_REF_DATA_FETCH}${item}`);
            refData[item] = result.data;
            store.dispatch(fetchRefDataSuccess(refData));
        });
        
    } catch (err) {
        console.log(`error in fetching refdata ${err}`);
        store.dispatch(fetchRefDataFailure(err));
    }
   fetchRefDataBegin();
}

const fetchRefDataBegin = () => ({
    type: TYPES.FETCH_REFDATA_BEGIN
});

const fetchRefDataSuccess = data => ({
    type: TYPES.FETCH_REFDATA_SUCCESS,
    payload: data
});

const fetchRefDataFailure = error => ({
    type: TYPES.FETCH_REFDATA_FAILURE,
    payload: { error }
});
