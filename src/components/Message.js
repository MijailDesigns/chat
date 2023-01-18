import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {

  const [user] = useAuthState(auth);

  const date = new Date(message.createdAt?.seconds*1000);
    const options = { 
        month: 'long', 
        day: 'numeric' 
    };
    let h = date.getHours();
    let m = date.getMinutes();
    let time = h + ":" + m;
    const newDate = date.toLocaleDateString('en-US', options);

  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <img className="chat-bubble__left" src={message.avatar} alt="user avatar" />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
        <p className="user">{`${newDate} - ${time}`}</p>
      </div>
    </div>
  );
};

export default Message;
