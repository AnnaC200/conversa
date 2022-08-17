import React from "react";
import "./NavBar.css";
import logo from "../../image/logoblack.png";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div id="logo">
          <img className="logopic" src={logo} alt="conversa logo in black" />
        </div>
        <label htmlFor="drop" className="toggle">
          Menu
          <input type="checkbox" id="drop" />
        </label>
        <ul className="menu">
          <li>
            <label htmlFor="drop-1" className="toggle">
              Service +<input type="checkbox" id="drop-1" />
            </label>
            Service
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
