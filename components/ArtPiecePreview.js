import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export function ArtPiecePreview({ image, name, artist, slug }) {

    const ImageContainer = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    
    
    .artwork {
      object-fit: contain;
      width: 60%;
      position: relative;
      height: unset;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    }
    `

  return (
    <div
      style={{
        // display: "grid",
        // gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
        // gridGap: "1rem",
        // justifyItems: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0.2rem",
        width: "500px",
        height: "500px",
      }}
    >
      <h3>{name}</h3>
      <Link href={`/art-pieces/${slug}`}>
        <ImageContainer>
      <Image src={image} alt={name} objectFit="contain" width={500} height={500} className={'artwork'} />
        </ImageContainer>
      </Link>
      <h4 style={{ marginTop: "0.5rem" }}>{artist}</h4>
    </div>
  );
}
