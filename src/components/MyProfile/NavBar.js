import React from "react";
import "./NavBar.css";
import logo from "../../image/logoblack.png";
import messages from "../../image/messageicon.png";
import settings from "../../image/settingsicon.png";
import signout from "../../image/signouticon.png";

const NavBar = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="conversa-logo" />
      <div className="icons">
        <img
          className="icon"
          idName="messages"
          src={messages}
          alt="conversa-logo"
        />
        <img
          className="icon"
          idName="settings"
          src={settings}
          alt="conversa-logo"
        />
        <img
          className="icon"
          idName="signout"
          src={signout}
          alt="conversa-logo"
        />
      </div>
    </div>
  );
};

export default NavBar;
