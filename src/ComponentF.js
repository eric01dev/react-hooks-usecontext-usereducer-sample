import React from 'react'
import { useContext } from 'react';
import { CounterContext } from './CounterContextReducer';

const ComponentF = () => {
    const counterContext = useContext(CounterContext);
    return (
      <div>
        ComponentF: {counterContext.counterCount}&nbsp;
        <button onClick={() => counterContext.counterDispatch('increment')}>Increase</button>
        <button onClick={() => counterContext.counterDispatch('decrement')}>Decrease</button>
        <button onClick={() => counterContext.counterDispatch('reset')}>Reset</button>
      </div>
    );
}

export default ComponentF