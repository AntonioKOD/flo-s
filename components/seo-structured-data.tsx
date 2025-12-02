"use client"

export default function SEOStructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://flospizza.com/#business",
    "name": "Flo's Pizza",
    "image": "https://flospizza.com/flospizza.png",
    "logo": "https://flospizza.com/flospizza.png",
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
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "currenciesAccepted": "USD",
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
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://flospizza.com"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flo's Pizza",
    "url": "https://flospizza.com",
    "logo": "https://flospizza.com/flospizza.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+17744805155",
      "contactType": "Customer Service",
      "areaServed": ["US", "Boston", "Brockton", "Greater Boston Area"],
      "availableLanguage": "English"
    },
    "sameAs": [
      // Add social media links when available
      // "https://www.facebook.com/flospizza",
      // "https://www.instagram.com/flospizza"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}

