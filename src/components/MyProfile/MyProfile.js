import React, { Fragment, useState } from "react";
import PersonalProfile from "./PersonalProfile";
import SearchPeople from "./SearchPeople";
import SearchPeopleButton from "./SearchPeopleButton";
import "./MyProfile.css";

const MyProfile = () => {
  const [createEventIsShown, setCreateEventIsShown] = useState(false);

  const showCreateEventHandler = () => {
    setCreateEventIsShown(true);
  };

  const hideCreateEventHandler = () => {
    setCreateEventIsShown(false);
  };

  return (
    <Fragment>
      {createEventIsShown && <SearchPeople onClose={hideCreateEventHandler} />}
      <PersonalProfile />
      <SearchPeopleButton onShowCreateEvent={showCreateEventHandler} />
    </Fragment>
  );
};

export default MyProfile;
