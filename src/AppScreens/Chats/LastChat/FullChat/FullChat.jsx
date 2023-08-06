import React from "react";
import { useParams } from "react-router-dom";
import "./FullChat.scss";
import Chaten from "../../Chaten.json";

const FullChat = () => {
  const { chatId } = useParams();
  return (
    <div>
      <h1>{Chaten[chatId - 1].name} </h1>
      <p>Chat Id: {chatId}</p>
      <div>{Chaten[chatId - 1].lastMessage}</div>
    </div>
  );
};

export default FullChat;
