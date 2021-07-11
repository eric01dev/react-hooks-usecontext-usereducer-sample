import { useReducer } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';
import { CounterContext, reducer, initialState } from './CounterContextReducer';

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider
      value = {{ counterCount: count, counterDispatch: dispatch }}>
    <div>
      Count - {count}
      <ComponentA />
      <ComponentB>
        <ComponentD />
      </ComponentB>
      <ComponentC />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
