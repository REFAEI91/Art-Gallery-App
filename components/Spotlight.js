import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

function randomNumber(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Spotlight({ pieces, artPiecesInfo, onFavorite }) {
  const [randomArtpiece, setRandomArtpiece] = useState(randomNumber(pieces));

  const StyledSpotlight = styled.div`
    margin: 0 auto;
    height: 100vh;
    width: 60vw;
    text-align: center;
  `;
  const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: fit-content;
    height: 100%;
  `;

  return (
    <StyledSpotlight>
      <h1>Spotlight</h1>
      <ImageContainer>
        <Link href={`/art-pieces/${randomArtpiece.slug}`}>
          <Image
            src={randomArtpiece.imageSource}
            alt={randomArtpiece.name}
            width={randomArtpiece.dimensions.width / 3}
            height={randomArtpiece.dimensions.height / 3}
            style={{
              objectFit: "contain",
              boxShadow: "1px 1px 10px 2px rgba(0, 0, 0, 0.5)",
            }}
          />
          <FavoriteButton
            isFavorite={randomArtpiece.favorite}
            onToggleFavorite={() => onFavorite(randomArtpiece.slug)}
          />
        </Link>
      </ImageContainer>
      <p>{randomArtpiece.name}</p>
    </StyledSpotlight>
  );
}
