import React from 'react'
import { useContext } from 'react';
import { CounterContext } from './CounterContextReducer';
import ComponentE from './ComponentE';

const ComponentC = () => {
    const counterContext = useContext(CounterContext);
    return (
      <div>
        ComponentC: {counterContext.counterCount}&nbsp;
        <button onClick={() => counterContext.counterDispatch('increment')}>Increase</button>
        <button onClick={() => counterContext.counterDispatch('decrement')}>Decrease</button>
        <button onClick={() => counterContext.counterDispatch('reset')}>Reset</button>
        <ComponentE />
      </div>
    );
}

export default ComponentC