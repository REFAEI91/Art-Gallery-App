import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function DetailPage({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const artPiece = artPieces.find((piece) => piece.slug === slug);

  const handleClick = () => console.log("clicked");

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
    />
  );
}
