import React from "react";
import "./PersonalProfile.css";

const PersonalProfile = () => {
  return (
    <div className="displaybox">
      <h3>Personal Profile</h3>
      <ul>
        <div>
          <div>Name: </div>
          <div>Age: </div>
          <div>Location: </div>
          <div>Desired Language: </div>
          <div>About Me: </div>
        </div>
      </ul>
    </div>
  );
};

export default PersonalProfile;
