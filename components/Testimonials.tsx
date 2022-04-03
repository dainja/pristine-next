import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import adnan from "../public/images/testimonials/adnan-testimonial.jpg";
import adnan1 from "../public/images/testimonials/adnan-testimonial1.jpg";
import ardita from "../public/images/testimonials/ardita-testimonial.jpg";
import ardita1 from "../public/images/testimonials/ardita-testimonial1.jpg";
import donna from "../public/images/testimonials/donna-testimonial.jpg";
import donna1 from "../public/images/testimonials/donna-testimonial1.jpg";
import donna2 from "../public/images/testimonials/donna-testimonial2.jpg";
import donna3 from "../public/images/testimonials/donna-testimonial3.jpg";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  image: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Lyxig behandling med varma handdukar, rakning med kniv och superproffsig frisör/barberare! Rekommenderar Adnan varmt då han tar sig tid och ger en helhetsupplevelse där jag kände mig otroligt bortskämd!",
    author: "Anton Y.",
    image: adnan,
  },
  {
    id: 2,
    text: "Underbar service och underbar människa! Detta rekommenderar jag mina vänner!! Tack!!!",
    author: "Erika Z.",
    image: ardita,
  },
  {
    id: 3,
    text: "Hos Pristine får man förutom en otrolig frisyr ett otroligt välkomnande och servicen är på topp från att man stiger in till att man lämnar frisörsalongen. Grymt nöjd!!",
    author: "Saha A.",
    image: donna3,
  },
  {
    id: 4,
    text: "Underbar upplevelse idag hos Donna. Lyssnar på mina önskemål och ger kompletterande tips och råd angående färg och frisyr. Så duktig och trevlig frisör. Gick därifrån och var helnöjd!",
    author: "Jessica H.",
    image: donna1,
  },
  {
    id: 5,
    text: "Alltid god och professionell service hos Adnan. En super trevlig person som får klippningen att bli en upplevelse varje gång!",
    author: "Darmin Z.",
    image: adnan1,
  },
  {
    id: 6,
    text: "Personligt bemötande med stort engagemang. Toppenresultat!",
    author: "Maria W.",
    image: ardita1,
  },
];

export const Testimonial: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="pb-16 bg-tarawera lg:pb-0 lg:z-10 lg:relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8 flex-shrink-0">
        <div className="relative lg:-mt-8 lg:mb-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-custom lg:hidden"
          />
          <div className="mx-auto max-w-xs px-4 sm:px-6 lg:p-0 lg:h-full">
            <div className="relative aspect-w-8 sm:aspect-w-12 aspect-h-8 shadow-xl overflow-hidden sm:aspect-h-14 lg:aspect-none">
              <Image
                objectFit="cover"
                layout="fill"
                src={testimonial.image}
                placeholder="blur"
                alt=""
                className="rounded-xl shadow-xl"
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
                <p className="mt-6 text-xl md:text-2xl font-medium text-white">
                  {testimonial.text}
                </p>
              </div>

              <footer className="mt-6">
                <p className="text-base font-medium text-white italic">
                  {testimonial.author}
                </p>
                <p className="text-base font-medium text-cyan-100"></p>
              </footer>
              <div className="inline-flex items-center divide-x divide-gray-300">
                <div className="flex-shrink-0 flex pr-5">
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-400 sm:py-3">
                  <span className="font-medium text-white">5 stjärnor </span>
                  från över{" "}
                  <a
                    href="https://www.bokadirekt.se/places/pristine-40594"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-red-300"
                  >
                    250 recensioner på bokadirekt.se
                  </a>
                </div>
              </div>
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
    {testimonials
      .sort((a, b) => 0.5 - Math.random())
      .map((item, i) => (
        <Testimonial testimonial={item} key={i} />
      ))}
  </Carousel>
);
