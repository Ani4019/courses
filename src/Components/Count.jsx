import React, {useState, useEffect, useCallback, useMemo} from "react";

const Count=()=> {
    const[count, setCount]=useState(0);
    const[message, setMessage]=useState("odd Number");
    // useEffect(()=> {
    //     if (count % 2 === 0){
    //         setMessage("it is a even number")
    //     }else {
    //         setMessage("it is a odd number")
    //     }
    // },[count]) 
    // const Increment = useCallback(() =>{
    //     setCount((count) =>
    //     count+1) 
    // },[])

    const mulCount = useMemo(() => {
        return count * count;
      }, [count]);
    
    return(
            <>
                <div>
                <p>{mulCount}</p>    
                <p>{message}</p>              
                </div>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
                
            </>
    )
}


export default Count; 