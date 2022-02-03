import React, { useContext } from 'react';
import { AppContext } from './ContextTutorial';

const User = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h2>Name: {username}</h2>
    </div>
  );
};

export default User;
