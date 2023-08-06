import React from "react";
import { Link } from "react-router-dom";
import "./BottomNavigation.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ChatIcon from "@mui/icons-material/Chat";

const BottomNavigation = () => {
  return (
    <div className="bottomNavigationContainer">
      <Link to="/profile">
        Profile <AccountCircleIcon />
      </Link>
      <Link to="/explore">
        Explore <TravelExploreIcon />
      </Link>
      <Link to="/chats">
        Chats <ChatIcon />
      </Link>
    </div>
  );
};

export default BottomNavigation;
