import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getDataByID } from "../api/api";
import "../stylesheet/View.css";

const View = (props) => {
  // const [currentSong, currentSongController] = useState(props.currentSong);
  const [songKey, songKeyController] = useState([]);
  console.log("#View", "songkey", songKey);
  console.log("#View", "**currentsong", props.currentSong);

  useEffect(() => {
    let tempKey = [];
    if (props.currentSong) {
      let pallavi = Object.keys(props.currentSong.Data).filter((key) =>
        key.includes("pallavi")
      );
      if (pallavi) tempKey.push(...pallavi);
      let saranam = Object.keys(props.currentSong.Data).filter((key) =>
        key.includes("saranam")
      );

      if (saranam) {
        tempKey.push(...saranam);
      }
      if (tempKey) {
        console.log("temp", tempKey);
        songKeyController(...songKey, tempKey);
      }
    }
    return () => {
      console.log("exit view");
    };
  }, []);

  const renderLyrics = () => {
    let lyrics = [];
    if (songKey) {
      lyrics = songKey.map((key) => (
        <div key={key} className={`lyrics_container ${key}`}>
          <div className="lyrics_data tamil-font">
            {props.currentSong.Data[key]}
          </div>
        </div>
      ));
    }
    return lyrics;
  };

  return (
    <div
      className="View"
      onKeyDown={props.exitFullScreenHandler}
      //   style={{ backgroundImage: `url(${preview.thumbnail})` }}
    >
      <div className="lyrics_wrapper">{renderLyrics()}</div>
    </div>
  );
};

export default View;
