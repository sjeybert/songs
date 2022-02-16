import React from "react";
import "../stylesheet/ListItem.css";
import author from "../assets/images/author.png";
import sad from "../assets/images/sad.png";

const ListItem = (props) => {
  return (
    <div className="list-item-wrapper">
      <div className="row-1">
        <div className="title">{props.data.title}</div>
      </div>
      <div className="row-2">{props.data.pallavi}</div>
      <div className="row-3">
        <img className="author" src={author} />
        <span>{props.data.beat}</span>
        <span>{props.data.chord}</span>
        <img className="genre" src={sad} />
      </div>
    </div>
  );
};

export default ListItem;
