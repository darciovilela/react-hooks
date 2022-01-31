import React from 'react';
import EffectTutorial from './EffectTutorial';
import ReducerTutorial from './ReducerTutorial';
import RefTutorial from './RefTutorial';
import StateTutorial from './StateTutorial';
import StateTutorialNew from './StateTutorialNew';

const App = () => {
  return (
    <div>
      <StateTutorial />
      <br></br>
      <hr></hr>
      <StateTutorialNew />
      <br></br>
      <hr></hr>
      <ReducerTutorial />
      <br></br>
      <hr></hr>
      <EffectTutorial />
      <br></br>
      <hr></hr>
      <RefTutorial />
    </div>
  );
};

export default App;
