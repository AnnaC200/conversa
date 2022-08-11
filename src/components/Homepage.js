import React from "react";
import "../styles/homepage.css";
import { Link } from "react-router-dom";
// import { createBrowserHistory } from "history";
import image from "../image/conversalogolargecolour.png";
// import Login from "./Login";
// import Register from "./Register";

const Homepage = () => {
  //   const NavigateToLogin = () => {
  //     createBrowserHistory.push("/");
  //   };
  //   const NavigateToRegister = () => {
  //     createBrowserHistory.push("/Register");
  //   };
  return (
    <div className="homepage">
      <ul>
        <img className="logo" src={image} alt="conversa-logo" />
        <Link to="/">
          <button
            // onClick={NavigateToLogin}
            className="homepage-buttons"
            type="submit"
          >
            Login
          </button>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <Link to="/Register">
          <button
            // onClick={NavigateToRegister}
            className="homepage-buttons"
            type="submit"
          >
            Register
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Homepage;
