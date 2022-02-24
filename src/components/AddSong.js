import React, { useState, useRef, useEffect } from "react";

import SingleLine from "./SingleLine";
import UploadFile from "./UploadFile";
import MultiLine from "./MultiLine";
import ImageRadio from "./ImageRadio";
import "../stylesheet/AddSong.css";
import { addData } from "../api/api";

const AddSong = (props) => {
  useEffect(() => {
    props.isAddFormController(true);
    return () => props.isAddFormController(false);
  }, []);
  const [inputError, inputErrorController] = useState([]);
  const uploadData = () => {
    let formInput = {};
    let invalidFields = [];
    if (formData != null) {
      if ("title_default_lang" in formData) {
        formInput["title_default_lang"] = formData["title_default_lang"];
        formInput["language"] = "Tamil";
      } else {
        invalidFields.push("title_default_lang");
      }
      if ("english_title" in formData) {
        formInput["english_title"] = formData["english_title"];
      } else {
        invalidFields.push("english_title");
      }
      if (!"pallavi" in formData) {
        invalidFields.push("pallavi");
      }

      formInput.data = formData;
    }
    console.log("payload", formInput);

    if (invalidFields.length == 0) {
      addData(formInput);
    } else {
      inputErrorController(invalidFields);
    }
  };

  const [preview, previewController] = useState(
    props.settings.images.find((img) => img.default == true)
  );

  const [formData, formDataController] = useState({});

  const [loadLyricsForm, loadLyricsFormController] = useState(false);
  const [data, dataController] = useState({
    count: 3,
  });
  let imagess = props.settings.images.map((data, index) => (
    <ImageRadio key={index} data={data} clickHandler={previewController} />
  ));
  const scrollView = useRef();
  const TEST = useRef();
  useEffect(() => {
    scrollView.current.scrollIntoView(false);
  }, [data]);
  useEffect(() => {
    console.log(props.settings.images.find((img) => img.default == true));
  }, []);
  const formFieldRender = () => {
    const renderHtml = [];
    let placeholder;
    let name;
    for (let i = 0; i < data.count; i++) {
      if (i == 0) {
        placeholder = "Pallavi";
        name = "pallavi";
      } else if (i == 1) {
        placeholder = "Anu_pallavi";
        name = "anu-pallavi";
      } else {
        placeholder = "Saranam";
        name = `saranam_${i - 1}`;
      }
      renderHtml.push(
        <MultiLine
          key={name}
          placeholder={placeholder}
          mandatory={i == 0 || i == 2 ? true : false}
          name={name}
          formDataController={formDataController}
          formData={formData}
          inputError={inputError}
          labelName={placeholder}
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
              name="title_default_lang"
              formDataController={formDataController}
              formData={formData}
              inputError={inputError}
            />
            <SingleLine
              labelName="Song Title In English"
              placeholder="Add your Song title here.."
              mandatory={true}
              name="english_title"
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
              <div ref={TEST} className="text-area">
                {formFieldRender()}
                <div ref={scrollView} className="scroll-into-view"></div>
              </div>

              <div
                className={`add-button ${data.count > 8 ? "hide" : ""}`}
                onClick={() => {
                  dataController({ count: data.count + 1 });
                }}
              >
                <span>Add New Stanza</span>
              </div>
            </div>
            <p
              className={`error-message ${
                loadLyricsForm ||
                (!loadLyricsForm &&
                  !inputError.includes("pallavi") &&
                  !inputError.includes("saranam"))
                  ? "hide"
                  : ""
              }`}
            >
              Song Lyrics should not be Empty!
            </p>
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
