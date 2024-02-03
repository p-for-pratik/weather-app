import React from "react";
import "./inputcontrol.css";

const InputControl = (props) => {
  return(
  <div className="container1">
    {props.label && <label>{props.label}</label>}
    <input type={props.type || "text"} {...props} />
  </div>
)};

export default InputControl;
