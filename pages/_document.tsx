import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/*
          This is the Partytown configuration. Keep it in the <Head>
          as it must load before all other scripts.
        */}
        <script
          data-partytown-config
          dangerouslySetInnerHTML={{
            __html: `
              partytown = {
                lib: "/_next/static/~partytown/",
                forward: ["gtag"]
              };
            `,
          }}
        />
      </Head>
      <body>
        {/* GTM - NoScript Fallback (keep this in the <body>) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5RPPV55M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}