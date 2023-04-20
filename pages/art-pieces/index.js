import ArtPieces from "@/components/ArtPieces";

export default function Gallery({ data }) {
  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
