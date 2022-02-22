import React from "react";
import "../stylesheet/ImageRadio.css";

const ImageRadio = (props) => {
  return (
    <div className="ImageRadio" onClick={() => props.clickHandler(props.data)}>
      <label>
        <input
          className="hide-radio-button"
          type="radio"
          name="test"
          value="small"
          checked
        />
        <img src={props.data.thumbnail} />
      </label>
    </div>
  );
};

export default ImageRadio;
