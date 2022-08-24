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
    age: 33,
    nativeLanguage: "English",
    desiredLanguage: "Spanish",
    aboutMe: "Hey! I'm Ash and I'm looking to practice my Spanish",
    email: "ashaskin@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 3,
    name: "Khadra",
    lastName: "Mohamed",
    location: "Leeds",
    age: 25,
    nativeLanguage: "English",
    desiredLanguage: "Italian",
    aboutMe: "Hey! I'm Khadra and I'm looking to practice my Italian",
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
    aboutMe: "Hey! I'm Anna and I'm looking to practice my French",
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
    aboutMe: "Hey! I'm Tom and I'm looking to practice my Dutch",
    email: "TomHaynes@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 6,
    name: "Dave",
    lastName: "Haynes",
    location: "Liverpool",
    age: 22,
    nativeLanguage: "English",
    desiredLanguage: "Spanish",
    aboutMe: "Hey! I'm Dave and I'm looking to practice my Spanish",
    email: "davehaynes@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 7,
    name: "Dave",
    lastName: "Chattie",
    location: "Liverpool",
    age: 35,
    nativeLanguage: "English",
    desiredLanguage: "Spanish",
    aboutMe: "Hey! I'm Dave and I'm looking to practice my Spanish",
    email: "davechattie@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 8,
    name: "Luke",
    lastName: "Roberts",
    location: "Liverpool",
    age: 38,
    nativeLanguage: "English",
    desiredLanguage: "Spanish",
    aboutMe: "Hey! I'm Dave and I'm looking to practice my Spanish",
    email: "lukeroberts@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 9,
    name: "Joanne",
    lastName: "O'Keefe",
    location: "Liverpool",
    age: 29,
    nativeLanguage: "English",
    desiredLanguage: "Spanish",
    aboutMe: "Hey! I'm Jo and I'm looking to practice my Spanish",
    email: "jookeefe@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 10,
    name: "Poppy",
    lastName: "Barton",
    location: "Liverpool",
    age: 36,
    nativeLanguage: "English",
    desiredLanguage: "Spanish",
    aboutMe: "Hey! I'm Poppy and I'm looking to practice my Spanish",
    email: "rafanavas@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 11,
    name: "Chris",
    lastName: "Baler",
    location: "Liverpool",
    age: 24,
    nativeLanguage: "English",
    desiredLanguage: "Spanish",
    aboutMe: "Hey! I'm Chris and I'm looking to practice my Spanish",
    email: "chrisbaler@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 12,
    name: "Anna",
    lastName: "Wiggins",
    location: "London",
    age: 28,
    nativeLanguage: "English",
    desiredLanguage: "French",
    aboutMe: "Hey! I'm Anna and I'm looking to practice my French",
    email: "annachan@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 13,
    name: "Pau",
    lastName: "Osario",
    location: "London",
    age: 30,
    nativeLanguage: "Spanish",
    desiredLanguage: "French",
    aboutMe: "Hey! I'm Pau and I'm looking to practice my French",
    email: "pauosario@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 14,
    name: "Danny",
    lastName: "McAfee",
    location: "London",
    age: 31,
    nativeLanguage: "English",
    desiredLanguage: "French",
    aboutMe: "Hey! I'm Danny and I'm looking to practice my French",
    email: "dannymcafee@gmail.com",
    password: "jfrnjkbfjb",
  },
  {
    id: 15,
    name: "Will",
    lastName: "Wright",
    location: "London",
    age: 31,
    nativeLanguage: "English",
    desiredLanguage: "French",
    aboutMe: "Hey! I'm Will and I'm looking to practice my French",
    email: "willwright@gmail.com",
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
