import ArtPieces from "@/components/ArtPieces";

import { useImmerLocalStorageState } from "../util/useImmerLocalStorageState";

export default function Favorites({ artPieces }) {
  const [artPiecesInfo] = useImmerLocalStorageState("artPiecesInfo", {
    defaultValue: {},
  });

  const favoriteArtPieces = Object.values(artPiecesInfo).filter(
    (artPiece) => artPiece.favorite
  );
  return (
    <>
      <h1>Favorite Art Pieces</h1>
      <ArtPieces pieces={favoriteArtPieces} />
    </>
  );
}
