import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/TopBar.css";
import logo from "../assets/images/logo.png";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import add from "../assets/images/plus.png";

const TopBar = (props) => {
  return (
    <div className="top-bar-wrapper">
      <img className="logo" src={logo} />
      <SearchBar
        freezeHandler={props.freezeHandler}
        searchDropdown={props.searchDropdown}
        searchDropdownController={props.searchDropdownController}
      />
      <div className="col-3">
        <div className={`${props.isAddForm ? "hidden" : ""}`}>
          <Link to="/add">
            <img src={add} />
          </Link>
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default TopBar;
