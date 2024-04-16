import React, {useState} from 'react';
import Custombutton from './Components/Custombutton';


const Registration= () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const selectEmail=(e)=>{
        const value=e.target.value
        console.log("input typed")
        setEmail(value)
    }

    const selectPassword=(e)=>{
        const value=e.target.value
        setPassword(value) 
    }

    const Register = () => {
    console.log(email, password);
    }
    const handleBlur = () => {
        console.log('Input blurred');
      };
    
    
      const handleFocus = () => {
        console.log('Input focused');
      };
    return(
        <>
        <input  type="email"  value={email}  onChange={selectEmail} onBlur={handleBlur} onFocus={handleFocus}  />
        <input onBlu={ selectEmail} type="email" name="email" placeholder="Enter your email" value={email}/>
        <input onBlur={selectPassword} type="password" name="password" placeholder="Enter your password" value={password}/>
        {/* <button onClick={Register}>Registration</button> */}
        <Custombutton parms={false} title="Registration" clickable={Register}/>
        <p>{email }</p>
        <p>{password}</p>
        </>
    )
}
export default Registration; 