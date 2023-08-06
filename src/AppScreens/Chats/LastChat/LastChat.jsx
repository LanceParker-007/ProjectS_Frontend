import React, { useState, useEffect } from "react";
import "./LastChat.scss";

const LastChat = ({ name, lastMessage, photoUrl }) => {
  const [shortenLastMessage, setShortenLastMessage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const maxLength = width >= 768 ? 150 : 50; // Adjust the values as per your requirements
      const shortenedMessage =
        lastMessage.length > maxLength
          ? lastMessage.slice(0, maxLength) + "..."
          : lastMessage;
      setShortenLastMessage(shortenedMessage);
    };

    handleResize(); // Call the function initially
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, [lastMessage]);

  return (
    <div className="lastChat">
      <div className="lastChat_Img">
        <img src={photoUrl} alt="photoUrl" />
      </div>
      <div className="lastChat_details">
        <h4>{name}</h4>
        <p>Message:{shortenLastMessage}</p>
      </div>
    </div>
  );
};

export default LastChat;
