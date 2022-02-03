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

  //   Considerations
  // What happens when its paused halfway through showing the image?

  // Logic to show the images at cirtain times
  const showImage = () => {
    if (currentTime >= showTime && currentTime <= hideTime && count < appears) {
      return true;
    }

    return false;
  };

  // Logic to show images a cirtain number of times
  const adjustCount = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, hideTime - showTime);
  };

  return (
    <>
      {showImage() && (
        <img src={src} alt={alt} className={position} onLoad={adjustCount} />
      )}
      {currentTime}
    </>
  );
}

export default ShowImages;
