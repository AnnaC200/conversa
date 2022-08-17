import React from "react";
import logo from "../../image/logoblack.png";

const PersonalProfile = () => {
  return (
    <div>
      <img className="logo" src={logo} alt="conversa logo in black" />
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
