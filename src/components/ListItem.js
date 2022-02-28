import React, { useRef } from "react";
import "../stylesheet/ListItem.css";
import NonFavourite from "../assets/images/heart.png";
import sad from "../assets/images/sad.png";

const ListItem = (props) => {
  // console.log("data**", props.data);
  const listRef = useRef();

  return (
    <div
      ref={listRef}
      className="list-item-wrapper"
      onClick={() => {
        props.currentSongController(props.data);
        props.fullScreenHandler();
      }}
    >
      <div className="row-1 tamil-font">
        <div className="title">{props.data.Title}</div>
      </div>
      <div className="row-2 tamil-font">{props.data.Data.pallavi}</div>
      <div className="row-3">
        <img className="favourite-section" src={NonFavourite} />

        <img className="genre" src={sad} />
      </div>
    </div>
  );
};

export default ListItem;
