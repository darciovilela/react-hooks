import React from 'react';
import ReducerTutorial from './ReducerTutorial';
import StateTutorial from './StateTutorial';
import StateTutorialNew from './StateTutorialNew';

const App = () => {
  return (
    <div>
      <StateTutorial />
      <hr></hr>
      <StateTutorialNew />
      <hr></hr>
      <ReducerTutorial />
    </div>
  );
};

export default App;
