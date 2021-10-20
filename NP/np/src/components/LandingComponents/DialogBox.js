import React, { useState } from "react";
import Message from "./Message";

const messages = [
    "Hi, I am Jerel Layog. I am a Frontend Developer.",
    "I love creating software and web apps.",
    "Looking to hire?",
    "Check out my work."
];

const DialogBox = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const handleClick = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage(currentMessage + 1);
    } else {
      setCurrentMessage(0);
    }
  };
  return (
    <div className="dialogWindow" onClick={handleClick}>
      <Message message={messages[currentMessage]} key={currentMessage} />
      <span className="nextButton">▼</span>
    </div>
  );
};

export default DialogBox;