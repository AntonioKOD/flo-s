// Local mock for aicms/server — satisfies imports from the aicms extension.
import { BUSINESS } from "@/lib/constants"
import {
  generateRestaurantSchema,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema"

export async function getBusiness() {
  return {
    name: BUSINESS.name,
    phone: BUSINESS.phone,
    address: BUSINESS.address,
    hours: BUSINESS.hours,
    urls: BUSINESS.urls,
  }
}

export async function getSiteContent() {
  return { business: BUSINESS }
}

export function generateCmsMetadata() {
  return {}
}

export { generateRestaurantSchema, generateLocalBusinessSchema, generateOrganizationSchema, generateWebSiteSchema, generateBreadcrumbSchema }
