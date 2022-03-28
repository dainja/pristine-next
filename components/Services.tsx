import makeup1 from "../assets/icons/make-up1.png";
import barber from "../assets/icons/barber.png";
import hair from "../assets/icons/hair.png";

export const Services: React.FC = () => {
  return (
    <div className="relative bg-custom py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-aurora">
          Allt du behöver under ett och samma tak
        </p>
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
                    Varmt välkommen till vår frisördel. Vi erbjuder ett komplett
                    utbud av professionella frisörbehandlingar.
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
                    Luta dig tillbaka och koppla av i vår antika läderstol medan
                    vi klipper, stylar, rakar och trimmar ditt skägg eller hår.
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
                    Ta hand om dina naglar. Låt någon av våra nagelterapeuter ge
                    dig en professionell manikyr som ger dig starka och snygga
                    naglar och nagelband.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
