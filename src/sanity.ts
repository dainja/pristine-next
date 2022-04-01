import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "o01cg8yi",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

interface RawPost {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export interface Post {
  id: string;
  image: string;
  thumbnail: string;
  createdAt: Date;
}

export async function getImages(): Promise<Post[]> {
  const query = '*[_type == "imageFeed"]';

  const result = await client.fetch<RawPost[]>(query);
  return result.map((item) => ({
    id: item._id,
    createdAt: item._createdAt,
    image: builder.image(item.image).width(1200).url(),
    thumbnail: builder.image(item.image).width(400).url(),
  }));
}
