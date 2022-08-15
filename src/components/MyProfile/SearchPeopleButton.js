import React from "react";

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
