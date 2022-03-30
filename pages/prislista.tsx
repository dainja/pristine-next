import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { Group } from "./api/pricelist";

interface Props {
  groups: Group[];
}

const Home: NextPage<Props> = ({ groups }) => {
  return (
    <>
      <NextSeo
        openGraph={{
          images: [
            {
              url: "/api/og-image/pricelist.png",
              width: 1200,
              height: 600,
            },
          ],
        }}
        title="Prislista"
      />
      <div className="relative bg-custom1 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
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
                          service.link ?? "/places/pristine-40594"
                        }`}
                        className="hover:bg-gray-200 flex items-center justify-between"
                        rel="noreferrer"
                      >
                        <div className="px-4 py-4 sm:px-6">
                          <div>
                            <p className="text-sm font-medium text-custom2 text-left ">
                              {service.name}
                            </p>
                            <p className="flex items-center text-sm text-gray-500 text-left">
                              {service.duration}
                            </p>
                          </div>
                        </div>
                        <div className="ml-2 flex-shrink-0">
                          <button className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-custom2 hover:bg-gray-700 mr-2">
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

export const getServerSideProps: GetServerSideProps<Props> = async ({
  res,
}) => {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/pricelist`);
  const props = await response.json();

  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate");
  return {
    props,
  };
};

export default Home;
