import React, { useState } from 'react';

// keep track and re-render the page if state changes

const initialName = () => {
  return <h3>My name is Darcio</h3>;
};

const StateTutorialNew = () => {
  const [inputValue, setInputValue] = useState(initialName);

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <h2>useState - Sample 2</h2>
      <input placeholder="Digit some text..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorialNew;
