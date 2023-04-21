import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

function randomNumber(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Spotlight({ pieces }) {
  const [randomArtpiece, setRandomArtpiece] = useState(randomNumber(pieces));
  console.log(randomArtpiece);
  const StyledSpotlight = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 60vw;
  text-align: center;
  `


  return (
    <StyledSpotlight>
      <h1>Spotlight</h1>
      <Link href={`/art-pieces/${randomArtpiece.slug}`}>
      <Image 
      src={randomArtpiece.imageSource} 
      alt={randomArtpiece.name} 
      width={randomArtpiece.dimensions.width/3}
      height={randomArtpiece.dimensions.height/3}
      style={{objectFit: "contain"}}
      />
      </Link>
      <h2>{randomArtpiece.name}</h2>
    </StyledSpotlight>
  );
}
