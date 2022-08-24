import React from "react";
import { Link } from "react-router-dom";
import "./MessageButton.css";

const MessageButton = () => {
  return (
    <div>
      <Link className="messagebutton" to="/Chat">Message</Link>
    </div>
  );
};

export default MessageButton;
