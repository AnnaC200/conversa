import React, { useState, Link } from "react";
import { Redirect } from "react-router-dom";
import "../styles/login.css";

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
