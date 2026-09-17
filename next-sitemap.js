const siteUrl =
  process.env.NODE_ENV === "production"
    ? `https://www.salonglinne.se`
    : "http://localhost:3000";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ["/og-image"],
};
