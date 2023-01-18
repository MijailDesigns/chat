import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Picker from 'emoji-picker-react';

const SendMessage = ({ scroll }) => {

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState('close');

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const emoji = () => {
      setOpen('open');
  }
  const closeEmoji = () => {
      setOpen('close');
  }
  const onEmojiClick = (event, emojiObject) => {
    console.log(event.emoji)
    setMessage(`${message}${event.emoji}`)
  };

  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">

      <button 
          type="button" 
          className="btn-emoji"
          onClick={emoji}>
              😉
      </button>
      <div className={open}>
          <button 
              className="close-emoji" 
              onClick={closeEmoji}
              type="button">
                  ❌
          </button>
          <Picker onEmojiClick={onEmojiClick}/>
      </div>

      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;
