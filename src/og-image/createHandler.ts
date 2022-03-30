// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import chrome from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

const width = 1200;

async function getImage(
  baseUrl: string,
  imageConfig?: string | string[]
): Promise<Buffer | String | void> {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath:
      process.env.OG_IMAGE_CHROME_EXECUTABLE_PATH ??
      (await chrome.executablePath),
  });

  const page = await browser.newPage();
  page.setViewport({ width, height: width / 2 });
  const url = `${[baseUrl, "og-image"].join("/")}?imageConfig=${imageConfig}`;
  await page.goto(url);
  const screenshot = await page.screenshot();
  await browser.close();
  return screenshot;
}

function getBaseUrl() {
  if (process.env.OG_IMAGE_BASE_URL) {
    return process.env.OG_IMAGE_BASE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
}

type Data = {
  name: string;
};

export function createOgImageHandler() {
  return async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    try {
      const baseUrl = getBaseUrl();
      const imageConfig = (req.query.config as string).replace(".png", "");

      if (!baseUrl) {
        throw new Error(
          "No `OG_IMAGE_BASE_URL` or `VERCEL_URL` environment variable found."
        );
      }

      const image = await getImage(baseUrl, imageConfig);
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/png");

      res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate");

      res.end(image);
    } catch (error) {
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>Internal Error</h1><p>Sorry, there was a problem.</p>");
      console.error(error);
    }
  };
}
