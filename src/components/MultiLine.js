import React, { useState } from "react";
import Song from "../assets/images/song.png";
import "../stylesheet/MultiLine.css";

const MultiLine = (props) => {
  const [value, valueController] = useState("");
  return (
    <div className="multi-line-wrapper">
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
  );
};

export default MultiLine;
