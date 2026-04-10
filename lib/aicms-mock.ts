// Local mock for the aicms package.
// The Cursor aicms extension injects "import { useBusiness } from 'aicms'"
// into components. This file satisfies those imports with static data
// so no CmsProvider, SQLite, or Turso is required.
"use client"

import { BUSINESS } from "@/lib/constants"
import { MENU_ITEMS, type MenuItem } from "@/lib/menu-data"

export type { MenuItem }

export function useBusiness() {
  return {
    name: BUSINESS.name,
    phone: BUSINESS.phone,
    address: BUSINESS.address,
    hours: BUSINESS.hours,
    urls: BUSINESS.urls,
  }
}

export function useMenu() {
  return { items: MENU_ITEMS }
}

export function useContent(key: string) {
  return ""
}

export function CmsProvider({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement
}
