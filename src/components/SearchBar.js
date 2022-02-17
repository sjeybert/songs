import React from "react";
import SearchIcon from "../assets/images/search.png";
import "../stylesheet/SearchBar.css";
import Poem from "../assets/images/poem.png";
import Close from "../assets/images/close.png";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <form>
        <div className="search-box">
          <img className="search-icon" src={SearchIcon} />
          <input
            className="search-input"
            type="text"
            placeholder="Search Songs..."
          />
          <img className="close" src={Close} />
        </div>
      </form>
      <div className="search-match-container">
        <div className="filter">
          <div className="filter-all active">All</div>
          <div className="filter-starting">starting</div>
          <div className="filter-stanza">Stanza</div>
        </div>
        <ol>
          <li>
            <div className="match-data">
              <div className="title">மகிமையின் மேகமாக இறங்கி</div>
            </div>
          </li>
          <li>
            <div className="match-data">
              <div className="title">மகிமையில் பிரவேசிக்க</div>
            </div>
          </li>
          <li>
            <img src={Poem} />
            <div className="match-data">
              <div className="title">பிரவேசிக்க</div>
              <div className="match-string">கீர்த்தியிலும் மகிமையிலும்</div>
            </div>
          </li>
          <li>
            <div className="match-data">
              <div className="title">வல்லமையுடையவர்-மகிமையான</div>
            </div>
          </li>
          <li>
            <img src={Poem} />
            <div className="match-data">
              <div className="title">வல்லமை...</div>
              <div className="match-string">உயர்ந்தவரை துதிப்போம் மகிமை</div>
            </div>
          </li>
          <li>
            <div className="match-data">
              <div className="title">மகிமையில் பிரவேசிக்க</div>
            </div>
          </li>
          <li>
            <div className="match-data">
              <div className="title">கலங்காதே என் மகனே</div>
            </div>
          </li>
          <li>
            <div className="match-data">
              <div className="title">வா வா மகனே எழுந்திடு</div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SearchBar;
