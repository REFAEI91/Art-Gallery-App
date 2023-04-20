import Image from "next/image";

export function ArtPiecePreview({ imageSource, name, artist }) {
  //  console.log(name, artist);

  return (
    <div>
      <Image src={imageSource} alt={name} width={400} height={400} />
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
}
