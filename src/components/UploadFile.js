import React, { useState, useRef } from "react";
import Upload from "../assets/images/upload.png";
import "../stylesheet/UploadFile.css";
import "../stylesheet/UploadIcon.css";

const UploadFile = (props) => {
  const fileUpload = useRef();
  console.log(fileUpload);
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  console.log(image);
  return (
    <div className="UploadFile">
      <label htmlFor="image-upload">
        <div
          className="file-upload-flex"
          style={{
            backgroundImage: `url(${image})`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <input
            id="image-upload"
            ref={fileUpload}
            type="file"
            hidden
            accept="image/*"
            onChange={onImageChange}
          />

          <div className="upload-file-wrapper">
            {/* <img src={Upload} /> */}
            <i class="upload_icon" style={{ color: props.textColor }}></i>
            <p className="upload-text" style={{ color: props.textColor }}>
              Drag your Image here, or <span>Browse</span>
            </p>
          </div>
        </div>
      </label>
    </div>
  );
};

export default UploadFile;
