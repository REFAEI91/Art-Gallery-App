import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { useImmerLocalStorageState } from "../util/useImmerLocalStorageState";

export function ArtPiecePreview({ image, name, artist, slug, favorite }) {
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: [],
    }
  );
  console.log(artPiecesInfo);
  const ImageContainer = styled.div`
    width: 250px;
    display: flex;
    position: relative;
    justify-content: center;
    .artwork {
      object-fit: contain;
      width: 100%;
      position: relative;
      height: unset;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
      object-fit: contain;
    }
  `;
  const handleToggleFavorite = () => {
    const updatedArtPiecesInfo = [...artPiecesInfo];
    if (updatedArtPiecesInfo.find((artPiece) => artPiece.slug === slug)) {
      updatedArtPiecesInfo.find((artPiece) => artPiece.slug === slug).favorite =
        !updatedArtPiecesInfo.find((artPiece) => artPiece.slug === slug)
          .favorite;
      setArtPiecesInfo(updatedArtPiecesInfo);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0.2rem",
        width: "500px",
        height: "500px",
      }}
    >
      <p style={{ fontSize: "1.1rem" }}>{name}</p>
      <ImageContainer>
        <Link href={`/art-pieces/${slug}`}>
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className={"artwork"}
          />
        </Link>
        <FavoriteButton
          isFavorite={favorite}
          onToggleFavorite={handleToggleFavorite}
        />
      </ImageContainer>
      <p style={{ marginTop: "0.5rem", fontStyle: "italic" }}>{artist}</p>
    </div>
  );
}
