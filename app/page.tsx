import Image from "next/image";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import SEOStructuredData from "@/components/seo-structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flo's Pizza | Fresh Pizza in Brockton & Boston, MA | Order Online",
  description: "Flo's Pizza in Brockton, MA - Fresh, handcrafted pizza made with authentic ingredients. Stone-baked perfection delivered to Boston, Brockton, Stoughton, Abington, Easton, Randolph & surrounding Greater Boston areas. Order online for pickup or delivery!",
  keywords: [
    "pizza Brockton MA",
    "pizza Boston MA",
    "pizza delivery Brockton",
    "pizza delivery Boston",
    "pizza restaurant Brockton",
    "pizza restaurant Boston",
    "best pizza Brockton",
    "best pizza Boston",
    "pizza near me",
    "Flo's Pizza",
    "Brockton pizza",
    "Boston pizza",
    "Stoughton pizza",
    "Abington pizza",
    "Easton pizza",
    "Randolph pizza",
    "pizza South Shore",
    "pizza Greater Boston",
    "fresh pizza",
    "handcrafted pizza",
    "stone baked pizza",
    "pizza delivery",
    "pizza pickup",
    "Italian pizza Brockton",
    "Italian pizza Boston",
    "authentic pizza",
    "pizza 02302",
    "Centre Street pizza",
    "pizza near Boston",
    "pizza South of Boston"
  ],
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Flo's Pizza",
    "image": "https://flospizza.com/flospizza.png",
    "@id": "https://flospizza.com",
    "url": "https://flospizza.com",
    "telephone": "+17744805155",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "750 Centre Street",
      "addressLocality": "Brockton",
      "addressRegion": "MA",
      "postalCode": "02302",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.0867749,
      "longitude": -70.9882542
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "opens": "11:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "22:00"
      }
    ],
    "servesCuisine": "Italian",
    "menu": "https://flospizza.kwickmenu.com",
    "acceptsReservations": "False",
    "areaServed": [
      {
        "@type": "City",
        "name": "Boston"
      },
      {
        "@type": "City",
        "name": "Brockton"
      },
      {
        "@type": "City",
        "name": "Stoughton"
      },
      {
        "@type": "City",
        "name": "Abington"
      },
      {
        "@type": "City",
        "name": "Easton"
      },
      {
        "@type": "City",
        "name": "Randolph"
      },
      {
        "@type": "City",
        "name": "Avon"
      },
      {
        "@type": "City",
        "name": "Holbrook"
      },
      {
        "@type": "City",
        "name": "Whitman"
      },
      {
        "@type": "City",
        "name": "Quincy"
      },
      {
        "@type": "City",
        "name": "Braintree"
      },
      {
        "@type": "City",
        "name": "Weymouth"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pizza Menu",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MenuItem",
            "name": "Pizza"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "50"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SEOStructuredData />
      <div className="relative w-full h-full">
        <Hero/>
        <AboutSection/>
        <ContactSection/>
      </div>
    </>
  );
}
