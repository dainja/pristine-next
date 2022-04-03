import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { fetchPricelistGroups, Group } from "../src/pricelist";
import { Fragment } from "react";
import pricelist from "../public/images/pricelist.jpeg";
import Image from "next/image";
import { trackBookingButton } from "../src/gtag";

const Information: React.FC<{ text: string }> = ({ text }) => (
  <p className="flex items-center text-sm text-gray-500 text-left">
    {text.split(", ").map((value, index, array) => (
      <Fragment key={index}>
        <span className="whitespace-nowrap">{value}</span>
        {index + 1 < array.length ? <span>,&nbsp;</span> : null}
      </Fragment>
    ))}
  </p>
);

interface Props {
  groups: Group[];
}

const Home: NextPage<Props> = ({ groups }) => {
  return (
    <>
      <NextSeo
        openGraph={{
          url: "https://www.pristinevxo.se/prislista",
          images: [
            {
              url: "/api/og-image/pricelist.png",
              width: 1200,
              height: 600,
            },
          ],
        }}
        title="Prislista"
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="relative bg-custom1 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div className="w-full relative mb-8 max-w-3xl aspect-[1/1] md:aspect-[16/10] mx-auto rounded overflow-hidden mix-blend-luminosity">
            <Image
              alt=""
              src={pricelist}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl text-center text-gray-900 tracking-tight font-aurora">
            Prislista
          </h1>
          <div className="overflow-hidden sm:rounded-md">
            <ul role="list" className="mb-12">
              {groups.map((group, index) => (
                <div key={index}>
                  <h2 className="mt-12 mb-3 ml-6 text-2xl sm:text-3xl text-left text-gray-900 tracking-tight font-aurora">
                    {group.name}
                  </h2>
                  {group.services.map((service, index) => (
                    <li key={index} className="even:bg-custom even:rounded-xl">
                      <a
                        target="_blank"
                        href={`https://www.bokadirekt.se${
                          service.link ?? `/places/${group.source}`
                        }`}
                        onClick={() => trackBookingButton(service.name)}
                        className="hover:bg-gray-200 flex items-center justify-between"
                        rel="noreferrer"
                      >
                        <div className="px-4 py-4 sm:px-6">
                          <div>
                            <p className="text-sm font-medium text-tarawera text-left ">
                              {service.name}
                            </p>
                            <Information text={service.duration} />
                          </div>
                        </div>
                        <div className="ml-2 flex-shrink-0">
                          <button className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-tarawera hover:bg-gray-700 mr-2">
                            Boka
                            <ExternalLinkIcon
                              className="-mr-1 ml-3 h-5 w-5 text-white"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </a>
                    </li>
                  ))}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const groups = await fetchPricelistGroups();

  return {
    props: {
      groups,
    },
    revalidate: 600,
  };
};

export default Home;
