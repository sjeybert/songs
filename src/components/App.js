import React, { useState, useRef, useEffect } from "react";
import ListItem from "./ListItem";
import TopBar from "./TopBar";
import "../stylesheet/App.css";

const App = () => {
  // Root Container -> To Add Autofocus after page rendering
  const mainContainerWrapper = useRef();
  // State to find user focus the searchbar or not
  const [searchDropdown, searchDropdownController] = useState(false);

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

  const temp1 = {
    beat: "4/4",
    title: "இல்லாமல் செய்வேன் என்று சொன்னோர் முன்",
    pallavi: `இல்லாமல் செய்வேன் என்று சொன்னோர் முன்
    இடம் கொள்ளாமல் பெருகச்செய்யும் தேவன்
    நேராகும் வாய்ப்பில்லா உன் வாழ்வை சீராக மாற்றிட
    `,
    chord: "F maj",
  };
  const temp2 = {
    beat: "3/4",
    title: "அசாத்தியங்கள் சாத்தியமே",
    pallavi: `அசாத்தியங்கள் சாத்தியமே\n
    தேவா உங்க வர்த்தையாலே\n
    அசையாத மலை கூட அசைந்திடுமே\n
    அமராத புயல் கூட அமர்ந்திடுமே
    `,
    chord: "C maj",
  };
  const temp3 = {
    beat: "2/4",
    title: "சொன்ன சொல்லை காப்பாற்றும் தெய்வம்",
    pallavi: `சொன்ன சொல்லை காப்பாற்றும் தெய்வம்\n
    உம்மையன்றி யாரும் இல்லை\n
    முடிந்ததில் துவக்கத்தை பார்க்கும்\n
    உங்களுக்கு ஈடே இல்லை
    `,
    chord: "C maj",
  };
  const temp4 = {
    beat: "2/4",
    title: "எனக்கா இத்தன கிருபை",
    pallavi: `எனக்கா இத்தன கிருபை\n
    என் மேல் அளவற்ற கிருபை\n
    என்ன விட எத்தனை பேர் தகுதியாக இருந்தும்\n
    என்னை மட்டும்
    `,
    chord: "C maj",
  };

  return (
    <div
      tabIndex="0"
      ref={mainContainerWrapper}
      className={`main-container-wrapper ${!searchDropdown ? "" : "no-scroll"}`}
      onKeyDown={keyDownHandler}
    >
      <TopBar
        searchDropdown={searchDropdown}
        searchDropdownController={searchDropdownController}
      />
      <div className="main-container">
        <ListItem data={temp1} />
        <ListItem data={temp2} />
        <ListItem data={temp3} />
        <ListItem data={temp4} />
        <ListItem data={temp1} />
        <ListItem data={temp2} />
        <ListItem data={temp3} />
        <ListItem data={temp4} />
        <ListItem data={temp1} />
        <ListItem data={temp2} />
        <ListItem data={temp3} />
        <ListItem data={temp4} />
        <ListItem data={temp1} />
        <ListItem data={temp2} />
        <ListItem data={temp3} />
        <ListItem data={temp4} />
        <ListItem data={temp1} />
        <ListItem data={temp2} />
        <ListItem data={temp3} />
        <ListItem data={temp4} />
      </div>
      <div className={!searchDropdown ? "hidden" : ""} id="overlay"></div>
    </div>
  );
};

export default App;
