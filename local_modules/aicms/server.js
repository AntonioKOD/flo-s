"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const BUSINESS = {
  name: "Flo's Pizza",
  phone: "(774) 480-5155",
  phoneTel: "tel:+17744805155",
  phoneE164: "+17744805155",
  address: { street: "750 Centre Street", city: "Brockton", state: "MA", zip: "02302", country: "US", full: "750 Centre Street, Brockton, MA 02302" },
  geo: { latitude: 42.0867749, longitude: -70.9882542 },
  hours: { weekdays: { open: "06:00", close: "21:00", display: "6:00 AM - 9:00 PM" }, display: "Monday - Sunday: 6:00 AM - 9:00 PM" },
  urls: { website: "https://flospizza.com", orderOnline: "https://flospizza.kwickmenu.com", googleMaps: "https://www.google.com/maps/place/750+Centre+St,+Brockton,+MA+02302/@42.0867749,-70.9882542,17z" },
  serviceAreas: ["Boston","Brockton","Stoughton","Abington","Easton","Randolph","Avon","Holbrook","Whitman","Quincy","Braintree","Weymouth"],
};

exports.getBusiness = async function() { return BUSINESS; };
exports.getSiteContent = async function() { return { business: BUSINESS }; };
exports.generateCmsMetadata = async function(_page) {
  return {
    title: { default: "Flo's Pizza | Fresh Pizza in Brockton & Boston, MA | Order Online", template: "%s | Flo's Pizza" },
    description: "Flo's Pizza in Brockton, MA — Fresh, handcrafted pizza, catering, subs & more. Order online for pickup or delivery!",
  };
};
exports.createCmsApiHandler = function() { return function() { return new Response(JSON.stringify({ error: "Not found" }), { status: 404 }); }; };
exports.createCmsAuthHandler = function() { return function() { return new Response(JSON.stringify({ error: "Not found" }), { status: 404 }); }; };
exports.generateRestaurantSchema = function() {
  return { "@context": "https://schema.org", "@type": "Restaurant", name: BUSINESS.name, address: { "@type": "PostalAddress", streetAddress: BUSINESS.address.street, addressLocality: BUSINESS.address.city, addressRegion: BUSINESS.address.state, postalCode: BUSINESS.address.zip, addressCountry: "US" }, telephone: BUSINESS.phoneE164, url: BUSINESS.urls.website, servesCuisine: ["Pizza", "Italian", "American"], priceRange: "$$" };
};
exports.generateLocalBusinessSchema = function() {
  return { "@context": "https://schema.org", "@type": "LocalBusiness", name: BUSINESS.name, address: { "@type": "PostalAddress", streetAddress: BUSINESS.address.street, addressLocality: BUSINESS.address.city, addressRegion: BUSINESS.address.state, postalCode: BUSINESS.address.zip, addressCountry: "US" }, telephone: BUSINESS.phoneE164, url: BUSINESS.urls.website };
};
exports.generateOrganizationSchema = function() {
  return { "@context": "https://schema.org", "@type": "Organization", name: BUSINESS.name, url: BUSINESS.urls.website, logo: `${BUSINESS.urls.website}/flospizza.png`, telephone: BUSINESS.phoneE164 };
};
exports.generateWebSiteSchema = function() {
  return { "@context": "https://schema.org", "@type": "WebSite", name: BUSINESS.name, url: BUSINESS.urls.website };
};
exports.generateBreadcrumbSchema = function(items) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: item.url })) };
};
