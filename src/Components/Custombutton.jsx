import React from "react";
import Button from "react-bootstrap/Button";

const Custombutton = (props) => {
  return (
    <>
      {props.parms ? (<Button variant={props.color} onClick={() => props.clickable(props.type)}>{props.title}</Button>) 
      : (<Button variant={props.color} onClick={props.clickable}>{props.title}</Button>)}
    </>
  );
};

export default Custombutton;
