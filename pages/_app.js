import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { useImmerLocalStorageState } from "../util/useImmerLocalStorageState";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: [],
    }
  );
  const { data, error, isLoading } = useSWR(URL, fetcher);
  useEffect(() => {
    if (data) {
      const artInfo = [];
      data.forEach((artPiece) => {
        artInfo.push({ ...artPiece, favorite: false });
      });

      setArtPiecesInfo(artInfo);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;

  function handleFavorite(slug) {
    const newArtPiecesInfo = artPiecesInfo.map((artPiece) => {
      if (artPiece.slug === slug) {
        return { ...artPiece, favorite: !artPiece.favorite };
      }
      return artPiece;
    });
    console.log(artPiecesInfo);
    setArtPiecesInfo(newArtPiecesInfo);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        artPiecesInfo={artPiecesInfo}
        setArtPiecesInfo={setArtPiecesInfo}
        onFavorite={handleFavorite}
      />
    </Layout>
  );
}
