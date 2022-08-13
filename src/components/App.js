import React from "react";
import "../styles/app.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
      </Switch>
    </div>
  );
};

export default App;
