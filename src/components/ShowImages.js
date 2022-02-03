import React, { useState } from "react";

function ShowImages({ currentTime }) {
  const [count, setCount] = useState(0);

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

  //   Logic to show the images at cirtain times

  // Logic to show images a cirtain number of times

  return (
    <>
      {images?.map((image) => (
        <img src={image.src} alt={image.alt} className={image.position} />
      ))}
      {currentTime}
    </>
  );
}

export default ShowImages;
