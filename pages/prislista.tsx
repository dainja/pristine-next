import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { Group } from "./api/pricelist";

interface Props {
  groups: Group[];
}

const Home: NextPage<Props> = ({ groups }) => {
  console.log("groups", groups);
  return (
    <>
      <NextSeo title="Prislista" />
      <h1 className="mt-24 text-3xl sm:text-4xl text-center text-gray-900 tracking-tight font-aurora">
        Prislista
      </h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="mb-12 divide-y divide-gray-200">
          {groups.map((group, index) => (
            <div key={index}>
              <h2 className="mt-12 ml-6 text-2xl sm:text-3xl text-left text-gray-900 tracking-tight font-aurora">
                {group.name}
              </h2>
              {group.services.map((service, index) => (
                <li key={index}>
                  <a
                    target="_blank"
                    href={`https://www.bokadirekt.se${
                      service.link ?? "/places/pristine-40594"
                    }`}
                    className="block hover:bg-gray-50"
                    rel="noreferrer"
                  >
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-green-600 truncate">
                          {service.name}
                        </p>
                        <div className="ml-2 flex-shrink-0">
                          <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-green-600 hover:bg-gray-50  mr-2">
                            Boka
                            <ExternalLinkIcon
                              className="-mr-1 ml-3 h-5 w-5 text-gray-900"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            {service.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const baseUrl = process.env.VERCEL_URL ?? "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/pricelist`);
  const props = await res.json();
  return {
    props,
  };
};

export default Home;
