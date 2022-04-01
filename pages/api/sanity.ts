// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "o01cg8yi",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const query = '*[_type == "imageFeed"]';
  const params = { minSeats: 2 };

  const result = await client.fetch(query, params);
  console.log("result", result);
  res.status(200).json({ name: "John Doe" });
}
