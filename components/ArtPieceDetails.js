export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <img src={image} alt={title} width={400} />
      <h1>Title: {title}</h1>
      <h2>Artist: {artist} </h2>
      <p>Year: {year} </p>
      <p>Genre: {genre} </p>
    </div>
  );
}
