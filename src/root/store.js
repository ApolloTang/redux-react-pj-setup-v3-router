import {createStore} from 'redux';
import {combineReducers} from 'redux';
import rootReducer from 'app/reducers';

const store = createStore(
  rootReducer,
  // DevTools.instrument()
);

store.subscribe(()=>{
    console.log('store change', store.getState())
})

export default store;

