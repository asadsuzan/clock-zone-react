import React from "react";
import "./Button.css";
const Button = ({ text, action }) => {
  return (
    <div className="button">
      <button onClick={action}>{text}</button>
    </div>
  );
};

export default Button;
