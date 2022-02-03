import React, { useState } from "react";

function ShowImages({
  currentTime,
  src,
  alt,
  showTime,
  hideTime,
  appears,
  position,
}) {
  const [count, setCount] = useState(0);

  // Considerations
  // What happens when its paused halfway through showing the image?

  // Logic to show images a cirtain number of times
  const adjustCount = () => {
    // if (currentTime > hideTime) {
    setTimeout(() => {
      setCount(count + 1);
    }, hideTime - showTime);
    // };
  };

  // Logic to show the images at cirtain times
  const showImage = () => {
    if (currentTime >= showTime && currentTime <= hideTime && count < appears) {
      return true;
    }

    return false;
  };

  return (
    <>
      {showImage() && (
        <img src={src} alt={alt} className={position} onLoad={adjustCount} />
      )}
    </>
  );
}

export default ShowImages;
