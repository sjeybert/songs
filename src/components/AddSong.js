import React, { useState, useRef, useEffect } from "react";

import SingleLine from "./SingleLine";
import UploadFile from "./UploadFile";
import MultiLine from "./MultiLine";
import ImageRadio from "./ImageRadio";
import "../stylesheet/AddSong.css";
import { addData } from "../api/api";

const AddSong = (props) => {
  const [inputError, inputErrorController] = useState([]);
  const uploadData = () => {
    let formInput = {};
    let invalidFields = [];
    if (formData != null) {
      console.log("DATA", formData);
      if ("title-default-lang" in formData) {
        formInput["title-default-lang"] = formData["title-default-lang"];
      } else {
        invalidFields.push("title-default-lang");
      }
      if ("title-english" in formData) {
        formInput["title-english"] = formData["title-english"];
      } else {
        invalidFields.push("title-english");
      }
      formInput.data = formData;
    }
    console.log("payload", formInput);

    inputErrorController(invalidFields);

    // addData();
  };
  const [preview, previewController] = useState(props.settings.images[0]);
  const [formData, formDataController] = useState({});

  const [loadLyricsForm, loadLyricsFormController] = useState(false);
  const [data, dataController] = useState({
    count: 3,
  });
  let imagess = props.settings.images.map((data) => (
    <ImageRadio data={data} clickHandler={previewController} />
  ));
  const addLyricsView = useRef();
  useEffect(() => {
    console.log(formData);
  });
  const formFieldRender = () => {
    const renderHtml = [];
    let placeholder;
    let name;
    for (let i = 0; i < data.count; i++) {
      if (i == 0) {
        placeholder = "Pallavi";
        name = "pallavi";
      } else if (i == 1) {
        placeholder = "Anu-pallavi";
        name = "anu-pallavi";
      } else {
        placeholder = "Saranam";
        name = `saranam-${i - 1}`;
      }
      renderHtml.push(
        <MultiLine
          ref={data.count - 1 == i ? addLyricsView : null}
          placeholder={placeholder}
          mandatory={true}
          name={name}
          formDataController={formDataController}
          formData={formData}
          inputError={inputError}
        />
      );
    }

    return renderHtml;
  };
  return (
    <div className="add-form-container">
      <div className="AddSong">
        <div className="form-wrapper">
          <div className="title">Add Songs</div>
          <div className="row row-1">
            <SingleLine
              labelName="Song Title In Tamil"
              placeholder="Add your Song title here.."
              mandatory={true}
              name="title-default-lang"
              formDataController={formDataController}
              formData={formData}
              inputError={inputError}
            />
            <SingleLine
              labelName="Song Title In English"
              placeholder="Add your Song title here.."
              mandatory={true}
              name="title-english"
              formDataController={formDataController}
              formData={formData}
              inputError={inputError}
            />
          </div>
          <div className={`row row-2 ${loadLyricsForm ? "expand-form" : ""}`}>
            <div className="expand-label">
              <div className="expand-title">Song Lyrics</div>
              <div className="mandatory">*</div>
            </div>
            <div
              className={loadLyricsForm ? "hidden" : "label-2"}
              onClick={() => loadLyricsFormController(true)}
            >
              Add song lyrics here
            </div>
            <div className={loadLyricsForm ? "loadLyricsForm" : "hidden"}>
              <div className="text-area">{formFieldRender()}</div>

              <div
                className="add-button"
                onClick={() => {
                  console.log(addLyricsView);
                  dataController({ count: data.count + 1 });
                }}
              >
                <span>Add New Stanza</span>
              </div>
            </div>
          </div>
          <div className="row row-3">{/* <UploadFile /> */}</div>
          <div className="row row-4">
            <SingleLine
              labelName="Lyricist"
              placeholder="Lyricist Name"
              mandatory={false}
              name="lyricist"
              formDataController={formDataController}
              formData={formData}
              inputError={inputError}
            />
            <SingleLine
              labelName="Beat"
              placeholder="Enter Rhythm"
              mandatory={false}
              name="beat"
              formDataController={formDataController}
              formData={formData}
              inputError={inputError}
            />
            <SingleLine
              labelName="Chord"
              placeholder="Enter Chord"
              mandatory={false}
              name="chord"
              formDataController={formDataController}
              formData={formData}
              inputError={inputError}
            />
          </div>
        </div>

        <div className="preview-panel">
          <div className="preview-header-wrapper">
            <div className="preview-header">Live Preview</div>
            <div
              className="preview"
              style={{
                backgroundImage: `url(${preview.thumbnail})`,
                color: preview["font-color"],
              }}
            >
              இல்லாமல் செய்வேன் என்று சொன்னோர் முன் இடம் கொள்ளாமல்
              பெருகச்செய்யும் தேவன் நேராகும் வாய்ப்பில்லா உன் வாழ்வை சீராக
              மாற்றிட
            </div>
          </div>
          <div className="background-image-section">
            <div className="background-title">Background Image</div>
            <div className="background-images">{imagess}</div>
          </div>
        </div>
        <div className="footer">
          <button className="button add-button" onClick={uploadData}>
            Add
          </button>
          <button className="button cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddSong;
