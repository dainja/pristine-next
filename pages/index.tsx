import type { NextPage } from "next";
import Head from "next/head";

import { Testimonials } from "../components/Testimonials";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import { Blurb } from "../components/Blurb";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextSeo description="Luta dig tillbaka och koppla av i vår antika läderstol medan vi klipper, stylar, rakar och trimmar ditt skägg eller hår. Pristine Barbershop är inte en vanliga frisörsalong, det är också en plats för social interaktion och allmän diskussion. Pristine i Växjö, en frisörsalong där alla är välkomna." />

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
