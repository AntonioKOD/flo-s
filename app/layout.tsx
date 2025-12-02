import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Flo's Pizza | Fresh Pizza in Brockton, MA | Order Online",
    template: "%s | Flo's Pizza"
  },
  description: "Flo's Pizza in Brockton, MA - Fresh, handcrafted pizza made with authentic ingredients. Stone-baked perfection delivered to Boston, Brockton, Stoughton, Abington, Easton, Randolph & surrounding Greater Boston areas. Order online for pickup or delivery!",
  keywords: [
    "pizza Brockton MA",
    "pizza Boston MA",
    "pizza delivery Brockton",
    "pizza delivery Boston",
    "pizza restaurant Brockton",
    "pizza restaurant Boston",
    "best pizza Brockton",
    "best pizza Boston",
    "pizza near me",
    "Flo's Pizza",
    "Brockton pizza",
    "Boston pizza",
    "Stoughton pizza",
    "Abington pizza",
    "Easton pizza",
    "Randolph pizza",
    "pizza South Shore",
    "pizza Greater Boston",
    "fresh pizza",
    "handcrafted pizza",
    "stone baked pizza",
    "pizza delivery",
    "pizza pickup",
    "Italian pizza Brockton",
    "Italian pizza Boston",
    "authentic pizza",
    "pizza 02302",
    "Centre Street pizza",
    "pizza near Boston",
    "pizza South of Boston"
  ],
  authors: [{ name: "Flo's Pizza" }],
  creator: "Flo's Pizza",
  publisher: "Flo's Pizza",
  metadataBase: new URL("https://flospizza.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flospizza.com",
    siteName: "Flo's Pizza",
    title: "Flo's Pizza | Fresh Pizza in Brockton & Boston, MA",
    description: "Fresh, handcrafted pizza made with authentic ingredients. Stone-baked perfection serving Brockton, Boston & Greater Boston area. Order online for pickup or delivery!",
    images: [
      {
        url: "/flospizza.png",
        width: 1200,
        height: 630,
        alt: "Flo's Pizza - Fresh Pizza in Brockton, MA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flo's Pizza | Fresh Pizza in Brockton & Boston, MA",
    description: "Fresh, handcrafted pizza made with authentic ingredients. Stone-baked perfection serving Brockton, Boston & Greater Boston area.",
    images: ["/flospizza.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification code when available
    // google: "your-google-verification-code",
  },
  category: "Restaurant",
  classification: "Pizza Restaurant",
  other: {
    "geo.region": "US-MA",
    "geo.placename": "Brockton",
    "geo.position": "42.0834;-71.0184",
    "ICBM": "42.0834, -71.0184",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
