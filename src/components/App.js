import React from "react";
import "../styles/app.css";
import { Route, Switch } from "react-router-dom";
// import Navbar from "./Navbar";
import Homepage from "./Homepage";
// eslint-disable-next-line import/no-named-as-default
import Register from "./Register";
import MyProfile from "./MyProfile/MyProfile";

const App = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/MyProfile" component={MyProfile} />
      </Switch>
    </div>
  );
};

export default App;
