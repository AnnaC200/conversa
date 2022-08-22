import React, { useState, Link } from "react";
import { Redirect } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: "Jane", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      <Redirect to="/MyProfile" />;
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label className="login-items" htmlFor="UserName">
          UserName
          <input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </label>
        <label className="login-items" htmlFor="Password">
          Password
          <input
            type="text"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <br />
      <div>
        <Link className="link-to" to="/Register">
          Need to register?
        </Link>
      </div>
    </div>
  );
};

export default Login;

// const Login = () => {
//   const initialState = {
//     fields: {
//       UserName: "",
//       Password: "",
//     },
//   };
//   const [fields, setFields] = useState(initialState.fields);
//   const handleLogin = (event) => {
//     event.preventDefault();
//   };
//   const handleFieldChange = (event) => {
//     setFields({ ...fields, [event.target.name]: event.target.value });
//   };
//   return (
//     <div className="login">
//       <form onSubmit={handleLogin}>
//         <label className="login-items" htmlFor="UserName">
//           UserName
//           <input
//             id="UserName"
//             name="UserName"
//             value={fields.UserName}
//             onChange={handleFieldChange}
//           />
//         </label>
//         <label className="login-items" htmlFor="Password">
//           Password
//           <input
//             id="Password"
//             name="Password"
//             value={fields.Password}
//             onChange={handleFieldChange}
//           />
//         </label>
//         <button className="login-items" type="submit">
//           Login
//         </button>
//       </form>
//       <br />
//       <div>
//         <Link className="link-to" to="/Register">
//           Need to register?
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Login;
