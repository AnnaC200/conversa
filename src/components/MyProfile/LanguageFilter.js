import React from "react";

const LanguageFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div>
      <label>Language to practice</label>
      <select onChange={props.onChange} value={props.desiredLanguage}>
        <option value="Portuguese">Portuguese</option>
        <option value="Spanish">Spanish</option>
        <option value="Italian">Italian</option>
        <option value="French">French</option>
        <option value="Dutch">Dutch</option>
      </select>
    </div>
  );
};

export default LanguageFilter;
