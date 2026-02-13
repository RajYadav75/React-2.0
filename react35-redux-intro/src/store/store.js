import {createStore} from 'redux';
import counterReducer from "./reducers/counterReducer.js";

 const state = createStore(counterReducer);



export default state;