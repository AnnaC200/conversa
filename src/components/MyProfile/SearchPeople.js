import React from "react";
import Modal from "./Modal";

const SearchPeople = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div>
        <button type="submit" onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default SearchPeople;
