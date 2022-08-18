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
          <label className="register2-items" htmlFor="questions">
            Native Language
            <input
              className="inputfield"
              id="native-language"
              name="native-language"
              value={fields.NativeLanguage}
              onChange={handleFieldChange}
            />
          </label>
          <label className="register2-items" htmlFor="DesiredLanguage">
            Desired Language
            <input
              className="inputfield"
              id="DesiredLanguage"
              name="DesiredLanguage"
              value={fields.DesiredLanguage}
              onChange={handleFieldChange}
            />
          </label>
          <br />
          <label className="competency-text" htmlFor="CompetencyLevel">
            <h3> Competency Levels</h3>
            <select
              id="CompetencyLevel"
              name="CompetencyLevel"
              value={fields.CompetencyLevels}
              onChange={handleFieldChange}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Fluent">Fluent</option>
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
