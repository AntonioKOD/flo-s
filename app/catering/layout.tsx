import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Catering Services | Flo's Pizza",
  description: "Professional catering services from Flo's Pizza in Brockton, MA. Perfect for corporate events, parties, and gatherings. Appetizers, platters, brunch catering, and more. Serving Boston, Brockton, and Greater Boston area.",
  keywords: [
    "catering Brockton MA",
    "catering Boston MA",
    "event catering Brockton",
    "corporate catering Boston",
    "party catering Brockton",
    "brunch catering",
    "appetizer catering",
    "platter catering",
    "Flo's Pizza catering",
    "Brockton catering services",
    "Boston catering services",
    "catering near me",
    "event food catering",
    "office catering",
    "wedding catering Brockton",
  ],
  openGraph: {
    title: "Catering Services | Flo's Pizza",
    description: "Professional catering services from Flo's Pizza. Perfect for corporate events, parties, and gatherings.",
    url: "https://flospizza.com/catering",
  },
  alternates: {
    canonical: "/catering",
  },
}

export default function CateringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}



