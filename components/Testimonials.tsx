import React, { useMemo } from "react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  staff: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Lyxig behandling med varma handdukar, rakning med kniv och superproffsig frisör/barberare! Rekommenderar Adnan varmt då han tar sig tid och ger en helhetsupplevelse där jag kände mig otroligt bortskämd!",
    author: "Anton Y.",
    staff: "adnan",
    image: "/images/adnan.png",
  },
  {
    id: 2,
    text: "Kan inte bli bättre! Bra resultat OCH trevligt!! Dessutom fin lokal!",
    author: "Erika Z.",
    staff: "adnan",
    image: "/images/ardita.png",
  },
  {
    id: 3,
    text: "Hos Pristine får man förutom en otrolig frisyr ett otroligt välkomnande och servicen är på topp från att man stiger in till att man lämnar frisörsalongen. Grymt nöjd!!",
    author: "Saha A.",
    staff: "donna",
    image: "/images/donna.png",
  },
];

export const Testimonial: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="pb-16 bg-custom2 lg:pb-0 lg:z-10 lg:relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8 flex-shrink-0">
        <div className="relative lg:-mt-8 lg:mb-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-[29rem]">
              <img
                className="object-cover lg:h-full lg:w-full"
                src={testimonial.image}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-8 lg:m-0 lg:col-span-2 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
            <blockquote>
              <div>
                <svg
                  className="h-12 w-12 text-white opacity-25"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="mt-6 text-2xl font-medium text-white">
                  {testimonial.text}
                </p>
              </div>
              <footer className="mt-6">
                <p className="text-base font-medium text-white">
                  {testimonial.author}
                </p>
                <p className="text-base font-medium text-cyan-100"></p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Carousel } from "./carousel/Carousel";

export const Testimonials = () => (
  <Carousel autoPlay={true} interval={10000} loop={true}>
    {testimonials.map((item, i) => (
      <Testimonial testimonial={item} key={i} />
    ))}
  </Carousel>
);
