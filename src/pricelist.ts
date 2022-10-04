import * as cheerio from "cheerio";

interface Service {
  name: string;
  description: string;
  link?: string;
}

export interface Group {
  name: string;
  services: Service[];
  source: string;
}

const urls = ["pristine-46831", "beautybyardita-46262"];

async function getGroups(url: string): Promise<Group[]> {
  const request = await fetch("https://www.bokadirekt.se/places/" + url);
  const text = await request.text();
  const $ = cheerio.load(text);

  const groups: Group[] = [];
  $("#services .item").map((_, element) => {
    const group: Group = {
      name: $(element).find("h3").text(),
      services: [],
      source: url,
    };
    groups.push(group);
    $(element)
      .find("li")
      .map((_, element) => {
        const description = $(element)
          .find(".service-name + div")
          .text()
          .split(" ·")[0];
        const service: Service = {
          name: $(element).find(".service-name").text(),
          description,
          link: $(element).find("button").attr("href"),
        };
        group.services.push(service);
      });
  });
  return groups;
}

export const fetchPricelistGroups = async (): Promise<Group[]> => {
  const arrayOfGroups = await Promise.all(urls.map(getGroups));
  return arrayOfGroups.flat();
};
