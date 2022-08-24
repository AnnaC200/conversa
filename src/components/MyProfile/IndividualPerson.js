import React from "react";
import MessageButton from "./MessageButton";
import ScheduleMeetUpButton from "./ScheduleMeetUpButton";

// {
//   "id": 1,
//   "firstName": "Tom",
//   "lastName": "Haynes",
//   "age": 28,
//   "location": "Manchester",
//   "email": "tom@test.com",
//   "hashedPassword": "password123",
//   "aboutMe": "I am a legend",
//   "nativeLangId": 1,
//   "desiredLangId": 1,
//   "desiredLangCompetencyId": 1,
//   "createdAt": "2022-08-23T17:57:19.000Z",
//   "updatedAt": "2022-08-23T17:57:19.000Z"
// }

// const IndividualPerson = ({
//   user: {
//     firstName,
//     lastName,
//     location,
//     age,
//     nativeLanguage,
//     desiredLanguage,
//     aboutMe,
//   },
// }) => {
//   return (
//     <div>
//       <div>
//         <h3>
//           {firstName} {lastName}
//         </h3>
//         <ul>
//           <li>{location}</li>
//           <li>{age}</li>
//           <li>{nativeLanguage}</li>
//           <li>{desiredLanguage}</li>
//           <li>{aboutMe || "No data provided"}</li>
//         </ul>
//       </div>
//       <div>
//         <MessageButton />
//       </div>
//       <div>
//         <ScheduleMeetUpButton />
//       </div>
//     </div>
//   );
// };

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
        <div>
          <ScheduleMeetUpButton />
        </div>
      </div>
    </ul>
  );
};

export default IndividualPerson;
