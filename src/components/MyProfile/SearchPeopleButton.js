import React from "react";
import "./SearchPeopleButton.css";

const SearchPeopleButton = (props) => {
  return (
    <div>
      <button
        className="searchbutton"
        type="submit"
        onClick={props.onShowCreateEvent}
      >
        Search People
      </button>
    </div>
  );
};

export default SearchPeopleButton;
