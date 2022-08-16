import React from "react";
import MessageButton from "./MessageButton";

const IndividualPerson = (props) => {
  return (
    <ul>
      <div>
        <div>Name: {props.name}</div>
        <div>Age: {props.age}</div>
        <div>Location: {props.location}</div>
        <div>Desired Language: {props.desiredLanguage}</div>
        <div>About Me: {props.aboutMe}</div>
        <div>
          <MessageButton />
        </div>
      </div>
    </ul>
  );
};

export default IndividualPerson;
