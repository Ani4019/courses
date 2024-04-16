import React, { useContext } from 'react';
import ContextAPI from './ContextAPI';

const Children= () => {
  const {  getLaptopData } = useContext(ContextAPI);

  return (
    <div>
      
      <button onClick={getLaptopData}>Materials data</button>
    </div>
  );
};

export default Children;