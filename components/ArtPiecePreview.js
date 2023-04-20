import Image from "next/image";
import Link from "next/link";


export function ArtPiecePreview({ image, name, artist, slug }) {
  //  console.log(name, artist);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1rem",
        border: "1px groove black",
        borderRadius: "0.5rem",
        padding: "0.2rem",
      }}
    >
      <h3>{name}</h3>
      <Link href={`/art-pieces/${slug}`}>
      <Image src={image} alt={name} width={400} height={400} />
      </Link>
      <h4 style={{ marginTop: "0.5rem" }}>{artist}</h4>
    </div>
  );
}
