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
  return (
    <div className="login">
      Login
      <form onSubmit={handleLogin}>
        <label className="login-items" htmlFor="UserName">
          UserName
          <input id="UserName" name="UserName" value={fields.UserName} />
        </label>
        <label className="login-items" htmlFor="Password">
          Password
          <input id="Password" name="Password" value={fields.Password} />
        </label>
      </form>
    </div>
  );
};

export default Login;
