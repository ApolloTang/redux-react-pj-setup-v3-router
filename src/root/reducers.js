import {combineReducers} from 'redux';

import todos from  'modules/todos/reducers';

const modules = combineReducers({
    todos
});

import { routerReducer } from 'react-router-redux';
const rootReducer = combineReducers({
    modules,
    // resources: AppReducer,
    // sessions: {},
    routing: routerReducer
})

export default rootReducer;
