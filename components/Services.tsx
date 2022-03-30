import makeup1 from "../public/images/services/make-up1.png";
import barber from "../public/images/services/barber.png";
import hair from "../public/images/services/hair.png";
import Image from "next/image";

const services = [
  {
    title: "Frisör",
    text: "Klippning, styling, hairtalk.",
    image: hair,
  },
  {
    title: "Barberare",
    text: "Barbertjänster. Herrklippning och rakning.",
    image: barber,
  },
  {
    title: "Beauty",
    text: "Ögonbryn och fransbehandlingar. Makeupkurser och makeup inför festligheter",
    image: makeup1,
  },
];

export const Services: React.FC = () => {
  return (
    <div className="relative bg-custom py-16 sm:py-24 lg:pt-24 lg:pb-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-aurora">
          Allt du behöver under ett och samma tak
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 ">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-teal-700 rounded-md shadow-lg">
                        <div className="w-28 relative">
                          <Image
                            src={service.image}
                            layout="responsive"
                            sizes="50vw"
                            alt=""
                          />
                        </div>
                      </span>
                    </div>
                    <h2 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-base text-gray-500">
                      {service.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
