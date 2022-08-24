import React, { Fragment, useState } from "react";
import PersonalProfile from "./PersonalProfile";
import SearchPeople from "./SearchPeople";
import SearchPeopleButton from "./SearchPeopleButton";
import NavBar from "./NavBar";
import "./MyProfile.css";

const dummyPeople = [
  {
    id: 1,
    name: "Matt",
    lastName: "Wiggins",
    location: "Liverpool",
    age: 31,
    nativeLanguage: "English",
    desiredLanguage: "Portuguese",
    aboutMe: "fjnejribfgbveubiudbuisnbnuisdnvdnibnuirbnnbiodn",
    email: "mattwiggins5@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 2,
    name: "Ash",
    lastName: "Askin",
    location: "Manchester",
    age: 31,
    nativeLanguage: "English",
    desiredLanguage: "Spanish",
    aboutMe: "fjnejribfgbveubiudbuisnbnuisdnvdnibnuirbnnbiodn",
    email: "ashaskin@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 3,
    name: "Khadra",
    lastName: "Mohamed",
    location: "Leeds",
    age: 31,
    nativeLanguage: "English",
    desiredLanguage: "Italian",
    aboutMe: "fjnejribfgbveubiudbuisnbnuisdnvdnibnuirbnnbiodn",
    email: "KhadraMohamed@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 4,
    name: "Anna",
    lastName: "Chan",
    location: "London",
    age: 31,
    nativeLanguage: "English",
    desiredLanguage: "French",
    aboutMe: "fjnejribfgbveubiudbuisnbnuisdnvdnibnuirbnnbiodn",
    email: "annachan@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 5,
    name: "Tom",
    lastName: "Haynes",
    location: "Sheffield",
    age: 31,
    nativeLanguage: "English",
    desiredLanguage: "Dutch",
    aboutMe: "fjnejribfgbveubiudbuisnbnuisdnvdnibnuirbnnbiodn",
    email: "TomHaynes@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 6,
    name: "Dave",
    lastName: "Haynes",
    location: "Liverpool",
    age: 31,
    nativeLanguage: "English",
    desiredLanguage: "Spanish",
    aboutMe: "fjnejribfgbveubiudbuisnbnuisdnvdnibnuirbnnbiodn",
    email: "TomHaynes@gmail.com",
    password: "jfrnjkbfjb",
  },
];

const MyProfile = (props) => {
  const [createEventIsShown, setCreateEventIsShown] = useState(false);
  const [people, setPeople] = useState(dummyPeople);

  const showCreateEventHandler = () => {
    setCreateEventIsShown(true);
  };

  const hideCreateEventHandler = () => {
    setCreateEventIsShown(false);
  };

  return (
    <Fragment>
      <NavBar />
      {createEventIsShown && (
        <SearchPeople items={people} onClose={hideCreateEventHandler} />
      )}
      <PersonalProfile />
      <SearchPeopleButton onShowCreateEvent={showCreateEventHandler} />
    </Fragment>
  );
};

export default MyProfile;
