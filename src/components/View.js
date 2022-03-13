import React, { useState, useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { getDataByID } from "../api/api";
import "../stylesheet/View.css";

const View = (props) => {
  const goto = useRef([]);
  console.log("GOTO", goto);
  console.log("Loading View");
  const [songKey, songKeyController] = useState([]);

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
        songKeyController(...songKey, tempKey);
      }
    }
    return () => {
      console.log("exit view");
    };
  }, []);

  // const executeScroll = () => myRef.current.scrollIntoView();
  const renderLyrics = () => {
    goto.current = [];
    let lyrics = [];
    if (songKey) {
      lyrics = songKey.map((key) => (
        <div
          key={key}
          ref={(element) => element && goto.current.push(element)}
          className={`lyrics_container ${key}`}
        >
          <div className="lyrics_data tamil-font">
            {props.currentSong.Data[key]}
          </div>
        </div>
      ));
    }
    return lyrics;
  };

  const gotoHandler = (index) => {
    console.log(goto.current[index]);
    goto.current[index].scrollIntoView({ behavior: "smooth" });
  };
  const renderNavigation = () => {
    let navigationLinks = [];

    if (songKey) {
      navigationLinks = songKey.map((key, index) => {
        let a = "";
        // console.log(props.currentSong.Data[key].split(" ", 2).toString());
        props.currentSong.Data[key].split(" ", 3).forEach((element) => {
          a += element + " ";
        });
        return (
          <div className={`goto ${key}`} onClick={() => gotoHandler(index)}>
            {a}
          </div>
        );
      });
    }
    // console.log(songKey, navigationLinks);
    return navigationLinks;
  };

  return (
    <div
      className="View"

      //   style={{ backgroundImage: `url(${preview.thumbnail})` }}
    >
      <div className="lyrics_wrapper">{renderLyrics()}</div>
      <div className="lyrics_guide">{renderNavigation()}</div>
    </div>
  );
};

export default View;
