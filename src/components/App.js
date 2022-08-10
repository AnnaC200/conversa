import React from "react";
import "../styles/app.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/add-property" component={Register} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
