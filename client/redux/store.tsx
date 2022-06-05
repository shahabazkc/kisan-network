import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './reducers/menu-reducer';
import Redux, { combineReducers, compose,createStore } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}



const composeEnhancers = global.window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({
  menu: menuReducer,
})

const store = createStore(reducers, composeEnhancers());


export default store