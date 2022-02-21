import React from "react";
import Song from "../assets/images/song.png";
import "../stylesheet/MultiLine.css";

const MultiLine = () => {
  return (
    <div className="multi-line-wrapper">
      <div className="label-container">
        <img src={Song} />
      </div>
      <textarea
        className="multi-line"
        id="inp"
        type="text"
        placeholder="Search Songs..."
      />
    </div>
  );
};

export default MultiLine;
