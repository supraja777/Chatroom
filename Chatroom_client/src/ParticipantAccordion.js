import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faVideo, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const ParticipantAccordion = ({ participant, tunrOnAudio, turnOnVideo }) => {
  return (
    <div className="participant">
      <div className="participantWrapper">
        <p>{participant.profilePic}</p>
        <p> {participant.name}</p>
      </div>

      <div className="participantWrapper">
        {/* Logic for muting and unmuting a participant */}

        <button className="button" onClick={() => tunrOnAudio(participant.id)}>
          <FontAwesomeIcon
            icon={participant.isMuted ? faVolumeUp : faVolumeMute}
          />
        </button>
        {/* Logic for turning participant's video on or off */}
        <button className="button" onClick={() => turnOnVideo(participant.id)}>
          <FontAwesomeIcon
            icon={participant.isVideoOn ? faVideoSlash : faVideo}
          />
        </button>
      </div>
    </div>
  );
};

export default ParticipantAccordion;
