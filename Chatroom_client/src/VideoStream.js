import React from "react";
import ReactPlayer from "react-player";
import "./VideoStream.css";

const VideoStream = ({ myStream, remoteStream }) => {
  return (
    <div>
      <div className="videoContainer">
        {myStream && (
          <ReactPlayer
            playing
            muted
            height="300px"
            width="500px"
            url={myStream}
          />
        )}
      </div>

    <div className="remoteVideoContainer">
    <div className="videoContainer">
        {remoteStream && (
          <ReactPlayer
            playing
            muted
            height="200px"
            width="200px"
            url={remoteStream}
          />
        )}
      </div>
      <div className="videoContainer">
        {remoteStream && (
          <ReactPlayer
            playing
            muted
            height="200px"
            width="200px"
            url={remoteStream}
          />
        )}
      </div>
      <div className="videoContainer">
        {remoteStream && (
          <ReactPlayer
            playing
            muted
            height="200px"
            width="200px"
            url={remoteStream}
          />
        )}
      </div>
    </div>
    </div>
    
  );
};

export default VideoStream;
