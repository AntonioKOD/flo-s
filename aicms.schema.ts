import { defineSchema, collection, field } from "aicms";

export default defineSchema({
  siteType: "restaurant",

  content: {
    "business.name": field.text({ label: "Business Name", required: true }),
    "business.phone": field.text({ label: "Phone Number" }),
    "business.phoneTel": field.text({ label: "Phone (tel format)" }),
    "business.phoneE164": field.text({ label: "Phone (E.164 format)" }),
    "business.address.street": field.text({ label: "Street Address" }),
    "business.address.city": field.text({ label: "City" }),
    "business.address.state": field.text({ label: "State" }),
    "business.address.zip": field.text({ label: "ZIP Code" }),
    "business.address.country": field.text({ label: "Country" }),
    "business.address.full": field.text({ label: "Full Address" }),
    "business.geo.latitude": field.text({ label: "Latitude" }),
    "business.geo.longitude": field.text({ label: "Longitude" }),
    "business.urls.website": field.text({ label: "Website URL" }),
    "business.urls.orderOnline": field.text({ label: "Online Ordering URL" }),
    "business.urls.googleMaps": field.text({ label: "Google Maps URL" }),
    "business.hours.display": field.text({ label: "Hours Display" }),
    "business.hours.weekdays.display": field.text({ label: "Weekday Hours Display" }),
    "business.hours.weekdays.open": field.text({ label: "Weekday Open Time" }),
    "business.hours.weekdays.close": field.text({ label: "Weekday Close Time" }),
    "business.serviceAreas": field.text({ label: "Service Areas" }),
    "seo.home.title": field.text({ label: "Homepage SEO Title" }),
    "seo.home.description": field.text({ label: "Homepage SEO Description" }),
    "seo.home.keywords": field.text({ label: "Homepage SEO Keywords" }),
  },

  collections: {
    menu_items: collection({
      name: "Menu Items",
      fields: {
        name: field.text({ required: true }),
        description: field.text(),
        category: field.enum({
          options: ["Pizza", "Appetizers", "Platters", "Brunch", "Desserts", "Drinks"],
        }),
        prices: field.json({ required: true, description: "Array of {label, amount} where amount is in cents" }),
        popular: field.boolean(),
        image: field.image(),
        note: field.text(),
        sort_order: field.number(),
      },
    }),
    testimonials: collection({
      name: "Testimonials",
      fields: {
        quote: field.richtext({ required: true }),
        name: field.text({ required: true }),
        role: field.text(),
        rating: field.number(),
        sort_order: field.number(),
      },
    }),
  },
});
