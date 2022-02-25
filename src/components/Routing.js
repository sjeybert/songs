import React, { useState, useRef, useEffect } from "react";
import TopBar from "./TopBar";
import SongList from "./SongList";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AddSong from "./AddSong";

import "../stylesheet/Routing.css";
import smallBlack from "../assets/images/background/black-small.jpg";
import smallWhite from "../assets/images/background/white-small.jpg";
import smallCloud from "../assets/images/background/cloud-small.jpg";
import smallLeaf from "../assets/images/background/leaf-small.jpg";
import View from "./View";

import Test from "./Test";

const Routing = () => {
  // State to find user focus the searchbar or not
  const [searchDropdown, searchDropdownController] = useState(false);

  const [isAddForm, isAddFormController] = useState(false);

  const [settings, settingsController] = useState({
    images: [
      {
        thumbnail: smallBlack,
        "font-color": "#e3f2fd",
        default: true,
      },
      {
        thumbnail: smallLeaf,
        "font-color": "#263238",
        default: true,
      },
      {
        thumbnail: smallWhite,
        "font-color": "#1f2c57",
        default: false,
      },
      {
        thumbnail: smallCloud,
        "font-color": "#253237",
        default: false,
      },
    ],
  });
  // Root Container -> To Add Autofocus after page rendering
  const mainContainerWrapper = useRef();

  // UseEffect for First Render
  useEffect(() => {
    // Add Autofocus to the root container after page rendering
    mainContainerWrapper.current.focus();
  }, []);
  // UseEffect for each Render
  useEffect(() => {
    // Autofocus to root container if the user close the search bar
    if (!searchDropdown) {
      mainContainerWrapper.current.focus();
    }
  });
  // Keyboard event
  const keyDownHandler = (e) => {
    // Oper Searchbar
    if (e.key == "/") {
      if (!searchDropdown) e.preventDefault();
      searchDropdownController(true);
    }
    // Close Searchbar
    if (e.key == "Escape") {
      searchDropdownController(false);
    }
  };
  return (
    <Router>
      <div
        tabIndex="0"
        ref={mainContainerWrapper}
        className={`main-container-wrapper ${
          !searchDropdown ? "" : "no-scroll"
        }`}
        onKeyDown={keyDownHandler}
      >
        <TopBar
          searchDropdown={searchDropdown}
          searchDropdownController={searchDropdownController}
          isAddForm={isAddForm}
        />
        <Routes>
          <Route path="/" element={<SongList />} />
          <Route
            path="/add"
            element={
              <AddSong
                settings={settings}
                isAddFormController={isAddFormController}
              />
            }
          />
          <Route path="/view/:id" element={<View />}></Route>
          <Route path="test" element={<Test />} />
        </Routes>

        <div className={!searchDropdown ? "hidden" : ""} id="overlay"></div>
      </div>
    </Router>
  );
};

export default Routing;
