import React from 'react'
import { useContext } from 'react';
import { CounterContext } from './CounterContextReducer';

const ComponentB = ({ children }) => {
    const counterContext = useContext(CounterContext);
    return (
      <div>
        ComponentB: {counterContext.counterCount}&nbsp;
        <button onClick={() => counterContext.counterDispatch('increment')}>Increase</button>
        <button onClick={() => counterContext.counterDispatch('decrement')}>Decrease</button>
        <button onClick={() => counterContext.counterDispatch('reset')}>Reset</button>
        {children}
      </div>
    );
}

export default ComponentB