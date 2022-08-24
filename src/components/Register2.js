import React, { useState } from "react";
import "../styles/register2.css";
import { Link } from "react-router-dom";
import background from "../image/languages.png";
import peopletalking from "../image/peopletalking.png";
import image from "../image/logocolour.png";

const Register2 = () => {
  const initialState3 = {
    fields: {
      ProfileName: "",
      Age: "",
      Location: "",
      NativeLanguage: "",
      DesiredLanguage: "",
      CompetencyLevels: "",
    },
  };
  const [fields, setFields] = useState(initialState3.fields);
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
        <img id="logocolour" src={image} alt="conversa-logo" />
      </div>
      <div>
        <form className="register2" onSubmit={handleRegister}>
          <label className="register2-items" htmlFor="ProfileName">
            <p> Profile Name </p>
            <input
              className="inputfieldregister2"
              id="ProfileName"
              name="ProfileName"
              value={fields.ProfileName}
              onChange={handleFieldChange}
            />
          </label>
          <label className="register2-items" htmlFor="Age">
            <p>Age</p>
            <input
              className="inputfieldregister2"
              id="Age"
              name="Age"
              value={fields.Age}
              onChange={handleFieldChange}
            />
          </label>
          <label className="register2-items" htmlFor="Location">
            <p> Your Location </p>
            <select
              id="Location"
              name="Location"
              value={fields.Location}
              onChange={handleFieldChange}
            >
              <option value="Manchester"> Manchester </option>
              <option value="Liverpool"> Liverpool </option>
              <option value="London"> London </option>
              <option value="Leeds"> Leeds </option>
              <option value="Sheffield"> Sheffield </option>
            </select>
          </label>
          <label className="register2-items" htmlFor="NativeLanguage">
            <p> Native Language </p>
            <select
              id="NativeLanguage"
              name="NativeLanguage"
              value={fields.NativeLanguage}
              onChange={handleFieldChange}
            >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Spanish">Spanish</option>
              <option value="Italian">Italian</option>
              <option value="Greek">Greek</option>
              <option value="Russian">Russian</option>
              <option value="Japanese">Japanese</option>
              <option value="Welsh">Welsh</option>
              <option value="Urdu">Urdu</option>
              <option value="Polish">Polish</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Cantonese">Cantonese</option>
              <option value="German">German</option>
            </select>
          </label>
          <label className="register2-items" htmlFor="DesiredLanguage">
            <p> Desired Language</p>
            <select
              id="DesiredLanguage"
              name="DesiredLanguage"
              value={fields.DesiredLanguage}
              onChange={handleFieldChange}
            >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Spanish">Spanish</option>
              <option value="Italian">Italian</option>
              <option value="Greek">Greek</option>
              <option value="Russian">Russian</option>
              <option value="Japanese">Japanese</option>
              <option value="Welsh">Welsh</option>
              <option value="Urdu">Urdu</option>
              <option value="Polish">Polish</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Cantonese">Cantonese</option>
              <option value="German">German</option>
            </select>
          </label>
          <label className="competency-text" htmlFor="CompetencyLevels">
            <p> Desired Competency </p>
            <select
              id="CompetencyLevels"
              name="CompetencyLevels"
              value={fields.CompetencyLevels}
              onChange={handleFieldChange}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </label>
          <p> A little about you...</p>
          <textarea> </textarea>
          <Link className="buttonregister2" to="/MyProfile">
            Create Profile
          </Link>
        </form>
        <div className="link-toregister2">
          <Link to="/Login">Already have an account?</Link>
        </div>
        <div className="peopletalking">
          <img src={peopletalking} alt="people talking" />
        </div>
      </div>
    </>
  );
};

export default Register2;
