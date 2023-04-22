import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { useImmerLocalStorageState } from "../util/useImmerLocalStorageState";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  artPiece,
  onFavorite,
}) {
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: [],
    }
  );
  const PrettyView = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5vw auto;
    position: relative;

    .artwork {
      object-fit: contain;
    }
  `;

  const BackButton = styled.button`
    background: transparent;
    border: solid 1px #000;
    color: #000;
    border-radius: 15px;
    padding: 5px 10px;

    &:hover {
      cursor: pointer;
      background-color: #fef;
    }
  `;
  const handleToggleFavorite = () => {
    const updatedArtPiecesInfo = JSON.parse(JSON.stringify(artPiecesInfo));
    const artPieceIndex = updatedArtPiecesInfo.findIndex(
      (piece) => piece.slug === artPiece.slug
    );
    if (artPieceIndex !== -1) {
      updatedArtPiecesInfo[artPieceIndex].favorite =
        !updatedArtPiecesInfo[artPieceIndex].favorite;
      setArtPiecesInfo(updatedArtPiecesInfo);
    }
  };
  return (
    <PrettyView>
      <FavoriteButton
        isFavorite={artPiecesInfo.favorite}
        onToggleFavorite={handleToggleFavorite}
      />
      <Image
        src={image}
        alt={title}
        width={artPiece.dimensions.width / 3}
        height={artPiece.dimensions.height / 3}
        className="artwork"
      />
      <h2>Title: {title}</h2>
      <h3>Artist: {artist} </h3>
      <p>Year: {year} </p>
      <p>{genre} </p>
      <Link href="/art-pieces">
        <BackButton type="button">Back to gallery</BackButton>
      </Link>
    </PrettyView>
  );
}
