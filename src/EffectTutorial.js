import React, { useEffect, useState } from 'react';
import axios from 'axios';

// something must happen when page renders. In this case, load just the email of first object in array. To speciffy to just happen once, use empty []. To request API in every single click, put count inside [].
const EffectTutorial = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[0].email);
      });
  }, [count]);

  return (
    <div>
      Hello<br></br>
      <h2>{data}</h2>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default EffectTutorial;
