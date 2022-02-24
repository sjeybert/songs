import React, { useEffect, useState } from "react";
import { getAllData } from "../api/api";
import ListItem from "./ListItem";

const SongList = () => {
  let [songLyrics, songLyricsController] = useState([]);

  useEffect(() => {
    getAllData(songLyricsController);
  }, []);

  // const lyricsListItem = songLyrics.map((lyrics) => <ListItem data={lyrics} />);

  // return <div className="main-container">{lyricsListItem}</div>;
  return <div>hello</div>;
};

export default SongList;
