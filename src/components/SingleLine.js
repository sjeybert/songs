import React from "react";
import "../stylesheet/SingleLine.css";

const SingleLine = () => {
  return (
    <div className="single-line-wrapper">
      <div className="label-container">
        <label htmlFor="inp">Song Title</label>
        <span className="mandatory">*</span>
      </div>
      <input
        className="single-line"
        id="inp"
        type="text"
        placeholder="Search Songs..."
      />
    </div>
  );
};

export default SingleLine;
