import Image from "next/image";
import blurb from "../public/images/blurb3.jpg";

export const Blurb: React.FC = () => {
  return (
    <div className="relative bg-custom1 pt-16">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-aurora pl-2">
            Salong Pristine
          </h1>
          <div className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            <p className="italic">adjective</p>
            <p>[ pris·tine || &apos;prɪstɪːn ]</p>
            <p>gammaldags; ofördärvad; ren; oförändrad</p>
          </div>
          <br />
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="mt-2 max-w-prose mx-auto text-xl text-gray-500">
            <p>
              Vi anser att ett besök hos oss ska vara härligt, inspirerande och
              anpassat för just dig. Vi erbjuder hårfrisering, barber tjänster,
              bryn, fransar och skönhet som gör dig till din bästa version.
              Genom att alltid utbilda, uppdatera oss och brinna för det vi gör
              kan vi ge dig det där lilla extra.
            </p>
          </div>
        </div>
        <div className="mt-12 relative overflow-hidden">
          <div className="lg:-top-16 relative">
            <Image
              alt=""
              src={blurb}
              layout="responsive"
              objectFit="cover"
              placeholder="blur"
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            />
          </div>
        </div>
        <div className="relative flex pt-20 lg:pt-5 items-center pb-20">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>
    </div>
  );
};
