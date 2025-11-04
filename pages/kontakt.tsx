import { NextPage } from "next";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import map from "../public/images/map.svg";
import Image from "next/image";
import { trackBookingButton } from "../src/gtag";
import { NextSeo } from "next-seo";
import blurb from "../public/images/blurb.jpg";

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Om Salong Linné" />
      <div className="relative bg-custom1 pt-16 sm:pt-20 pb-8">
        <div className="relative">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="w-full relative mb-8 max-w-3xl aspect-[16/10] md:aspect-[16/10] mx-auto rounded overflow-hidden mix-blend-luminosity">
              <Image
                alt=""
                src={blurb}
                placeholder="blur"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500"></p>
          </div>
        </div>
      </div>
      <div className="relative bg-tarawera" id="kontakt">
        <div className="relative h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <Image
            objectFit="cover"
            layout="fill"
            src={map}
            alt=""
            className="lg:object-none xl:object-cover object-none scale-150 sm:transform-none"
          />
        </div>
        <div className="relative mx-auto max-w-md px-4 py-6 sm:max-w-7xl sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl font-aurora">
              Välkommen in till oss
            </h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10">
              <div>
                <h3 className="text-base font-semibold tracking-wider text-red-300 ">
                  Adress
                </h3>
                <div className="text-white">
                  <p>
                    Salong Linné
                    <br />
                    Storgatan 27
                    <br />
                    352 30
                  </p>
                </div>
              </div>
              <div className="lg:max-w-[14rem] max-w-[14rem]">
                <h3 className="text-base font-semibold tracking-wider text-red-300 ">
                  Öppettider
                </h3>
                <div className="text-white">
                  <div>
                    <div className="flex justify-between">
                      <span>Tisdag - Fredag</span> <span>9.00 - 18.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lördag</span> <span>9.00 - 15.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-wider text-red-300 ">
                  Betalning
                </h3>
                <div className="text-white">
                  <p>
                    Tänk på att vi inte tar emot kontanter vid betalning i vår
                    fysiska butik.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-wider text-red-300 ">
                  Debitering
                </h3>
                <div className="text-white">
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
                  href="https://www.bokadirekt.se/places/pristine-46831"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackBookingButton("contact")}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50  mr-2"
                >
                  Boka tid
                  <ExternalLinkIcon
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="tel:+4647016120"
                  onClick={() => trackBookingButton("phone")}
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
                  <span>0470 - 16120</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
