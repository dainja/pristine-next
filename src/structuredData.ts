// https://schema.org/HairSalon
// Use https://search.google.com/test/rich-results to test validity
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Pristine",
  image: [
    "https://pristinevxo.se/images/google-structured-data/1x1.jpg",
    "https://pristinevxo.se/images/google-structured-data/4x3.jpg",
    "https://pristinevxo.se/images/google-structured-data/16x9.jpg",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Storgatan 27",
    addressLocality: "Växjö",
    postalCode: "35230",
    addressCountry: "Sweden",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 56.878955,
    longitude: 14.801878,
  },
  url: "http://www.pristinevxo.se",
  telephone: "+4647016120",
  slogan: "gammaldags; ofördärvad; ren; oförändrad",
  priceRange: "$$",
  currenciesAccepted: "SEK",
  paymentAccepted: "Debit Card, Credit Card",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
};
