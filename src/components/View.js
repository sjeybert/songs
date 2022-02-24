import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getDataByID } from "../api/api";
import "../stylesheet/View.css";

const View = () => {
  const [currentSong, currentSongController] = useState();
  const { id } = useParams();

  useEffect(() => {
    getDataByID(id, currentSongController);
    // view.current.requestFullscreen();
  }, []);
  let saranam;
  console.log(currentSong);
  if (currentSong) {
    let saranam = Object.keys(currentSong.Data).filter((data) =>
      data.contains("saranam")
    );
  }
  console.log(saranam);
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
      {/* <div className="pallavi">{currentSong.Data.pallavi}</div>
      {currentSong.Data["anu_pallavi"] ? (
        <div className="anu_pallavi">{currentSong.Data.anu_pallavi}</div>
      ) : null} */}
      hello
    </div>
  );
};

export default View;
