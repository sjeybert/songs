import React, { useRef } from "react";
import Upload from "../assets/images/upload.png";
import "../stylesheet/UploadFile.css";

const UploadFile = () => {
  const fileUpload = useRef();
  return (
    <div className="UploadFile">
      <div className="label-container">
        <span className="label">Background Image</span>
        <span className="mandatory">*</span>
      </div>
      <label htmlFor="image-upload">
        <div className="file-upload-flex">
          <input
            id="image-upload"
            ref={fileUpload}
            type="file"
            hidden
            accept="image/*"
          />

          <div className="upload-file-wrapper">
            <img src={Upload} />
            <p className="upload-text">
              Drag your Image here, or <span>Browse</span>
            </p>
          </div>
        </div>
      </label>
    </div>
  );
};

export default UploadFile;
