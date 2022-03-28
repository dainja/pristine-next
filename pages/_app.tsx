import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo
        titleTemplate="%s | Pristine i Växjö"
        defaultTitle="Pristine - Hår & skönhetssalong i Växjö"
        openGraph={{
          type: "website",
          locale: "sv_SE",
          url: "https://www.pristinevxo.se/",
          site_name: "Pristine",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
