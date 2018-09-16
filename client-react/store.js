import { createStore, combineReducers, applyMiddleware } from 'redux';
import tradeDetails from './src/reducers/tradedetails';
import tradeEditor from './src/reducers/tradeeditor';
//import thunk from 'redux-thunk'
const reducer = combineReducers({
 tradeDetails,tradeEditor
})
const store = createStore(
 reducer,
 //applyMiddleware(thunk)
)
export default store;