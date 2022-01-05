import React from "react";
import "./Topbar.css";
import { NotificationsActive, Language, Settings } from "@material-ui/icons";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <NotificationsActive />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>

          <img
            src="https://data.whicdn.com/images/327029510/original.png"
            alt=""
            className="topImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
