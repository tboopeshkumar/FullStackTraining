import { TRADE_SELECTED } from '../types/tradedetails';
import { tradeDataHeaders, tradeDataList, commodityList, counterPartyList, locationList } from '../mockdata/mocktradedata';
const initState = {
 selectedTrade: '',
 columnHeaders : tradeDataHeaders,
 rows : tradeDataList,
 commodities : commodityList,
 counterparties : counterPartyList,
 locations : locationList

}
export default (state = initState, action) => {
switch(action.type) {
 case TRADE_SELECTED :
    const newState = {...state, selectedTrade: action.payload.selectedTrade};
    console.log("New State : ");
    console.log(newState);
    return newState;
case "TRADE_DELETED":
    console.log("Trade Deleted");
 default :
 return state
 }
}