import React, { useRef, useState } from "react";
import styles from "../styles/Video.module.css";

function VideoBlock() {
  // I need to be able to reference the video
  const videoRef = useRef(null);
  // useState to handle our video timestamp
  const [currentTime, setCurrentTime] = useState(0);

  // Runs everytime the video time changes
  const handleTimeUpdate = () => {
    // Get the currentTime (HTMLMediaElement) of the videoRef and convert to milliseconds
    const currentVideoTime = videoRef.current.currentTime.toFixed(2) * 1000;
    // Update our state
    setCurrentTime(currentVideoTime);
  };

  return (
    <>
      <div className="vide-container">
        <video
          ref={videoRef}
          controls
          className={styles.video}
          onTimeUpdate={handleTimeUpdate}
        >
          <source
            src="./assets/Big_Buck_Bunny_1080_10s_5MB.mp4"
            type="video/mp4"
          />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>

      <p>Current time: {currentTime} seconds</p>
    </>
  );
}

export default VideoBlock;
