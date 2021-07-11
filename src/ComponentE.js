import React from 'react'
import { useContext } from 'react';
import { CounterContext } from './CounterContextReducer';
import ComponentF from './ComponentF';

const ComponentE = () => {
    const counterContext = useContext(CounterContext);
    return (
      <div>
        ComponentE: {counterContext.counterCount}&nbsp;
        <button onClick={() => counterContext.counterDispatch('increment')}>Increase</button>
        <button onClick={() => counterContext.counterDispatch('decrement')}>Decrease</button>
        <button onClick={() => counterContext.counterDispatch('reset')}>Reset</button>
        <ComponentF />
      </div>
    );
}

export default ComponentE