import React from "react";
import profile from "../assets/images/author.png" ;
import "../stylesheet/Profile.css" ;

const Profile = () => {
    return (
        <div>
            <img className="profile-pic" src={profile} />
        </div>
    )
}

export default Profile ;