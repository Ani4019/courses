import React, { useState } from 'react';
import ContextAPI from './ContextAPI'

const ContextWrapper = ({ children }) => {
  const [count, setCount] = useState(0);


  const increment = () => {
    setCount(count + 1);
  };

  return (
    <ContextAPI.Provider value={{ count, increment}}>
     {children}
    </ContextAPI.Provider>
  );
};

export default ContextWrapper;