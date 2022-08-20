import React from "react";
import "src/components/MyProfile/SearchPeopleButton.js";

const SearchPeopleButton = (props) => {
  return (
    <div>
      <button type="submit" onClick={props.onShowCreateEvent}>
        Search People
      </button>
    </div>
  );
};

export default SearchPeopleButton;
