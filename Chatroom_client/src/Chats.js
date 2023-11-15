import React, { useState } from "react";
import "./chats.css";

const Chats = ({chatOpen}) => {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0)
  const [typing, setTyping] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  const form = document.getElementById("send-container");
  const messageInput = document.getElementById("messageInp");
  const messageContainer = document.querySelector(".chatContainer");

  // Function to append messages to the container
  const append = (message, position) => {
    console.log("in append");
    const messageElement = document.createElement("div");
    messageElement.innerText = message;
    messageElement.classList.add("message");
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
  };

  const typingHandler = (e) => {
    setMessage(e.target.value);
    if (!typing) {
      setTyping(true)
    }
    let lastTypingTime = new Date().getTime()

      var timerLength = 3000

      setTimeout(()=> {
          var timeNow = new Date().getTime()
          var timeDiff = timeNow - lastTypingTime

          if (timeDiff >= timerLength && typing) {
            setTyping(false)
          }
      }, timerLength)

  }

  //   // If a new user joins, receive his/her name from the server
  //   socket.on("user-joined", (name) => {
  //     append(`${name} joined the chat`, "right");
  //   });

  //   // If server sends a message receive it.
  //   socket.on("recieve", (data) => {
  //     append(`${data.name}: ${data.message}`, "left");
  //   });

  //   //If a user leaves the chat, append the info to the container
  //   socket.on("left", (name) => {
  //     append(`${name} left the chat`, "right");
  //   });

  const handleSubmit = (e) => {
    console.log("in handle submit");
    e.preventDefault();
    if (count%2 === 0) {
      append(`You: ${message}`, "right");
    } else {
      append(`You: ${message}`, "left");
    }
   
    // socket.emit("send", message);
    setMessage("");
    setCount(count+1);
  };

  return (
    <div className="chats" style={{display: chatOpen ? 'block':'none'}}>
      <div className="chatContainer" ></div>
      <div className="send">
      {isTyping ? <div>Loading ....</div> : (<></>)}
        <form action="#" id="send-container">
          <input
            type="text"
            name="messageInp"
            id="messageInp"
            value={message}
            onChange={typingHandler}
          />
          <button className="btn" type="submit" onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chats;
