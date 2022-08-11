import React from "react";
import { Link } from "react-router-dom";
import image from "../image/conversa.png";
import "../styles/homepage.css";
// import Login from "./Login";
// import Register from "./Register";

const Homepage = () => (
  <div className="homepage">
    <img className="logo" src={image} alt="conversa-logo" />
    <button className="homepage-buttons" type="submit">
      Login
    </button>
    <br />
    <br />
    <Link to="/Register">
      <button className="homepage-buttons" type="submit">
        Register
      </button>
    </Link>
    {/* <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Register" component={Register} />
    </Switch> */}
  </div>
);

export default Homepage;
