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
  redirects: async () => {
    return [
      {
        source: "/om-pristine",
        destination: "/om-linne",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
