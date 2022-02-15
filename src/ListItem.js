import React from "react";
import "./stylesheet/ListItem.css" ;
import author from "./assets/images/author.png" ;
import sad from "./assets/images/sad.png" ;

const ListItem = () => {
    return (
    <div className="list-item-wrapper">
        <div className="row-1">
            <div className="title">O Captain! my Captain!</div>
            {/* <div className="music-wrapper">
                <span>4/4</span>
                <span>C maj</span>
            </div>
            <div className="full-screen">▶</div> */}
        </div>
        <div className="row-2">
            <div className="column-1">
            O Captain! my Captain! our fearful trip is done,<br/>
            The ship has weather’d every rack<br/>
            O Captain! my Captain! our fearful trip is done,<br/>
            The ship has weather’d every rack<br/>
            </div>
            {/* <div className="column-2">
                    <img className="author" src={author} />
                    <img className="genre" src={sad} />
            </div> */}
        </div>
        <div className="row-3">
            <img className="author" src={author} />
            <span>4/4</span>
            <span>C maj</span>
            <img className="genre" src={sad} />
        </div>
    </div>
    );
};

export default ListItem ;