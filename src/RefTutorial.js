import React, { useRef } from 'react';

//  used to manage focus or text selection
const RefTutorial = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <div>
      <h2>useRef</h2>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
};

export default RefTutorial;
