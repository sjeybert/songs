import React, { useState, useRef } from "react";
import SearchIcon from "../assets/images/search.png";
import "../stylesheet/SearchBar.css";
import Poem from "../assets/images/poem.png";
import Close from "../assets/images/close.png";

const SearchBar = (props) => {
  // state to hold search dropdown value
  const [inputValue, inputValueController] = useState("");

  // Reference to input element
  const inputElement = useRef();

  // Event handler -> onClick searchbar
  const onClickSearch = (e) => {
    if (e) e.stopPropagation();

    props.searchDropdownController(true);
  };
  // Event handler -> onClick close button inside searchbar
  const onClickClose = (event) => {
    if (event) event.stopPropagation();
    props.searchDropdownController(false);
  };

  if (props.searchDropdown) {
    inputElement.current.focus();
  } else {
    // Reset searchbar value if user closes searchbar
    if (inputValue) inputValueController("");
  }

  return (
    <div className={`SearchBar ${props.searchDropdown ? "expand" : ""}`}>
      <form onClick={onClickSearch} onSubmit={(e) => e.preventDefault()}>
        <div className="search-box">
          <img className="search-icon" src={SearchIcon} />
          <input
            ref={inputElement}
            className="search-input"
            type="text"
            placeholder="Search Songs..."
            onChange={(e) => inputValueController(e.target.value)}
            value={inputValue}
          />
          <img
            className={`close ${!props.searchDropdown ? "hidden" : ""}`}
            src={Close}
            onClick={onClickClose}
          />
        </div>
      </form>
      <div
        className={`search-match-container ${
          !props.searchDropdown ? "hidden" : ""
        }`}
      >
        <div className="search-wrapper">
          <div className="line-items">
            <div className="filter">
              <div className="filter-all active">All</div>
              <div className="filter-starting">starting</div>
              <div className="filter-stanza">Stanza</div>
            </div>
            <ol className="tamil-font">
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
                  <div className="match-string">
                    உயர்ந்தவரை துதிப்போம் மகிமை
                  </div>
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
              <li>
                <div className="match-data">
                  <div className="title">வல்லமையுடையவர்-மகிமையான</div>
                </div>
              </li>
              <li>
                <img src={Poem} />
                <div className="match-data">
                  <div className="title">வல்லமை...</div>
                  <div className="match-string">
                    உயர்ந்தவரை துதிப்போம் மகிமை
                  </div>
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
          <div className="quick-preview-wrapper">
            <div className="preview-meta">
              <div className="title tamil-font">
                நான் திறக்கும் கதவுகள் எல்லாம் சில நேரம் அடைக்கிறீர்
              </div>
              <div className="song-info">
                <div>
                  <span className="info-title">Lyricst :</span>
                  <span className="info-value">John Jebaraj</span>
                </div>
                <div>
                  <span className="info-title">Chord :</span>
                  <span className="info-value">D min</span>
                </div>
                <div>
                  <span className="info-title">Beat :</span>
                  <span className="info-value">4/4</span>
                </div>
              </div>
            </div>
            <div className="quick-preview tamil-font">
              <ul>
                <li>
                  நான் திறக்கும் கதவுகள் எல்லாம் சில நேரம் அடைக்கிறீர் கோபத்தால்
                  பகைத்தாலும் தேவன் நீர் நகைக்கிறீர் நான் நினைக்கும்
                  வழிகளையெல்லாம் சில நேரம் அடைக்கிறீர் கண்ணீரால் புலம்பினாலும்
                  என்னை நீர் அணைக்கிறீர்
                </li>
                <li>
                  அடைத்ததின் காரணம் மூடன் நான் கற்றுக்கொண்டேன்
                  வேண்டுவதைப்பார்க்கிலும் அதிகமாய் பெற்றுக்கொண்டேன் அடைத்ததின்
                  காரணம் இன்று நான் கற்று கொண்டேன் வேண்டுவதைப்பார்க்கிலும்
                  அதிகமாய் பெற்றுக்கொண்டேன்
                </li>
                <li>
                  சின்ன சின்ன ஆசைகள் நீர் பார்க்கிறீர் ஏக்கங்கள் நீர்
                  தீர்க்கிறீர் முற்றும் அறிந்த போதிலும் அல்லையில் என்னை
                  வைக்கிறீர் ஆசைகள் நீர் பார்க்கிறீர் ஏக்கங்கள் நீர்
                  தீர்க்கிறீர் மூடன் என்ற போதிலும் அல்லையில் என்னை வைக்கிறீர்
                </li>
                <li>
                  தகப்பன் அல்லவோ மீன் கேட்டால் பாம்பை தருவீரோ தகப்பன் உம்மிடம்
                  உம் தயவொன்றை கேட்கிறேன் வேறென்ன எனக்காசை உம் தயவை பாட வேண்டும்
                  ஆசையில் ஒரு ஓசை உம் ஜனங்களை அது தொட வேண்டும்
                </li>
                <li>
                  நான் திறக்கும் கதவுகள் எல்லாம் சில நேரம் அடைக்கிறீர் கோபத்தால்
                  பகைத்தாலும் தேவன் நீர் நகைக்கிறீர் நான் நினைக்கும்
                  வழிகளையெல்லாம் சில நேரம் அடைக்கிறீர் கண்ணீரால் புலம்பினாலும்
                  என்னை நீர் அணைக்கிறீர்
                </li>
                <li>
                  1. அடைத்ததின் காரணம் மூடன் நான் கற்றுக்கொண்டேன்
                  வேண்டுவதைப்பார்க்கிலும் அதிகமாய் பெற்றுக்கொண்டேன் அடைத்ததின்
                  காரணம் இன்று நான் கற்று கொண்டேன் வேண்டுவதைப்பார்க்கிலும்
                  அதிகமாய் பெற்றுக்கொண்டேன்
                </li>
                <li>
                  2. சின்ன சின்ன ஆசைகள் நீர் பார்க்கிறீர் ஏக்கங்கள் நீர்
                  தீர்க்கிறீர் முற்றும் அறிந்த போதிலும் அல்லையில் என்னை
                  வைக்கிறீர் ஆசைகள் நீர் பார்க்கிறீர் ஏக்கங்கள் நீர்
                  தீர்க்கிறீர் மூடன் என்ற போதிலும் அல்லையில் என்னை வைக்கிறீர்
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
