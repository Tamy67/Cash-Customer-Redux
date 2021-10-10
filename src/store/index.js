import { createStore, combineReducers, applyMiddleware } from 'redux';
import { CashReducer } from './CashReducer';
import { CustomerReducer } from './CustomerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cash: CashReducer,
    customers: CustomerReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))