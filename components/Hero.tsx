import Image from "next/image";
import hero2 from "../public/images/hero/2.jpg";
import hero3 from "../public/images/hero/3.jpg";
import { Logo } from "./Logo";
import hero4 from "../public/images/hero/4.jpg";

export const Hero: React.FC = () => {
  return (
    <div className="pt-16 bg-custom sm:pt-16 lg:pt-16 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="absolute left-0 right-0 z-10 mx-auto max-w-xs flex justify-center">
          <div className="md:-mr-3 md:-mt-11 sm:mr-8 -mt-10">
            <Logo className="h-32 w-32 md:w-[16.5rem] md:h-[16.5rem] sm:w-40 sm:h-40" />
          </div>
        </div>
        <div className="flex justify-center gap-2 pb-4">
          <div className="basis-2/5 sm:basis-1/3 md:flex-1 md:mt-32 mt-20 h-[24rem] md:h-[38rem] flex justify-end">
            <div className="w-11/12 md:w-full h-full relative">
              <Image
                alt=""
                src={hero2}
                sizes="33vw"
                layout="fill"
                objectFit="cover"
           
                priority
              />
            </div>
          </div>
          <div className="basis-1/3 md:flex-1 h-[24rem] md:h-[38rem] mt-32 md:mt-60">
            <div className="w-full h-full relative">
              <Image
                alt=""
                src={hero3}
                sizes="33vw"
                layout="fill"
                objectFit="cover"
               
                
                priority
              />
            </div>
          </div>
          <div className="basis-2/5 xs:basis-1/3 md:flex-1 h-[24rem] md:h-[38rem] mt-24 md:mt-40">
            <div className="w-11/12 md:w-full h-full relative">
              <Image
                alt=""
                src={hero4}
                sizes="33vw"
                layout="fill"
                objectFit="cover"
              
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
