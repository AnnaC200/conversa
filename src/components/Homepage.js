import React from "react";
import "../styles/homepage.css";
import "../styles/font.css";
import { Link } from "react-router-dom";
// import { createBrowserHistory } from "history";
import peopletalking from "../image/peopletalking.png";
import image from "../image/logocolour.png";
import background from "../image/languages.png";
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
    <body>
      <div className="homepage">
        <img className="background" src={background} alt="background" />
        <img className="logo" src={image} alt="conversa-logo" />
        <div className="buttons">
          <Link to="/">
            <button
              // onClick={NavigateToLogin}
              className="homepage-button1"
              type="submit"
            >
              Sign In
            </button>
          </Link>
          <Link to="/Register">
            <button
              // onClick={NavigateToRegister}
              className="homepage-button2"
              type="submit"
            >
              Register
            </button>
          </Link>
        </div>
        <div>
          <p className="slogans">
            Get involved
            <br />
            Meet up
            <br />
            Exchange languages
          </p>
        </div>
        <div className="peopletalking">
          <img src={peopletalking} alt="people talking" />
        </div>
      </div>
    </body>
  );
};

export default Homepage;
