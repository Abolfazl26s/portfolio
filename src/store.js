import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReduser from './reducers';

const intialState= {};

const middleware=[thunk];

const store= createStore(rootReduser,intialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store