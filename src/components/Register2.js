import React, { useState } from "react";
import "../styles/register2.css";
import { Link } from "react-router-dom";
import background from "../image/languages.png";
import peopletalking from "../image/peopletalking.png";

const Register2 = () => {
  const initialState3 = {
    fields: {
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
        <form className="register2" onSubmit={handleRegister}>
          <label className="register2-items" htmlFor="NativeLanguage">
            <h3> Native Language </h3>
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
          <br />
          <label className="register2-items" htmlFor="DesiredLanguage">
            <h3> Desired Language</h3>
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
          <br />
          <label className="competency-text" htmlFor="CompetencyLevels">
            <h3> Competency Levels </h3>
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
          <button id="button" className="register2-items" type="submit">
            Connect With People
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

export default Register2;
