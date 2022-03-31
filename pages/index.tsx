import type { NextPage } from "next";
import Head from "next/head";

import { Testimonials } from "../components/Testimonials";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import { Blurb } from "../components/Blurb";
import { NextSeo } from "next-seo";
import { structuredData } from "../src/structuredData";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextSeo
        openGraph={{
          url: "https://www.pristinevxo.se",
          images: [
            {
              url: "/api/og-image/start.png",
              width: 1200,
              height: 600,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        description="Vi anser att ett besök hos oss ska vara härligt, inspirerande och anpassat för just dig. Vi erbjuder hårfrisering, barber tjänster, bryn, fransar och skönhet som gör dig till din bästa version. Genom att alltid utbilda, uppdatera oss och brinna för det vi gör kan vi ge dig det där lilla extra."
      />

      <Hero />
      <Blurb />
      <section id="tjanster" className="pt-12 -mt-12">
        <Services />
      </section>
      <Testimonials />
      <section id="om-pristine" className="pt-12 -mt-12">
        <About />
      </section>
      <section id="kontakt" className="pt-12 -mt-12">
        <Contact />
      </section>
    </>
  );
};

export default Home;
