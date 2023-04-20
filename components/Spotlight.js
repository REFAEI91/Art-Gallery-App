import { useState } from "react";

function randomNumber(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Spotlight({ pieces }) {
  const [randomArtpiece, setRandomArtpiece] = useState(randomNumber(pieces));
  console.log(randomArtpiece);
  return (
    <>
      <h1>Spotlight</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   margin: "1rem",
          //   border: "1px groove black",
          //   borderRadius: "0.5rem",
          //   padding: "0.2rem",
        }}
      >
        <img
          src={randomArtpiece.imageSource}
          alt={randomArtpiece.name}
          width={650}
        />
        <h2>{randomArtpiece.artist}</h2>
      </div>
    </>
  );
}
