import React, { useEffect, useState } from "react";
import { getAllData } from "../api/api";
import ListItem from "./ListItem";

const SongList = () => {
  let [songLyrics, songLyricsController] = useState([]);
  useEffect(
    () => getAllData().then((data) => songLyricsController(JSON.parse(data))),
    []
  );
  console.log(typeof songLyrics, songLyrics);
  const lyricsListItem = songLyrics.map((lyrics) => <ListItem data={lyrics} />);

  return <div className="main-container">{lyricsListItem}</div>;
};

export default SongList;
