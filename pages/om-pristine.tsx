import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import adnan from "../public/images/about/adnan-bw.jpg";
import ardita from "../public/images/about/ardita-bw.jpg";
import donna from "../public/images/about/donna-bw.jpg";
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
    name: "Donna",
    role: "FRISÖR",
    image: donna,
    about:
      "Arbetat som frisör i 7 år. Frisöryrket har varit min dröm så länge jag kan minnas. Jag har gått en hel del utbildningar under alla år såsom färgutbildningar, klipp-tekniker och även Hairtalk stylist.",
    about2:
      "Älskar att jobba med allt inom hår särskilt ljusa hår och skapa färgförändringar.",
    about3: "Olaplex.",
  },

  {
    id: 2,
    name: "Adnan",
    role: "BARBERARE",
    image: adnan,
    about:
      "Utbildad barberare för både hår och skägg där jag uppfyller dina önskemål med sax och maskin.",
    about2:
      "Fade eller skinfade är en favorit hos mig. Men jag jobbar med alla olika frisyrer och hårtyper.",
    about3:
      "Uppercut är en fantastisk produkt och den jag har alltid jobbat med.",
  },
  {
    id: 3,
    name: "Ardita",
    role: "BEAUTY",
    image: ardita,
    about:
      "Arbetat som Makeupartist i snart 13 år. Makeup & skönhetsyrket har alltid varit en dröm sedan barndomen eftersom jag brinner för de konstnärliga. Jag har utbildningar inom både makeup och för olika sminkmärken, samt inom skönhet/teater och film. Jag har även utbildning inom olika ögonbrynstekniker såsom tatuering, form och färg samt lashlift.",
    about2:
      "Jag kan inte bestämma mig för något särskilt, älskar att skapa allt som ligger inom min profession! ",
    about3: null,
  },
];
const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo title="Om Pristine" />
      <div className="relative bg-custom1 py-16 sm:py-20 lg:py-20">
        <div className="relative">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl  font-aurora">
              Om oss på Pristine
            </h2>
            <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500"></p>
          </div>
          <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
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
