import React, {useState, useCallback} from 'react';
import ContextWrapper from './ContextWrapper';
import Children from './Children';
import Children1 from './Children1';
import axios from 'axios'
import ContextAPI from './ContextAPI'


const Parent = () => {
    const[lapData, setLapData]=useState([])

    const getLaptopData= useCallback (async ()=>{
        try{
            const response= await axios.get("https://fakestoreapi.com/products")
            setLapData(response.data)
        }catch (error){
            console.log(error)
        }

    },[])
  return (
    <ContextWrapper>
      <div>
        <h1>Using Context API</h1>
        <ContextAPI.Provider value={{ lapData, getLaptopData}}>
        <Children />
        <Children1/>
        </ContextAPI.Provider>
      </div>
    </ContextWrapper>
    
  );
};

export default Parent;