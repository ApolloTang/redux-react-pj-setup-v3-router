import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux';
import rootReducer from './reducers';
import middleware from  './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

console.log(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);
// const store = createStore(
//   rootReducer,
//   applyMiddleware(...middleware)
//   // DevTools.instrument()
// );



const store = createStore(
  rootReducer,
  /* preloadedState, */
  composeEnhancers(
      applyMiddleware(...middleware)
  )
);

export default store;

