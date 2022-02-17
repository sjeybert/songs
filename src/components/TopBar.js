import React from "react";
import "../stylesheet/TopBar.css" ;
import logo from "../assets/images/logo.png"
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import add from "../assets/images/plus.png";

const TopBar = (props) => {
    return (
    <div className="top-bar-wrapper">
        <img className="logo" src={logo} />
        <SearchBar freezeHandler={props.freezeHandler} />
        <div className="col-3">
            <div>
                <img src={add} />
            </div>
            <Profile />
        </div>

    </div>
    );
};

export default TopBar ;