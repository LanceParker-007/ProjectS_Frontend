import React from "react";
import ChatenData from "./Chaten.json";
import LastChat from "./LastChat/LastChat";
import "./Chats.scss";
import { Link } from "react-router-dom";
import BottomNavigation from "../bottomNav/BottomNavigation";

const Chats = () => {
  return (
    <>
      <div className="chats">
        <h2>Chats</h2>
        {ChatenData.map((chat, index) => (
          <Link
            key={index}
            to={`${chat.chatId}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <LastChat
              chatId={chat.chatId}
              name={chat.name}
              lastMessage={chat.lastMessage}
              photoUrl={chat.photoUrl}
            />
          </Link>
        ))}
      </div>
      <div style={{ marginBottom: "3rem" }}></div>
      <BottomNavigation />
    </>
  );
};

export default Chats;
