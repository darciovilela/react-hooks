import React, { useState, createContext } from 'react';
import Login from './Login';
import User from './User';

export const AppContext = createContext();

// context is a collection of states and you have access to all of them inside of wrap provider
const ContextTutorial = () => {
  const [username, setUsername] = useState('');
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <h2>useContext</h2>
      <Login /> <User />
    </AppContext.Provider>
  );
};

export default ContextTutorial;
