// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getInstagramFeed } from "../../src/instagram";

type Data = {
  user: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user = await getInstagramFeed();
  res.status(200).json({ user });
}
