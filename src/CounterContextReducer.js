import { createContext } from 'react'

const initialState = 0;

const CounterContext = createContext();

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export {CounterContext, initialState, reducer}