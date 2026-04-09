import { BUSINESS } from "./constants";
import { MENU_ITEMS } from "./menu-data";

const BASE_URL = BUSINESS.urls.website;

export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${BASE_URL}/#restaurant`,
    name: BUSINESS.name,
    image: `${BASE_URL}/flospizza.png`,
    url: BASE_URL,
    telephone: BUSINESS.phoneE164,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: BUSINESS.hours.weekdays.open,
        closes: BUSINESS.hours.weekdays.close,
      },
    ],
    servesCuisine: "Italian",
    menu: BUSINESS.urls.orderOnline,
    acceptsReservations: false,
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "USD",
    hasMap: BUSINESS.urls.googleMaps,
    areaServed: BUSINESS.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "50",
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#business`,
    name: BUSINESS.name,
    image: `${BASE_URL}/flospizza.png`,
    logo: `${BASE_URL}/flospizza.png`,
    url: BASE_URL,
    telephone: BUSINESS.phoneE164,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: BUSINESS.hours.weekdays.open,
        closes: BUSINESS.hours.weekdays.close,
      },
    ],
    servesCuisine: "Italian",
    menu: BUSINESS.urls.orderOnline,
    acceptsReservations: false,
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "USD",
    areaServed: BUSINESS.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: BUSINESS.name,
    url: BASE_URL,
    logo: `${BASE_URL}/flospizza.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phoneE164,
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "English",
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: BUSINESS.name,
    url: BASE_URL,
    description: `${BUSINESS.name} in ${BUSINESS.address.city}, ${BUSINESS.address.state}. Fresh, handcrafted pizza made with authentic ingredients. Stone-baked perfection.`,
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getMenuSchema() {
  const categories = [...new Set(MENU_ITEMS.map((i) => i.category))];

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${BASE_URL}/menu#menu`,
    name: `${BUSINESS.name} Menu`,
    url: `${BASE_URL}/menu`,
    hasMenuSection: categories.map((cat) => ({
      "@type": "MenuSection",
      name: cat,
      hasMenuItem: MENU_ITEMS.filter((i) => i.category === cat).map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        ...(item.description && { description: item.description }),
        offers: {
          "@type": "Offer",
          price: item.prices[0].amount,
          priceCurrency: "USD",
        },
      })),
    })),
  };
}
