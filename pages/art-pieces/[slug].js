import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function DetailPage({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const artPiece = artPieces.find((piece) => piece.slug === slug);


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

export async function getServerSideProps({ params}) {
  const response = await fetch('https://example-apis.vercel.app/api/art')
  const data = await response.json()
  return {props: { artPieces: data }}
}