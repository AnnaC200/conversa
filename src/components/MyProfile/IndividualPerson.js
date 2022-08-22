import React from "react";
import MessageButton from "./MessageButton";
import ScheduleMeetUpButton from "./ScheduleMeetUpButton";

const IndividualPerson = ({
  firstName,
  lastName,
  location,
  age,
  nativeLanguage,
  desiredLanguage,
  aboutMe,
  email,
  password,
}) => {
  return (
    <div>
      <div>
        <h3>{firstName}</h3>
        <ul>
          <li>{location}</li>
          <li>{age}</li>
          <li>{nativeLanguage}</li>
          <li>{desiredLanguage}</li>
          <li>{aboutMe}</li>
        </ul>
      </div>
      <div>
        <MessageButton />
      </div>
      <div>
        <ScheduleMeetUpButton />
      </div>
    </div>
  );
};

// const IndividualPerson = (props) => {
//   return (
//     <ul>
//       <div>
//         <div>Name: {props.name}</div>
//         <div>Age: {props.age}</div>
//         <div>Location: {props.location}</div>
//         <div>Desired Language: {props.desiredLanguage}</div>
//         <div>About Me: {props.aboutMe}</div>
//         <div>
//           <MessageButton />
//         </div>
//         <div>
//           <ScheduleMeetUpButton />
//         </div>
//       </div>
//     </ul>
//   );
// };

export default IndividualPerson;
