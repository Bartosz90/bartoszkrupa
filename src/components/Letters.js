import React, { useEffect } from "react";
import "../styles/letters.sass";

const Letters = () => {
  function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "o",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "o",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const animations = ["", "-"];
  const mapLetters = letters.map((letter, index) => {
    return (
      <span
        className="letter"
        key={index}
        style={{
          top: `${getRandomInt(2, 92)}vh`,
          left: `${getRandomInt(2, 92)}vw`,
          animation: `letterMove${getRandomInt(1, 4)} 1s forwards`,
          animationDelay: `${getRandomArbitrary(1.5, 2.5)}s`,
        }}
      >
        {letters[getRandomInt(0, letters.length - 1)]}
      </span>
    );
  });

  return <>{mapLetters}</>;
};

export default Letters;
