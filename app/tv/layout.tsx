import type { Metadata } from "next"

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
  return <>{children}</>
}
