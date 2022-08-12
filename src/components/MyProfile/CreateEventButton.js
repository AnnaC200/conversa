import React from "react";
import CreateEvent from "./CreateEvent";

const CreateEventButton = (props) => {
  return (
    <div>
      <button type="submit" onClick={props.onShowCreateEvent}>
        Create Event
      </button>
    </div>
  );
};

export default CreateEventButton;
