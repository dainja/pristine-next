import type { NextPage } from "next";
import Head from "next/head";

import { ExternalLinkIcon } from "@heroicons/react/solid";

import makeup1 from "../assets/icons/make-up1.png";
import barber from "../assets/icons/barber.png";
import hair from "../assets/icons/hair.png";
import map from "../assets/img/map.jpg";

import { Testimonials } from "../components/Testimonials";
import { Hero } from "../components/Hero";
import { Blog } from "../components/Blog";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pristine - Hår & skönhetssalong i Växjö</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero />

      {/* Feature section with screenshot */}
      <div className="relative bg-custom1 pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase"></h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-aurora">
              Salong Pristine
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              Hos oss hittar du den perfekta balansen mellan en kunnig och
              erfaren frisör, barberare och en makeupartist med ett brett utbud.
              Vi erbjuder alltså en härlig kombination av kompetens och en
              bekväm samt avslappnad stämning som utgör grunden för salong
              Pristine.
            </p>
          </div>
          <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
            <img
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 object-position"
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2036&q=80"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Feature section with grid */}
      <div className="relative bg-custom py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
            Tjänster
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-aurora">
            Allt du behöver under ett och samma tak
          </p>
          {/* <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p> */}
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-teal-700 rounded-md shadow-lg">
                        <img src={hair.src} alt="" className="w-28" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Frisör
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Varmt välkommen till vår frisördel. Vi erbjuder ett
                      komplett utbud av professionella frisörbehandlingar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-teal-700 rounded-md shadow-lg">
                        <img src={barber.src} alt="" className="w-28" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Barberare
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Luta dig tillbaka och koppla av i vår antika läderstol
                      medan vi klipper, stylar, rakar och trimmar ditt skägg
                      eller hår.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-teal-700 rounded-md shadow-lg">
                        <img src={makeup1.src} alt="" className="w-28" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Beauty
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Ta hand om dina naglar. Låt någon av våra nagelterapeuter
                      ge dig en professionell manikyr som ger dig starka och
                      snygga naglar och nagelband.
                    </p>
                  </div>
                </div>
              </div>
              {/* {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-teal-700 rounded-md shadow-lg">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <Blog />

      {/* CTA Section */}
      <div className="relative bg-custom2">
        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full  lg:object-none xl:object-cover object-none bg-custom2"
            src={map.src}
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-md px-4 py-6 sm:max-w-7xl sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300"></h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl font-aurora">
              Välkommen in till oss
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10">
              <div>
                <h2 className="italic text-base font-semibold tracking-wider text-red-300 ">
                  Adress
                </h2>
                <div className="mt-2 text-white">
                  <p>
                    Pristine
                    <br />
                    Storgatan 27
                    <br />
                    352 30
                  </p>
                </div>
              </div>
              <div className="lg:max-w-[14rem] max-w-[14rem]">
                <h2 className="italic text-base font-semibold tracking-wider text-red-300 ">
                  Öppettider
                </h2>
                <div className="mt-2 text-white">
                  <div>
                    <div className="flex justify-between">
                      <span>Måndag - Fredag</span> <span>9.00 - 18.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lördag</span> <span>9.00 - 15.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="italic text-base font-semibold tracking-wider text-red-300 ">
                  Betalning
                </h2>
                <div className="mt-2 text-white">
                  <p>
                    Tänk på att vi inte tar emot kontanter vid betalning i vår
                    fysiska butik.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="italic text-base font-semibold tracking-wider text-red-300 ">
                  Debitering
                </h2>
                <div className="mt-2 text-white">
                  <p>
                    Avbokning av behandling ska ske senast 24 timmar före bokad
                    tid. Vid uteblivet besök debiteras 75% av kostnaden.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow justify-between">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50  mr-2"
                >
                  Boka tid
                  <ExternalLinkIcon
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="tel:+46734322770"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>073 432 27 70</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
