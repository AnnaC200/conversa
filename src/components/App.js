import React from "react";
import "../styles/app.css";
import Homepage from "./Homepage";
// import { Route, Switch } from "react-router-dom";
// import Login from "./Login";
// import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Homepage />
      {/* <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Register" component={Register} />
      </Switch> */}
    </div>
  );
};

export default App;
