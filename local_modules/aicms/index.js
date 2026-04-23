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

const MENU_ITEMS = require("../../lib/menu-data").MENU_ITEMS;

exports.useBusiness = function() { return BUSINESS; };
exports.useMenu = function() { return { items: MENU_ITEMS || [] }; };
exports.useContent = function() { return ""; };
exports.CmsProvider = function({ children, initialContent }) { return children; };
exports.defineConfig = function(config) { return config; };

// Schema helpers (aicms extension may import these)
exports.defineSchema = function(schema) { return schema; };
exports.collection = function(config) { return config; };
exports.field = { text: function(c) { return c; }, number: function(c) { return c; }, boolean: function(c) { return c; }, image: function(c) { return c; } };
exports.defineConfig = function(config) { return config; };
