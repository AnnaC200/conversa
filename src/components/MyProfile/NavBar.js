import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="header">
      <ul className="menu">
        <li>
          <label className="opener" htmlFor="drop1">
            Parent item 1<input type="radio" name="menuopt" id="drop1" />
          </label>
          <ul>
            <li>Menu item 1</li>
            <li>Menu item 2</li>
            <li>Menu item 3</li>
          </ul>
        </li>
        <li>
          <label className="opener" htmlFor="drop2">
            Parent item 2<input type="radio" name="menuopt" id="drop2" />
          </label>
          <ul>
            <li>Menu item 1</li>
            <li>Menu item 2</li>
            <li>Menu item 3</li>
            <li>Menu item 4</li>
            <li>Menu item 5</li>
          </ul>
          <input type="radio" name="menuopt" id="dropclose" />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
