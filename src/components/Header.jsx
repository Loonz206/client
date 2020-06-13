import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  const translations = {
    appName: "Streamer",
    allStreams: "All Streams"
  };
  const { appName, allStreams } = translations;
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        {appName}
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          {allStreams}
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
