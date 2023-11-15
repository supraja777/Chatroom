import "./App.css";
import { useState } from "react";
import ReactPlayer from 'react-player'

import VideoStream from "./VideoStream.js"
import ParticipantAccordion from "./ParticipantAccordion.js";
import Chats from "./Chats.js"

function App() {

  const [displayParticipantsList , setDisplayParticipantsList] = useState(false)
  const [myStream, setMyStream] = useState()
  const [remoteStream, setRemoteStream] = useState();

  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const [participantsData, setParticipantsData] = useState([
    { id: 1, name: "Participant 1", isMuted: false },
    { id: 2, name: "Participant 2", isMuted: false },
  ]);

  const toggleDisplayParticipants = () => {
    setDisplayParticipantsList(!displayParticipantsList)
  }

  const tunrOnAudio = async() => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    })
    setMyStream(stream)
    setRemoteStream(stream)
  }

  const turnOnVideo = async() => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    })
    setMyStream(stream)
    setRemoteStream(stream)
  }

  return (
    <div className="container">
      <div className="heading">
        {/* TODO: Add Magic Talks Logo */}
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="24"
          viewBox="0 0 43 24"
          fill="none"
        >
          <path
            d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM2 13.5H43V10.5H2V13.5Z"
            fill="white"
          />
        </svg>
        Timepass <span>(your chatroom)</span>
      </div>
      <div className="mainContent">
        <div className="column games">Games</div>
        <div className="column video">
          <VideoStream myStream={myStream} remoteStream={remoteStream}/>
        </div>
        <div className="column search">
          {/* TODO: ADD SEARCH ICON */}
          <input className="searchBar" value="Search for People" />
          <div className="allParticipants">
            {/* we need to send the list of participants from backend and map them */}
            <div className="participantsHeading">
              <p
                className="participantsButton"
                onClick={toggleDisplayParticipants}
              >
                Participants
              </p>
              {/* TODO ADD UP AND DOWN ARROW ICONS */}
            </div>
            {/* TODO ADD CSS STYLES FOR SMOOTH TRANSITION */}
            <div className="participantsList">
              {displayParticipantsList && (
                <div className="participants">
                  {participantsData.map((participant) => (
                    <ParticipantAccordion
                      key={participant.id}
                      participant={participant}
                      turnOnVideo={turnOnVideo}
                      tunrOnAudio={tunrOnAudio}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="chatSection">
            <h1 className="chatHeading" onClick={toggleChat}>Chats</h1>
            <Chats chatOpen={chatOpen}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
