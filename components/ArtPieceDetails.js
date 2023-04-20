import Image from "next/image";
import styled from "styled-components";


export default function ArtPieceDetails({ image, title, artist, year, genre }) {

  const PrettyView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vw;
  `

  return (
    <PrettyView>
      <Image src={image} alt={title} width={600} height={600} />
      <h1>Title: {title}</h1>
      <h2>Artist: {artist} </h2>
      <p>Year: {year} </p>
      <p>{genre} </p>
    </PrettyView>
  );
}
