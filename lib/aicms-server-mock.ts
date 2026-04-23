// Local mock for aicms/server — satisfies imports from the aicms extension.
import { BUSINESS } from "@/lib/constants"
import {
  generateRestaurantSchema,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema"
import type { Metadata } from "next"

const bizData = {
  name: BUSINESS.name,
  phone: BUSINESS.phone,
  address: BUSINESS.address,
  hours: BUSINESS.hours,
  urls: BUSINESS.urls,
}

export async function getBusiness() {
  return bizData
}

export async function getSiteContent() {
  return { business: bizData }
}

export async function generateCmsMetadata(_page?: string): Promise<Metadata> {
  return {
    title: {
      default: "Flo's Pizza | Fresh Pizza in Brockton & Boston, MA | Order Online",
      template: "%s | Flo's Pizza",
    },
    description:
      "Flo's Pizza in Brockton, MA — Fresh, handcrafted pizza, catering, subs & more. Order online for pickup or delivery!",
    keywords: ["Flo's Pizza", "pizza Brockton MA", "catering Brockton", "pizza delivery"],
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: BUSINESS.urls.website,
      siteName: BUSINESS.name,
    },
  }
}

export {
  generateRestaurantSchema,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
}
