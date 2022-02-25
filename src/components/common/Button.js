import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="button_container" onClick={props.onClick}>
      {props.title}
    </div>
  );
};

export default Button;
