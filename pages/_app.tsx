import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Layout } from "../components/Layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  if (pathname === "/og-image") {
    return <Component {...pageProps} />;
  }
  return (
    <Layout>
      <DefaultSeo
        titleTemplate="%s | Pristine i Växjö"
        defaultTitle="Pristine - Hår & skönhetssalong i Växjö"
        openGraph={{
          type: "website",
          locale: "sv_SE",
          site_name: "Pristine",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
