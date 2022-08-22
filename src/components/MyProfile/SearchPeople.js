import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import IndividualPerson from "./IndividualPerson";
import CityFilter from "./CityFilter";
import LanguageFilter from "./LanguageFilter";

// const dummyPeople = [
//   {
//     name: "Matt",
//     lastName: "Wiggins",
//     location: "Liverpool",
//     age: 31,
//     nativeLanguage: "English",
//     desiredLanguage: "Portuguese",
//     aboutMe: "fjnejribfgbveubiudbuisnbnuisdnvdnibnuirbnnbiodn",
//     email: "mattwiggins5@gmail.com",
//     password: "jfrnjkbfjb",
//   },
//   {
//     name: "Ash",
//     lastName: "Askin",
//     location: "Manchester",
//     age: 31,
//     nativeLanguage: "English",
//     desiredLanguage: "Spanish",
//     aboutMe: "fjnejribfgbveubiudbuisnbnuisdnvdnibnuirbnnbiodn",
//     email: "ashaskin@gmail.com",
//     password: "jfrnjkbfjb",
//   },
//   {
//     name: "Khadra",
//     lastName: "Mohamed",
//     location: "Leeds",
//     age: 31,
//     nativeLanguage: "English",
//     desiredLanguage: "Italian",
//     aboutMe: "fjnejribfgbveubiudbuisnbnuisdnvdnibnuirbnnbiodn",
//     email: "KhadraMohamed@gmail.com",
//     password: "jfrnjkbfjb",
//   },
//   {
//     name: "Anna",
//     lastName: "Chan",
//     location: "London",
//     age: 31,
//     nativeLanguage: "English",
//     desiredLanguage: "French",
//     aboutMe: "fjnejribfgbveubiudbuisnbnuisdnvdnibnuirbnnbiodn",
//     email: "annachan@gmail.com",
//     password: "jfrnjkbfjb",
//   },
//   {
//     name: "Tom",
//     lastName: "Haynes",
//     location: "Sheffield",
//     age: 31,
//     nativeLanguage: "English",
//     desiredLanguage: "Dutch",
//     aboutMe: "fjnejribfgbveubiudbuisnbnuisdnvdnibnuirbnnbiodn",
//     email: "TomHaynes@gmail.com",
//     password: "jfrnjkbfjb",
//   },
// ];

// const SearchPeople = (props) => {
//   const listPeople = dummyPeople.map((people) => (
//     <IndividualPerson
//       name={people.name}
//       age={people.age}
//       location={people.location}
//       desiredLanguage={people.desiredLanguage}
//       aboutMe={people.aboutMe}
//     />
//   ));

const SearchPeople = (props) => {
  const [users, setUsers] = useState([]);
  const [city, setCity] = useState("");
  const [desiredLanguage, setDesiredLanguage] = useState("");

  const filter = async () => {
    axios
      .get(`http://localhost:4000/users`, { city, desiredLanguage }) // insert http pass language and city
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.log(error);
      });
  };

  const cityOnChange = async (event) => {
    setCity(event.target.value);
    await filter();
  };

  const desiredLanguageOnChange = async (event) => {
    setDesiredLanguage(event.target.value);
    await filter();
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users`) // insert http string
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Modal onClose={props.onClose}>
      <CityFilter city={city} onChange={cityOnChange} />
      <LanguageFilter
        desiredLanguage={desiredLanguage}
        onChange={desiredLanguageOnChange}
      />
      <div>
        <div>
          {users.map((user) => {
            console.log(user);
            return <IndividualPerson key={user._id} {...users} />;
          })}
        </div>
        <button type="submit" onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default SearchPeople;
