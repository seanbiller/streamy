import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import TwitchLogo from "../images/twitch.png";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <h2 className="ui header">
          <img src={TwitchLogo} alt="twitch logo" />
          Streamy
        </h2>
      </Link>
      <div className="right menu"></div>
      <Link to="/" className="item">
        All Streams
      </Link>
      <GoogleAuth />
    </div>
  );
};

export default Header;
