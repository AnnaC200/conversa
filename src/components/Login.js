import React, { useState } from "react";
import "../styles/login.css";
<<<<<<< HEAD
// import Navbar from "./Navbar";
import { Link } from "react-router-dom";
=======
>>>>>>> matt-branch

const Login = () => {
  const initialState = {
    fields: {
      UserName: "",
      Password: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleLogin = (event) => {
    event.preventDefault();
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="login">
<<<<<<< HEAD
      {/* <Navbar /> */}
=======
>>>>>>> matt-branch
      <form onSubmit={handleLogin}>
        <label className="login-items" htmlFor="UserName">
          UserName
          <input
            id="UserName"
            name="UserName"
            value={fields.UserName}
            onChange={handleFieldChange}
          />
        </label>
        <label className="login-items" htmlFor="Password">
          Password
          <input
            id="Password"
            name="Password"
            value={fields.Password}
            onChange={handleFieldChange}
          />
        </label>
        <button className="login-items" type="submit">
          Login
        </button>
      </form>
<<<<<<< HEAD
      <br />
      <div>
        <Link className="link-to" to="/Register">
          Need to register?
        </Link>
      </div>
=======
>>>>>>> matt-branch
    </div>
  );
};

export default Login;
