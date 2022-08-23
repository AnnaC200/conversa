import React, { useState } from "react";
import "../styles/login.css";
// import Navbar from "./Navbar";
import { Link } from "react-router-dom";
// import axios from "axios";
import background from "../image/languages.png";
import peopletalking from "../image/peopletalking.png";

const Login = () => {
  const initialState = {
    fields: {
      UserName: "",
      Password: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  // const history = useHistory();
  const handleLogin = (event) => {
    event.preventDefault();
    // const response = await axios.post(`http://localhost:3000/ouruserstable`, {
    //   ...fields,
    // });
    // if (response.status === 200) {
    //   history.push("/MyProfile");
    // } else {
    //   // SHOW ERROR MESSAGE
    // }
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="images">
        <img className="background" src={background} alt="background" />
      </div>
      <div className="login">
        <form onSubmit={handleLogin}>
          <label className="login-items" htmlFor="UserName">
            UserName
            <input
              className="inputfield"
              id="UserName"
              name="UserName"
              value={fields.UserName}
              onChange={handleFieldChange}
            />
          </label>
          <label className="login-items" htmlFor="Password">
            Password
            <input
              className="inputfield"
              id="Password"
              name="Password"
              value={fields.Password}
              onChange={handleFieldChange}
            />
          </label>
          <br />
          <Link to="/MyProfile"> Login </Link>
        </form>
        <br />
        <div>
          <Link className="link-to" to="/Register">
            Need to register?
          </Link>
        </div>
        <div className="peopletalking">
          <img src={peopletalking} alt="people talking" />
        </div>
      </div>
    </>
  );
};

export default Login;
