import React, { useContext } from 'react';
import Context from './ContextAPI';

const Children1= () => {
  const { lapData } = useContext(Context);

  return (
    <div>
      {/* <p>Count: {lapData}</p> */}
     { console.log(lapData)}
    </div>
  );
};

export default Children1;