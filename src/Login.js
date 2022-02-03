import React, { useContext } from 'react';
import { AppContext } from './ContextTutorial';

const Login = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        placeholder="enter your name..."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
