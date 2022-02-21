import React, { useState, useEffect } from "react";
import SingleLine from "./SingleLine";
import UploadFile from "./UploadFile";
import MultiLine from "./MultiLine";
import "../stylesheet/AddSong.css";

const AddSong = () => {
  const [loadLyricsForm, loadLyricsFormController] = useState(false);
  const [data, dataController] = useState({
    count: 3,
  });

  const formFieldRender = () => {
    const renderHtml = [];
    for (let i = 0; i < data.count; i++) {
      renderHtml.push(<MultiLine />);
    }
    console.log(renderHtml);
    return renderHtml;
  };
  return (
    <div className="AddSong">
      <div className="form-wrapper">
        <div className="title">Add Songs</div>
        <div className="row-1">
          <SingleLine />
          <SingleLine />
        </div>
        <div className={`row-2 ${loadLyricsForm ? "expand-form" : ""}`}>
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
                dataController({ count: data.count + 1 });
              }}
            >
              <span>Add New Stanza</span>
            </div>
          </div>
        </div>
        <div className="row-3">
          <UploadFile />
        </div>
        <div className="row-4">
          <SingleLine />
          <SingleLine />
        </div>
      </div>
      <div className="preview-panel">
        <div className="preview-header">Live Preview</div>
        <div className="preview">
          இல்லாமல் செய்வேன் என்று சொன்னோர் முன் இடம் கொள்ளாமல் பெருகச்செய்யும்
          தேவன் நேராகும் வாய்ப்பில்லா உன் வாழ்வை சீராக மாற்றிட
        </div>
      </div>
      <div className="footer">
        <button className="button add-button">Add</button>
        <button className="button cancel-button">Cancel</button>
      </div>
    </div>
  );
};

export default AddSong;
