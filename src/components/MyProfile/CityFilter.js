import React from "react";
// import { useLocation } from "react-router-dom";

const CityFilter = (props) => {
  // const { search } = useLocation();

  return (
    <div>
      <label>City</label>
      <select onChange={props.onChange} value={props.city}>
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
