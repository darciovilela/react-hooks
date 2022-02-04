import React, { useEffect, useState } from 'react';
import axios from 'axios';

// effect is primary used for making API calls when loads the page. In this case, load just the email of first object of array. To speciffy to just happen once, use empty []. To request API in every single click, put count inside [].
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
      <h2>useEffect</h2>
      <h3>Hello</h3>
      <br></br>
      <h3>{data}</h3>
      <h3>{count}</h3>
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
