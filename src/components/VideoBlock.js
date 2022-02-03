import React, { useRef, useState } from "react";
import styles from "../styles/Video.module.css";
import ShowImages from "./ShowImages";

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

  // Array of images
  const images = [
    {
      src: "./assets/images/image1.png",
      alt: "bannana",
      showTime: 3500,
      hideTime: 5000,
      appears: 1,
      position: "top-left",
    },
    {
      src: "./assets/images/image2.png",
      alt: "controller",
      showTime: 6000,
      hideTime: 8000,
      appears: 2,
      position: "top-right",
    },
    {
      src: "./assets/images/image3.png",
      alt: "fire",
      showTime: 7000,
      hideTime: 8500,
      appears: 3,
      position: "centre",
    },
  ];

  return (
    <>
      <div className={styles.videoContainer}>
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
        {images?.map((image) => (
          <ShowImages
            currentTime={currentTime}
            src={image.src}
            alt={image.alt}
            showTime={image.showTime}
            hideTime={image.hideTime}
            appears={image.appears}
            position={image.position}
          />
        ))}
      </div>

      <p>Current time: {currentTime} seconds</p>
    </>
  );
}

export default VideoBlock;
