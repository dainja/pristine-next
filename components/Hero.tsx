import Image from "next/image";
import hero4 from "../public/images/hero/4.jpg";
import { trackBookingButton } from "../src/gtag";
import { Logo } from "./Logo";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Bakgrundsbild med overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Salong Linné Barber"
          src={hero4}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logga */}
          <div className="space-y-8">
            <div className="flex justify-center items-center">
              <div className="w-64 sm:w-80 md:w-96 lg:w-[500px] p-8 bg-white/95 rounded-2xl shadow-2xl drop-shadow-[0_0_50px_rgba(94,234,212,0.5)] backdrop-blur-sm mx-auto">
                <div className="flex justify-center items-center w-full">
                  <Logo />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-tarawera"></div>
              <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.3em] uppercase">
                Barbershop
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-tarawera"></div>
            </div>
          </div>

          {/* Beskrivning */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Professionell barberare i hjärtat av Växjö.
            <br />
            Fade, skinfade och klassisk rakkniv.
          </p>

          {/* CTA Knappar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="https://www.bokadirekt.se/places/salong-linne-46831"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackBookingButton("hero")}
              className="group relative px-12 py-5 text-lg font-bold text-white bg-tarawera hover:bg-tarawera-700 rounded-none transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-tarawera/50 uppercase tracking-wider"
            >
              <span className="relative z-10">Boka Tid Nu</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            
            <a
              href="tel:+4647016120"
              onClick={() => trackBookingButton("hero-phone")}
              className="px-12 py-5 text-lg font-bold text-white border-2 border-white/50 hover:border-white hover:bg-white/10 rounded-none transition-all duration-300 uppercase tracking-wider"
            >
              Ring Oss
            </a>
          </div>

          {/* Info */}
          <div className="pt-12 text-gray-400 text-sm sm:text-base space-y-2">
            <p className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Hovsgatan 12, Växjö</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Tisdag-Fredag 9-18 | Lördag 9-15</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};
