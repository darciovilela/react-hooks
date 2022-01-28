import React, { useReducer } from 'react';

// useful to keep track of more than one state declaration
const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1, showText: state.showText };
    case 'toggleShowText':
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'Increment' });
          dispatch({ type: 'toggleShowText' });
        }}
      >
        Click here
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;