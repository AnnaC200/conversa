import React, { Fragment, useState } from "react";
import PersonalProfile from "./PersonalProfile";
import CreateEvent from "./CreateEvent";
import CreateEventButton from "./CreateEventButton";

const MyProfile = (props) => {
  const [createEventIsShown, setCreateEventIsShown] = useState(false);

  const showCreateEventHandler = () => {
    setCreateEventIsShown(true);
  };

  const hideCreateEventHandler = () => {
    setCreateEventIsShown(false);
  };

  return (
    <Fragment>
      {createEventIsShown && <CreateEvent />}
      <PersonalProfile />
      <CreateEventButton onShowCreateEvent={showCreateEventHandler} />
    </Fragment>
  );
};

export default MyProfile;
