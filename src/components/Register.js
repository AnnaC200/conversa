import React, { useState } from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";
import image from "../image/logocolour.png";
import background from "../image/languages.png";

const Register = () => {
  const initialState2 = {
    fields: {
      UserName: "",
      Email: "",
      Password: "",
    },
  };
  const [fields, setFields] = useState(initialState2.fields);
  const handleRegister = (event) => {
    event.preventDefault();
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="images">
        <img className="background" src={background} alt="background" />
        <img className="logo" src={image} alt="conversa-logo" />
      </div>
      <div className="register">
        <form onSubmit={handleRegister}>
          <label className="register-items" htmlFor="UserName">
            Username
            <input
              id="UserName"
              name="UserName"
              value={fields.UserName}
              onChange={handleFieldChange}
            />
          </label>
          <label className="register-items" htmlFor="Email">
            Email
            <input
              id="Email"
              name="Email"
              value={fields.Email}
              onChange={handleFieldChange}
            />
          </label>
          <label className="register-items" htmlFor="Password">
            Password
            <input
              id="Password"
              name="Password"
              value={fields.Password}
              onChange={handleFieldChange}
            />
          </label>
          <button className="register-items" type="submit">
            Register
          </button>
        </form>
        <br />
        <div>
          <Link className="link-to" to="/Login">
            Already have an account?
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
