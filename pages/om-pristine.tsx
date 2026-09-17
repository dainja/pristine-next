import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import adnan from "../public/images/about/adnan-bw.jpg";
// Sparade för framtida användning - tidigare team
// import ardita from "../public/images/about/ardita-bw.jpg";
// import donna from "../public/images/about/donna-bw.jpg";
interface Staff {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  about: string;
  about2: string;
  about3: string | null;
}

const staff: Staff[] = [
  {
    id: 1,
    name: "Adnan",
    role: "BARBERARE",
    image: adnan,
    about:
      "Utbildad barberare för både hår och skägg där jag uppfyller dina önskemål med sax, maskin och rakkniv.",
    about2:
      "Fade eller skinfade är en favorit hos mig. Men jag jobbar med alla olika frisyrer och hårtyper.",
    about3:
      "Uppercut är en fantastisk produkt och den jag har alltid jobbat med.",
  },
];
const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Om Salong Linné" />
      <div className="relative bg-custom1 py-16 sm:py-20 lg:py-20">
        <div className="relative">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl  font-aurora">
              Om Salong Linné
            </h2>
            <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500"></p>
          </div>
          <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-1 lg:max-w-2xl">
            {staff.map((member) => (
              <div
                key={member.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <div className="h-96 w-full relative">
                    <Image
                      objectFit="cover"
                      layout="fill"
                      src={member.image}
                      placeholder="blur"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-cyan-600">
                      <span>{member.role}</span>
                    </h3>
                    <div className="block mt-2">
                      <p className="text-2xl font-semibold text-gray-900 font-aurora">
                        {member.name}
                      </p>
                      <div className="mt-3 text-base text-gray-500">
                        <h4 className="font-bold">Vem är {member.name}?</h4>
                        <p> {member.about}</p>
                        <br />
                        <h4 className="font-bold">Skapar?</h4>
                        <p>{member.about2}</p>
                        <br />
                        {member.about3 ? (
                          <h4 className="font-bold">Favoritprodukt</h4>
                        ) : null}

                        <p>{member.about3}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
