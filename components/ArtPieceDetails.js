import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";


export default function ArtPieceDetails({ image, title, artist, year, genre, artPiece }) {

  const PrettyView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vw 0;

  .artwork {
    object-fit: contain;
  }
  `

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
  `

  return (
    <PrettyView>
      <Image src={image} alt={title} width={artPiece.dimensions.width/2} height={artPiece.dimensions.height/2} className="artwork" />
      <h1>Title: {title}</h1>
      <h2>Artist: {artist} </h2>
      <p>Year: {year} </p>
      <p>{genre} </p>
    <Link href="/art-pieces">
    <BackButton type="button">Back to gallery</BackButton>
      </Link>
    </PrettyView>
  );
}
