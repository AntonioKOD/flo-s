import type { Metadata } from "next"
import TVAutoRotator from "@/components/tv-auto-rotator"

export const metadata: Metadata = {
  title: "TV Menu | Flo's Pizza",
  robots: {
    index: false,
    follow: false,
  },
}

export default function TVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <TVAutoRotator />
    </>
  )
}
