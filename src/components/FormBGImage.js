import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import UploadFile from "./UploadFile";
import "../stylesheet/FormBGImage.css";

const FormBGImage = () => {
  const [textColor, setTextColor] = useState("#9e9e9e");
  return (
    <div className="bg_image_container">
      <div className="editor">
        <UploadFile textColor={textColor} />
        <ColorPicker setTextColor={setTextColor} />
      </div>
      <div className="footer">
        <button className="add-button button">Submit</button>
        <button className="button cancel-button">Cancel</button>
      </div>
    </div>
  );
};

export default FormBGImage;
