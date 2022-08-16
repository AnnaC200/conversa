import React from "react";
import Modal from "./Modal";
import IndividualPerson from "./IndividualPerson";

const dummyPeople = [
  {
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
];

const SearchPeople = (props) => {
  const listPeople = dummyPeople.map((people) => (
    <IndividualPerson
      name={people.name}
      age={people.age}
      location={people.location}
      desiredLanguage={people.desiredLanguage}
      aboutMe={people.aboutMe}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <div>
        <ul>{listPeople}</ul>
        <button type="submit" onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default SearchPeople;
