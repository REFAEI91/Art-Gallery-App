import { useState } from "react";
import styled from "styled-components";

function randomNumber(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Spotlight({ pieces }) {
  const [randomArtpiece, setRandomArtpiece] = useState(randomNumber(pieces));
  
  const StyledSpotlight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `


  return (
    <StyledSpotlight>
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
          width={550}
        />
        <h2>{randomArtpiece.artist}</h2>
      </div>
    </StyledSpotlight>
  );
}
