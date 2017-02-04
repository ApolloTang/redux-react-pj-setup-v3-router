import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux';
import rootReducer from './reducers';
import middleware from  './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const PROD = (process && process.env && process.env.PROD) ? true : false;

let store;
if (PROD) {
    store = createStore(
        rootReducer,
        /* preloadedState, */
    );
} else {
    store = createStore(
        rootReducer,
        /* preloadedState, */
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );
}

export default store;

