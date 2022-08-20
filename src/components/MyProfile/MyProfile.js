import React, { Fragment, useState } from "react";
import PersonalProfile from "./PersonalProfile";
import SearchPeople from "./SearchPeople";
import SearchPeopleButton from "./SearchPeopleButton";
import "./MyProfile.css";
import "../../styles/font.css";

const MyProfile = () => {
  const [createEventIsShown, setCreateEventIsShown] = useState(false);

  const showCreateEventHandler = () => {
    setCreateEventIsShown(true);
  };

  const hideCreateEventHandler = () => {
    setCreateEventIsShown(false);
  };

  return (
<<<<<<< Updated upstream
    <Fragment>
=======
    <>
      <NavBar />
>>>>>>> Stashed changes
      {createEventIsShown && <SearchPeople onClose={hideCreateEventHandler} />}
      <PersonalProfile />
      <SearchPeopleButton onShowCreateEvent={showCreateEventHandler} />
    </>
  );
};

export default MyProfile;
