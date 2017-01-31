import {combineReducers} from 'redux';

import todos from  './todos';

const AppReducer = combineReducers({
    todos
});


import { routerReducer } from 'react-router-redux';
const rootReducer = combineReducers({
  resources: AppReducer,
  sessions: {},
  routing: routerReducer
})

export default rootReducer;
