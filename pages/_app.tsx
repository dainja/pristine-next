import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Layout } from "../components/Layout";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import * as gtag from "../src/gtag";
import PlausibleProvider from "next-plausible";

function PristineApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  if (router.pathname === "/og-image") {
    return <Component {...pageProps} />;
  }

  return (
    <PlausibleProvider domain="pristinevxo.se">
      <Layout>
        <DefaultSeo
          titleTemplate="%s | Pristine - Hår & skönhetssalong i Växjö"
          defaultTitle="Pristine - Hår & skönhetssalong i Växjö"
          openGraph={{
            type: "website",
            locale: "sv_SE",
            site_name: "Pristine",
          }}
        />
        <Script
          strategy="worker"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
            });
        `,
          }}
        />
        {process.browser && (
          <script
            defer
            data-domain="pristinevxo.se"
            src="https://plausible.io/js/plausible.js"
          ></script>
        )}
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  );
}

export default PristineApp;
