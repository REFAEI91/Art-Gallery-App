export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <img src={image} alt={title} width={400} />
      <h1>Title: {data.name}</h1>
      <h2>Artist: {data.artist} </h2>
      <p>Year: {data.year} </p>
      <p>Genre: {data.genre} </p>
    </div>
  );
}
