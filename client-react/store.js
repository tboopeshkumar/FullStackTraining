import { createStore, combineReducers, applyMiddleware } from 'redux';
import tradeDetails from './src/reducers/tradedetails';
import thunk from 'redux-thunk'
const reducer = combineReducers({
 tradeDetails
})
const store = createStore(
 reducer,
 applyMiddleware(thunk)
)
export default store;