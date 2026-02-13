import {createStore} from 'redux';
import counterReducer from "./reducers/counterReducer.js";
import {configureStore} from "@reduxjs/toolkit";

 // const state = createStore(counterReducer);
 const state = configureStore({
  reducer: {
   counter: counterReducer,
  },

 });



export default state;