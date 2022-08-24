import React, { useState } from "react";
import Modal from "./Modal";
import IndividualPerson from "./IndividualPerson";
import CityFilter from "./CityFilter";
import LanguageFilter from "./LanguageFilter";
import "./SearchPeople.css";

const SearchPeople = (props) => {
  const [city, setCity] = useState("");
  const [language, setLanguage] = useState("");

  const cityChangeHandler = (selectedCity) => {
    setCity(selectedCity);
  };

  const languageChangeHandler = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const filteredExpenses = props.items.filter((location) => {
    return location.location === city && location.desiredLanguage === language;
  });

  console.log(city);
  console.log(language);

  return (
    <Modal onClose={props.onClose}>
      <CityFilter selected={city} onChangeFilter={cityChangeHandler} />
      <LanguageFilter
        selected={language}
        onChangeLanguage={languageChangeHandler}
      />
      {filteredExpenses.map((people) => (
        <IndividualPerson
          className="personx"
          key={people.id}
          name={people.name}
          age={people.age}
          location={people.location}
          desiredLanguage={people.desiredLanguage}
          aboutMe={people.aboutMe}
        />
      ))}
      <div>
        <button
          className="closebuttonmodal"
          type="submit"
          onClick={props.onClose}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default SearchPeople;

//   const SearchPeople = (props) => {
//     const [users, setUsers] = useState([]);
//     const [city, setCity] = useState("Manchester");
//     const [desiredLanguage, setDesiredLanguage] = useState("Spanish");

//     console.log("city", city);

//     const filter = () => {
//       axios
//         .get(
//           `http://localhost:4000/connections?city=${city}&language=${desiredLanguage}`
//         ) // insert http pass language and city
//         .then((response) => setUsers(response.data))
//         .catch((error) => {
//           console.log(error);
//         });
//     };

//     const desiredLanguageOnChange = async (event) => {
//       setDesiredLanguage(event.target.value);
//       await filter();
//     };

//     useEffect(() => {
//       axios
//         .get(`http://localhost:4000/users`) // insert http string
//         .then((response) => setUsers(response.data))
//         .catch((error) => {
//           console.log(error);
//         });
//     }, []);

//     useEffect(() => {
//       if (city) filter();
//     }, [city]);

//   return (
//     <Modal onClose={props.onClose}>
//       <CityFilter city={city} setCity={setCity} />
//       <LanguageFilter
//         desiredLanguage={desiredLanguage}
//         onChange={desiredLanguageOnChange}
//       />
//       <div>
//         <div>
//           {users.map((user) => {
//             console.log(user, "user");
//             return <IndividualPerson user={user} />;
//           })}
//         </div>
//         <button type="submit" onClick={props.onClose}>
//           Close
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default SearchPeople;
