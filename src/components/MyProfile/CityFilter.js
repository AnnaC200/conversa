import React from "react";
// import { useLocation } from "react-router-dom";

const CityFilter = (props) => {
  // const { search } = useLocation();
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div>
      <label>City</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="Manchester">Manchester</option>
        <option value="Liverpool">Liverpool</option>
        <option value="London">London</option>
        <option value="Leeds">Leeds</option>
        <option value="Sheffield">Sheffield</option>
      </select>
    </div>
  );
};

export default CityFilter;
