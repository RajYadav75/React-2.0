import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./store/action/action.js";
/*
TODO: useSelector is a React-Redux hook that lets your React component Access data from the Redux store.

TODO: useDispatch is another React-Redux hook that lets your component send actions to the Redux store.

*/
const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Count in Counter Component :: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
};

export default Counter;