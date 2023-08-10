import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../features/counter/counterSlice'; // Importing the reset action
import { RootState } from '../app/rootReducer';
import { FiPlus, FiMinus, FiRefreshCw } from 'react-icons/fi'; // Importing the reset icon

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter);

  return (
    <div className="flex flex-col items-center justify-center h-40 bg-gray-100">
      <div className="flex space-x-4 bg-white p-6 rounded shadow-md">
        <button
          onClick={() => dispatch(decrement())}
          className="flex items-center justify-center p-3 text-white bg-red-500 rounded-full hover:bg-red-600"
        >
          <FiMinus />
        </button>
        <span className="text-2xl font-semibold">{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className="flex items-center justify-center p-3 text-white bg-blue-500 rounded-full hover:bg-blue-600"
        >
          <FiPlus />
        </button>
        <button
          onClick={() => dispatch(reset())} // Dispatching the reset action
          className="flex items-center justify-center p-3 text-white bg-gray-500 rounded-full hover:bg-gray-600"
        >
          <FiRefreshCw /> {/* Reset icon */}
        </button>
      </div>
    </div>
  );
};

export default Counter;


// Purpose: This file defines a React component that interacts with the Redux store.

// useDispatch: A hook provided by React-Redux that returns a reference to the dispatch function from the Redux store. Used to dispatch actions to the store.
// useSelector: A hook provided by React-Redux that takes a selector function and returns the current value of the selected state. It will also cause the component to re-render when the selected state changes.