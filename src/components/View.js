import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getDataByID } from "../api/api";
import "../stylesheet/View.css";
import Loader from "./Loader";

const View = () => {
  const [currentSong, currentSongController] = useState();
  const [songKey, songKeyController] = useState([]);
  console.log(songKey);
  console.log(currentSong, !currentSong);
  const { id } = useParams();
  useEffect(() => {
    getDataByID(id, currentSongController);
    // view.current.requestFullscreen();
  }, []);
  useEffect(() => {
    let tempKey = [];
    if (currentSong) {
      let pallavi = Object.keys(currentSong.Data).filter((key) =>
        key.includes("pallavi")
      );
      if (pallavi) tempKey.push(...pallavi);
      let saranam = Object.keys(currentSong.Data).filter((key) =>
        key.includes("saranam")
      );

      if (saranam) {
        tempKey.push(...saranam);
      }
      if (tempKey) {
        songKeyController(...songKey, tempKey);
      }
    }
  }, [currentSong]);

  const renderLyrics = () => {
    let lyrics = [];
    if (songKey) {
      lyrics = songKey.map((key) => (
        <div className={`lyrics_container ${key}`}>
          <div className="lyrics_data tamil-font">{currentSong.Data[key]}</div>
        </div>
      ));
    }
    return lyrics;
  };
  // let saranam;
  // console.log(currentSong);
  // if (currentSong) {
  // let saranam = Object.keys(currentSong.Data).filter((data) =>
  //   data.contains("saranam")
  // );
  // }
  // console.log(saranam);
  //   const songLoader = () => {
  //     if (currentSong.Data != null) {
  //       console.log("yes", currentSong.Data.pallavi);
  //       let a;
  //       if (currentSong.Data.pallavi != null) {
  //         a += <div className="pallavi">{currentSong.Data.pallavi}</div>;
  //       }
  //       if (currentSong.Data.anu_pallavi != null) {
  //         a += <div className="anu_pallavi">{currentSong.Data.anu_pallavi}</div>;
  //       }
  //       return a;
  //     }
  //   };
  //   const saranam_loader = () => {
  //       currentSong.Data.
  //   }
  const view = useRef();
  return (
    <div
      ref={view}
      className="View"
      //   style={{ backgroundImage: `url(${preview.thumbnail})` }}
      onClick={() => view.current.requestFullscreen()}
    >
      <div className="lyrics_wrapper">{renderLyrics()}</div>
      <div className={`loader ${currentSong ? "hidden" : ""}`}>
        <Loader />
      </div>
    </div>
  );
};

export default View;
