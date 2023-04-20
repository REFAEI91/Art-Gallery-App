import { ArtPiecePreview } from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.log(pieces);
  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "0.3rem",
        listStyle: "none",
      }}
    >
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            name={piece.name}
            artist={piece.artist}
          />
        </li>
      ))}
    </ul>
  );
}
