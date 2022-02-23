import React, { useState } from "react";
import Song from "../assets/images/song.png";
import "../stylesheet/MultiLine.css";

const MultiLine = (props) => {
  const [value, valueController] = useState("");
  const [properties, propertiesController] = useState({
    mandatory: props.mandatory,
  });
  return (
    <div className="multi-line-wrapper">
      <div className="field-wrapper">
        <div className="label-container">
          <img src={Song} />
        </div>
        <textarea
          className="multi-line"
          id={props.name}
          type="text"
          placeholder={props.placeholder}
          value={value}
          onChange={(e) => {
            valueController(e.target.value);
            props.formDataController({
              ...props.formData,
              [props.name]: e.target.value,
            });
          }}
        />
      </div>
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

export default MultiLine;
