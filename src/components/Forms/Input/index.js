import React from "react";
import "./styles.scss";

function Input({ handleChange, label, ...otherProps }) {
  return (
    <div className="formRow">
      {label && <label>{label}</label>}
      <input className="formInput" onChange={handleChange} {...otherProps} />
    </div>
  );
}

export default Input;
