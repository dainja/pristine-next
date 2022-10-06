import { SaloonLogo } from "../components/SaloonLogo";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Testimonials } from "../components/Testimonials";
import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import { Blurb } from "../components/Blurb";
import { NextSeo } from "next-seo";
import { structuredData } from "../src/structuredData";
import { BokaDirekt, Review } from "../src/BokaDirekt";

interface Props {
  reviews: Review[];
}

const Home: NextPage<Props> = ({ reviews }) => {
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

      <Testimonials />
      <SaloonLogo />
      <Contact />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const reviews = await BokaDirekt.getReviews();

  return {
    props: {
      reviews,
    },
    revalidate: 600,
  };
};

export default Home;
