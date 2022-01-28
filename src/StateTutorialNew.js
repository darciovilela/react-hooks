import React, { useState } from 'react';

const StateTutorialNew = () => {
  const [inputValue, setInputValue] = useState('My name is John');

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="Digit text..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorialNew;
