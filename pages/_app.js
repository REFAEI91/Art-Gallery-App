import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} data={data} />
    </Layout>
  );
}
