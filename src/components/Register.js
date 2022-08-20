import React, { useState } from "react";
import "../styles/font.css";
import "../styles/register.css";
import { Link } from "react-router-dom";
import image from "../image/logocolour.png";
import background from "../image/languages.png";
import peopletalking from "../image/peopletalking.png";

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
      </div>
      <div>
        <img className="logo" src={image} alt="conversa-logo" />
      </div>
      <div>
        <form className="register" onSubmit={handleRegister}>
          <label className="register-items" htmlFor="UserName">
            Username
            <input
              className="inputfield"
              id="UserName"
              name="UserName"
              value={fields.UserName}
              onChange={handleFieldChange}
            />
          </label>
          <label className="register-items" htmlFor="Email">
            Email
            <input
              className="inputfield"
              id="Email"
              name="Email"
              value={fields.Email}
              onChange={handleFieldChange}
            />
          </label>
          <label className="register-items" htmlFor="Password">
            Password
            <input
              className="inputfield"
              id="Password"
              name="Password"
              value={fields.Password}
              onChange={handleFieldChange}
            />
          </label>
          <button id="button" className="register-items" type="submit">
            Register
          </button>
        </form>
        <br />
        <div className="link-to">
          <Link to="/Login">Already have an account?</Link>
        </div>
        <div className="peopletalking">
          <img src={peopletalking} alt="people talking" />
        </div>
      </div>
    </>
  );
};

export default Register;
