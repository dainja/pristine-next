import * as cheerio from "cheerio";

interface Place {
  url: string;
  id: number;
}

interface Service {
  name: string;
  description: string;
  link?: string;
}

export interface PricelistGroup {
  name: string;
  services: Service[];
  source: string;
}

export interface Review {
  id: string;
  review: {
    score: number;
    text: string;
  };
  createdAt: Date;
  subject: {
    type: string;
    employee: {
      id: number;
      name: string;
    };
  };
  author: {
    name: string;
  };
}

export class BokaDirekt {
  static urls: Place[] = [
    {
      id: 46831,
      url: "pristine-46831",
    },
    {
      id: 46262,
      url: "beautybyardita-46262",
    },
  ];

  private static async getGroups(place: Place): Promise<PricelistGroup[]> {
    const res = await fetch("https://www.bokadirekt.se/places/" + place.url);
    const text = await res.text();
    const $ = cheerio.load(text);

    const groups: PricelistGroup[] = [];
    $("#services .item").map((_, element) => {
      const group: PricelistGroup = {
        name: $(element).find("h3").text(),
        services: [],
        source: place.url,
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

  static async fetchPricelistGroups() {
    const arrayOfGroups = await Promise.all(
      BokaDirekt.urls.map(BokaDirekt.getGroups)
    );
    return arrayOfGroups.flat();
  }

  private static async getReviewForPlace(place: Place) {
    const res = await fetch(
      `https://www.bokadirekt.se/api/places/getReviews/${place.id}?page=1&limit=50`
    );
    const json = await res.json();
    const reviews = json.items as Review[];
    return reviews.slice(0, 10);
  }

  static async getReviews() {
    const arrayOfReviews = await Promise.all(
      BokaDirekt.urls.map(BokaDirekt.getReviewForPlace)
    );
    return arrayOfReviews.flat().sort(() => 0.5 - Math.random());
  }
}
