import React, { useRef, useEffect, useState } from "react";
import { getAllData } from "../api/api";
import ListItem from "./ListItem";
import View from "./View";

const SongList = (props) => {
  let [songLyrics, songLyricsController] = useState([]);
  const [currentSong, currentSongController] = useState(null);
  const [isFullScreen, isFullScreenController] = useState(false);
  const view = useRef();

  const fullScreenHandler = () => {
    view.current.requestFullscreen();
    console.log(view);
  };

  const exitFullScreenHandler = (event) => {
    console.log("#Song List", "exit");
    // currentSongController(null);
  };

  useEffect(() => {
    console.log("#Song List", "Rendering...");
    console.log("#Song List", "current song", currentSong);
  });

  useEffect(() => {
    console.log("#Song List", "All data rendered");
    getAllData(songLyricsController);
  }, []);

  const lyricsListItem = songLyrics.map((lyrics) => (
    <ListItem
      key={lyrics.ID}
      data={lyrics}
      currentSongController={currentSongController}
      fullScreenHandler={fullScreenHandler}
    />
  ));

  return (
    <div

    // onKeyDown={props.keyDownHandler}
    >
      <div className="main-container">{lyricsListItem}</div>
      <div id="full_screen_container" ref={view}>
        {currentSong ? <View currentSong={currentSong} /> : null}
      </div>
    </div>
  );
  // return <div>hello</div>;
};

export default SongList;
