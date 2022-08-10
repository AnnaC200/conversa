import React, { useState } from "react";

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
      Login
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
      </form>
    </div>
  );
};

export default Login;
