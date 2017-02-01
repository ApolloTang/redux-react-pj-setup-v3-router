import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import rootReducer from './reducers';
import middleware from  './middleware';

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
  // DevTools.instrument()
);

export default store;

