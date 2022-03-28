import type { NextPage } from "next";
import Head from "next/head";

import { Testimonials } from "../components/Testimonials";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import { Blurb } from "../components/Blurb";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pristine - Hår & skönhetssalong i Växjö</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Luta dig tillbaka och koppla av i vår antika läderstol medan vi klipper, stylar, rakar och trimmar ditt skägg eller hår. Pristine Barbershop är inte en vanliga frisörsalong, det är också en plats för social interaktion och allmän diskussion. Pristine i Växjö, en frisörsalong där alla är välkomna."
        />
      </Head>

      <Hero />
      <Blurb />
      <Services />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
};

export default Home;
