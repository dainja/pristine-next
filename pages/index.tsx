import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Testimonials } from "../components/Testimonials";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import { Blurb } from "../components/Blurb";
import { NextSeo } from "next-seo";
import { structuredData } from "../src/structuredData";
import { getInstagramFeed, Post } from "../src/instagram";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = () => {
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
        description="Hos oss hittar du den perfekta balansen mellan en kunnig och erfaren frisör, barberare och en makeupartist med ett brett utbud. Vi erbjuder alltså en härlig kombination av kompetens och en bekväm samt avslappnad stämning som utgör grunden för salong Pristine."
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getInstagramFeed();

  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
};

export default Home;
