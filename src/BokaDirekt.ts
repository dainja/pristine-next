import * as cheerio from "cheerio";

interface Place {
  url: string;
  id: number;
}

interface Service {
  name: string;
  description: string;
  link: string | null;
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
      url: "salong-linne-46831",
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
    $("#services .flex.flex-col.pb-xl").map((_, element) => {
      const groupName =
        $(element).find(".py-md h2.text-h-s").first().text().trim() ||
        $(element).find(".py-md h2").first().text().trim() ||
        $(element).find("h2").first().text().trim();

      const group: PricelistGroup = {
        name: groupName,
        services: [],
        source: place.url,
      };
      groups.push(group);

      $(element)
        .find(".bg-surface_l2")
        .map((_, serviceEl) => {
          const name =
            $(serviceEl).find("h2.text-l").first().text().trim() ||
            $(serviceEl).find("h2").first().text().trim();

          // Prefer the styled description container, fallback to text-s content minus labels/buttons
          const detailBlock = $(serviceEl)
            .find("div.text-fg_secondary")
            .first();
          let description = "";
          if (detailBlock.length) {
            const styled = detailBlock
              .find("div[style]")
              .filter((_, el) => !!$(el).text().trim())
              .first();
            description = (
              styled.text() ||
              detailBlock.clone().children("button").remove().end().text()
            ).trim();
          } else {
            const raw = $(serviceEl).find("div.text-s").first().text();
            description = raw
              .replace(/Läs\s*mer/i, "")
              .replace(/\b\d+\s*min\b/i, "")
              .trim();
          }

          const link = $(serviceEl).find("a[href]").attr("href") || null;

          const service: Service = {
            name,
            description,
            link,
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
    const filteredReviews = reviews.filter(
      (review) => review.review.score === 5
    );

    return filteredReviews.slice(0, 10);
  }

  static async getReviews() {
    const arrayOfReviews = await Promise.all(
      BokaDirekt.urls.map(BokaDirekt.getReviewForPlace)
    );
    return arrayOfReviews.flat().sort(() => 0.5 - Math.random());
  }
}
