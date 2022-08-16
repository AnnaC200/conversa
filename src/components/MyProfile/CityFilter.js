import React from "react";

const CityFilter = () => {
  return (
    <div>
      <label>City</label>
      <select>
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
