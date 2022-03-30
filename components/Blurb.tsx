import Image from "next/image";
import blurb from "../public/images/salon.jpg";

export const Blurb: React.FC = () => {
  return (
    <div className="relative bg-custom1 pt-16">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase"></h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-aurora">
            Salong Pristine
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            <p className="italic">adjective</p>
            <p>[pris·tine || &apos;prɪstɪːn]</p>
            <p>gammaldags; ofördärvad; ren; oförändrad</p>
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80 relative overflow-hidden">
          <div className="lg:-top-48 relative">
            <Image
              alt=""
              src={blurb}
              layout="responsive"
              objectFit="cover"
              placeholder="blur"
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
