import React, { useState } from 'react';

// keep track and re-render the page if state changes

const StateTutorialNew = () => {
  const [inputValue, setInputValue] = useState('My name is John');

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <h2>useState</h2>
      <input placeholder="Digit text..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorialNew;
