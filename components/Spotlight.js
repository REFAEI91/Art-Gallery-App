import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { useImmerLocalStorageState } from "../util/useImmerLocalStorageState";

function randomNumber(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Spotlight({ pieces, onFavorite }) {
  const [randomArtpiece, setRandomArtpiece] = useState(randomNumber(pieces));
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: [],
    }
  );
  const handleToggleFavorite = () => {
    const updatedArtPiecesInfo = [...artPiecesInfo];
    if (
      updatedArtPiecesInfo.find(
        (artPiece) => artPiece.slug === randomArtpiece.slug
      )
    ) {
      updatedArtPiecesInfo.find(
        (artPiece) => artPiece.slug === randomArtpiece.slug
      ).favorite = !updatedArtPiecesInfo.find(
        (artPiece) => artPiece.slug === randomArtpiece.slug
      ).favorite;
      setArtPiecesInfo(updatedArtPiecesInfo);
    }
  };
  console.log(artPiecesInfo);

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
        </Link>
        <FavoriteButton
          isFavorite={randomArtpiece.favorite}
          onToggleFavorite={handleToggleFavorite}
        />
      </ImageContainer>
      <p>{randomArtpiece.name}</p>
    </StyledSpotlight>
  );
}
