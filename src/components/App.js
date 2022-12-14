import React from "react";
import "../styles/app.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./Navbar";
import Homepage from "./Homepage";
// eslint-disable-next-line import/no-named-as-default
import Register from "./Register";
import Register2 from "./Register2";
import Login from "./Login";
import MyProfile from "./MyProfile/MyProfile";
import Chat from "./Chat/Chat";

const App = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Register2" component={Register2} />
          <Route exact path="/MyProfile" component={MyProfile} />
          <Route exact path="/Chat" component={Chat} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
