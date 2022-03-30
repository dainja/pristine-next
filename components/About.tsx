import Image from "next/image";
import adnan from "../public/images/about/adnan-bw.jpg";
import ardita from "../public/images/about/ardita-bw.jpg";
import donna from "../public/images/about/donna-bw.jpg";

const staff = [
  {
    id: 1,
    title: "Donna",
    href: "#",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { name: "FRISÖR", href: "#" },
    image: donna,
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
  },

  {
    id: 2,
    title: "Adnan",
    href: "#",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { name: "BARBERARE", href: "#" },
    image: adnan,
    imageUrl:
      "https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
  },
  {
    id: 3,
    title: "Ardita",
    href: "#",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { name: "BEAUTY", href: "#" },
    image: ardita,
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
];

export const About: React.FC = () => {
  return (
    <div className="relative bg-custom1 py-16 sm:py-20 lg:py-20">
      <div className="relative">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase"></h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl  font-aurora">
            Om Oss
          </p>
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
                  <p className="text-sm font-medium text-cyan-600">
                    <span>{member.category.name}</span>
                  </p>
                  <p className="block mt-2">
                    <p className="text-2xl font-semibold text-gray-900 font-aurora">
                      {member.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {member.info}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
