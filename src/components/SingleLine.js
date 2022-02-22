import React, { useState } from "react";

import "../stylesheet/SingleLine.css";

const SingleLine = (props) => {
  const [value, valueController] = useState("");
  const [properties, propertiesController] = useState({
    mandatory: props.mandatory,
  });
  return (
    <div className="single-line-wrapper">
      <div className="label-container">
        <label htmlFor={props.name}>{props.labelName}</label>
        <span className={`mandatory ${!properties.mandatory ? "hidden" : ""}`}>
          *
        </span>
      </div>
      <input
        className="single-line"
        id={props.name}
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        value={value}
        onChange={(e) => {
          valueController(e.target.value);
          props.formDataController({
            ...props.formData,
            [props.name]: e.target.value,
          });
        }}
      />
      <p
        className={`error-message ${
          !props.inputError.includes(props.name) ? "hide" : ""
        }`}
      >
        {props.labelName} should not be Empty!
      </p>
    </div>
  );
};

export default SingleLine;
