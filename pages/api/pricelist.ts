import type { NextApiRequest, NextApiResponse } from "next";
import * as cheerio from "cheerio";

interface Service {
  name: string;
  duration: string;
  price: string;
  link?: string;
}

export interface Group {
  name: string;
  services: Service[];
  source: string;
}

const urls = ["pristine-40594", "beautybyardita-46262"];

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
        const service: Service = {
          name: $(element).find(".service-name").text(),
          duration: $(element).find(".service-duration").text(),
          price: $(element).find(".service-price").text(),
          link: $(element).find("a").attr("href"),
        };
        group.services.push(service);
      });
  });
  return groups;
}

interface Data {
  groups: Group[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const arrayOfGroups = await Promise.all(urls.map(getGroups));

  res.status(200).json({ groups: arrayOfGroups.flat() });
}
