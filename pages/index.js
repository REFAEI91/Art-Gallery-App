import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ data }) {
  return (
    <div>
      <Spotlight pieces={data} />
    </div>
  );
}
