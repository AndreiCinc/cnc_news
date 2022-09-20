import React from "react";
import PBStyle from "./profileButton.module.scss";

const ProfileButton = () => (
    <button className={PBStyle.profileButton}>
        <img id="profile-picture" src="avatar.png" alt="#" className={PBStyle.profilePicture}/>
    </button>
)

export default ProfileButton;