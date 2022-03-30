import Image from "next/image";
import plogo from "../assets/plogo-svg.svg";
import hero1 from "../public/images/hero/barber-color.jpg";
import hero2 from "../public/images/hero/makeup.jpg";
import hero3 from "../public/images/hero/3.jpg";

export const Hero: React.FC = () => {
  return (
    <div className="pt-16 bg-custom sm:pt-16 lg:pt-16 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="absolute left-0 right-0 text-5xl md:text-7xl z-10 max-w-xs mx-auto md:leading-[3.5rem] leading-10 -mt-10 md:mt-0">
          <p className="md:ml-11 ml-20 font-aurora">HÅR</p>
          <p className="md:-ml-16 ml-5 font-aurora">SALONG</p>
          <p className="md:ml-16 ml-24 font-aurora">GRUPP</p>
        </div>
        <div className="absolute left-0 right-0 z-10 mx-auto max-w-xs flex justify-end">
          <div className="md:-mr-11 md:-mt-11 mr-6 -mt-10">
            <img
              className="h-[5.25rem] w-[5.25rem] md:h-40 md:w-40"
              src={plogo.src}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center gap-2 mb-4">
          <div className="flex-1 md:mt-32 mt-20 h-[24rem] md:h-[38rem] flex justify-end">
            <div className="w-4/5 md:w-full h-full relative">
              <Image
                alt=""
                src={hero2}
                sizes="33vw"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
              />
            </div>
          </div>
          <div className="flex-1 h-[24rem] md:h-[38rem] mt-32 md:mt-60">
            <div className="w-full h-full relative">
              <Image
                alt=""
                src={hero3}
                sizes="33vw"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
              />
            </div>
          </div>
          <div className="flex-1 h-[24rem] md:h-[38rem] mt-24 md:mt-40">
            <div className="w-4/5 md:w-full h-full relative">
              <Image
                alt=""
                src={hero1}
                sizes="33vw"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
