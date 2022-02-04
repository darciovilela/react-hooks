import React, { useState } from 'react';

// keep track and re-render the page if state changes

const initialName = () => {
  return <h4>My name is Darcio</h4>;
};

const StateTutorialNew = () => {
  const [inputValue, setInputValue] = useState(initialName);

  const onChange = (event) => {
    const secName = event.target.value;
    const newValue = <h4>{secName}</h4>;
    setInputValue(newValue);
  };

  return (
    <div>
      <h2>useState - Sample 2</h2>
      <input placeholder="Digit your name..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorialNew;
