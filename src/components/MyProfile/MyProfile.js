import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PersonalProfile from "./PersonalProfile";
import SearchPeople from "./SearchPeople";
import SearchPeopleButton from "./SearchPeopleButton";
import NavBar from "./NavBar";
import "./MyProfile.css";

const MyProfile = () => {
  const [createEventIsShown, setCreateEventIsShown] = useState(false);
  const [authenticated, setauthenticated] = useState(null);

  const showCreateEventHandler = () => {
    setCreateEventIsShown(true);
  };

  const hideCreateEventHandler = () => {
    setCreateEventIsShown(false);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  if (!authenticated) {
    return <Redirect replace to="/Login" />;
  }

  return (
    <Fragment>
      <NavBar />
      {createEventIsShown && <SearchPeople onClose={hideCreateEventHandler} />}
      <PersonalProfile />
      <SearchPeopleButton onShowCreateEvent={showCreateEventHandler} />
    </Fragment>
  );
};

export default MyProfile;
