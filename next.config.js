/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    nextScriptWorkers: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  i18n: {
    locales: ["sv"],
    defaultLocale: "sv",
  },
};

module.exports = nextConfig;
