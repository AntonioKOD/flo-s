/** Static site / business data (replaces CMS). */
export const BUSINESS = {
  name: "Flo's Pizza & Roast Beef",
  phone: "(774) 480-5155",
  phoneTel: "tel:+17744805155",
  address: {
    street: "750 Centre St",
    city: "Brockton",
    state: "MA",
    zip: "02302",
  },
  hours: {
    weekdays: { display: "7:00 AM – 9:00 PM" },
  },
  urls: {
    website: "https://flospizza.com",
    orderOnline: "https://flospizza.kwickmenu.com",
    googleMaps:
      "https://www.google.com/maps/place/Flo%27s+Pizza+%26+Roast+Beef/@42.0867749,-70.9882542,17z/data=!3m1!4b1!4m6!3m5!1s0x89e49bcc65a54ad9:0x97346ffc1ffd176d!8m2!3d42.0867749!4d-70.9882542!16s%2Fg%2F11h3ld_gf1",
  },
} as const

export type Business = typeof BUSINESS
