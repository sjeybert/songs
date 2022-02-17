import React from "react";
import "../stylesheet/ListItem.css";
import NonFavourite from "../assets/images/heart.png";
import sad from "../assets/images/sad.png";

const ListItem = (props) => {
  return (
    <div className="list-item-wrapper">
      <div className="row-1 tamil-font">
        <div className="title">{props.data.title}</div>
      </div>
      <div className="row-2 tamil-font">{props.data.pallavi}</div>
      <div className="row-3">
        <img className="favourite-section" src={NonFavourite} />
       
        <img className="genre" src={sad} />
      </div>
    </div>
  );
};

export default ListItem;
