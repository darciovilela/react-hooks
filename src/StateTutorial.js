import React, { useState } from 'react';

// keep track and re-render the page if state changes

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>useState</h2>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default StateTutorial;
