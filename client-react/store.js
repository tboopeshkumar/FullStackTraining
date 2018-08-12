import { createStore, combineReducers, applyMiddleware } from 'redux';
import tradeDetailsReducers from './src/reducers/tradedetails';
import thunk from 'redux-thunk'
const reducer = combineReducers({
 tradeDetailsReducers
})
const store = createStore(
 reducer,
 applyMiddleware(thunk)
)
export default store;