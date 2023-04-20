import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;
  //console.log(data);
  // const { name, artist, imageSource } = data;
  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
