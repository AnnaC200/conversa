import React from "react";
import "../styles/homepage.css";
import "../styles/font.css";
import { Link } from "react-router-dom";
import peopletalking from "../image/peopletalking.png";
import image from "../image/logocolour.png";
import background from "../image/languages.png";

const Homepage = () => {
  return (
    <body>
      <div className="homepage">
        <img className="background" src={background} alt="background" />
        <img id="logocolour" src={image} alt="conversa-logo" />
        <div className="buttons">
          <Link className="homepage-button" to="/Login">
            Sign In
          </Link>
          <br />
          <br />
          <br />
          <br />
          <Link className="homepage-button" to="/Register">
            Register
          </Link>
          <br />
          <br />
          <br />
          <br />
          <Link className="homepage-button" to="/MyProfile">
            My Profile
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

// const Homepage = () => (
//   <div className="homepage">
//     <img className="logo" src={image} alt="conversa-logo" />
//     <ul>
//       <Link className="homepage-button1" to="/Login">
//         Login
//       </Link>
//       <br />
//       <br />
//       <br />
//       <br />
//       <Link className="homepage-button2" to="/Register">
//         Register
//       </Link>
//     </ul>
//   </div>
// );

export default Homepage;
