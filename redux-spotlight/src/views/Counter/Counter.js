
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
decrement,
increment,
doubleDecrement,
doubleIncrement,
} from './counterSlice';

const Counter = () => {
//The function below is called a selector and allows us to select a value from
// the state.
const count = useSelector((state) => state.counter.count);
const dispatch = useDispatch();

return (
<div>
<button
aria-label="dblDecrement value"
onClick={() => {
dispatch(doubleDecrement());
}} >
--
</button>

      <button
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        aria-label="dblIncrement value"
        onClick={() => {
          dispatch(doubleIncrement());
        }}
      >
        ++
      </button>
      <h1> Hello! </h1>
    </div>

);
};

export default Counter;
