import React from "react";
import { Link } from "react-router-dom";
import image from "../image/conversa.png";
import "../styles/homepage.css";

const Homepage = () => (
  <div className="homepage">
    <img className="logo" src={image} alt="conversa-logo" />
    <ul>
      <Link className="homepage-buttons" to="/Login">
        Login
      </Link>
      <br />
      <br />
      <br />
      <br />
      <Link className="homepage-buttons" to="/Register">
        Register
      </Link>
    </ul>
  </div>
);

export default Homepage;
