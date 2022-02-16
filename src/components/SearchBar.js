import React from "react";
import SearchIcon from "../assets/images/search.png" ;
import "../stylesheet/SearchBar.css" ;



const SearchBar = () =>
{
    return(
        <div className="SearchBar">
           <form>
                <div className="search-box">
                    <img className="search-icon" src={SearchIcon} />
                    <input className="search-input" type="text" placeholder="Search Songs..."/>
                </div>
           </form>
        </div>
    );
}

export default SearchBar ;