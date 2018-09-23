import { createStore, combineReducers, applyMiddleware } from 'redux';
import tradeDetails from './src/reducers/tradedetails';
import tradeEditor from './src/reducers/tradeeditor';
import refData from './src/reducers/refdata';
//import thunk from 'redux-thunk';
const reducer = combineReducers({
 tradeDetails,tradeEditor, refData
})
const store = createStore(
 reducer,
 //applyMiddleware(thunk)
)
export default store;