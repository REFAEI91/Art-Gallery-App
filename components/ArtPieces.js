import { ArtPiecePreview } from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  // console.log(data);
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            imageSource={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        </li>
      ))}
    </ul>
  );
}
