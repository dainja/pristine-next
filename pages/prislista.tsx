import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import pricelist from "../public/images/pricelist.jpeg";
import Image from "next/image";
import { trackBookingButton } from "../src/gtag";
import { BokaDirekt, PricelistGroup } from "../src/BokaDirekt";

const Information: React.FC<{ text: string }> = ({ text }) => (
  <p className="flex items-center text-sm text-left text-gray-500">
    {text.split(", ").map((value, index, array) => (
      <Fragment key={index}>
        <span className="whitespace-nowrap">{value}</span>
        {index + 1 < array.length ? <span>,&nbsp;</span> : null}
      </Fragment>
    ))}
  </p>
);

interface Props {
  groups: PricelistGroup[];
}

const PricelistPage: NextPage<Props> = ({ groups }) => {
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
      <div className="relative py-8 bg-custom1 sm:py-12 lg:py-16">
        <div className="max-w-md px-4 mx-auto text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div className="w-full relative mb-8 max-w-3xl aspect-[1/1] md:aspect-[16/10] mx-auto rounded overflow-hidden mix-blend-luminosity">
            <Image
              alt=""
              src={pricelist}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="overflow-hidden sm:rounded-md">
            <ul role="list" className="mb-12">
              {groups.map((group, index) => (
                <div key={index}>
                  <h2 className="mt-12 mb-3 ml-6 text-2xl tracking-tight text-left text-gray-900 sm:text-3xl font-aurora">
                    {group.name}
                  </h2>
                  {group.services.map((service, index) => (
                    <li key={index} className="even:bg-custom even:rounded-xl">
                      <a
                        target="_blank"
                        href={`https://www.bokadirekt.se${
                          service.link || `/places/${group.source}`
                        }`}
                        onClick={() =>
                          trackBookingButton("pricelist", service.name)
                        }
                        className="flex items-center justify-between hover:bg-gray-200"
                        rel="noreferrer"
                      >
                        <div className="px-4 py-4 sm:px-6">
                          <div>
                            <p className="text-sm font-medium text-left text-tarawera ">
                              {service.name}
                            </p>
                            <Information text={service.description} />
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <button className="inline-flex items-center justify-center px-3 py-2 mr-2 text-base font-medium text-white border border-transparent rounded-md bg-tarawera hover:bg-gray-700">
                            Boka
                            <ExternalLinkIcon
                              className="w-5 h-5 ml-3 -mr-1 text-white"
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
  const groups = await BokaDirekt.fetchPricelistGroups();

  return {
    props: {
      groups,
    },
    revalidate: 600,
  };
};


export default PricelistPage;
