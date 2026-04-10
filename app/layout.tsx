import { Geist, Geist_Mono, Righteous, Poppins } from "next/font/google";

import "./globals.css";
import ConditionalNavBar from "@/components/conditional-navbar";
import Loader from "@/components/loader";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flospizza.com"),
  applicationName: "Flo's Pizza",
  title: {
    default: "Flo's Pizza | Fresh Pizza in Brockton & Boston, MA | Order Online",
    template: "%s | Flo's Pizza",
  },
  description:
    "Flo's Pizza in Brockton, MA - Fresh, handcrafted pizza made with authentic ingredients. Stone-baked perfection delivered to Boston, Brockton, Stoughton, Abington, Easton, Randolph & surrounding Greater Boston areas. Order online for pickup or delivery!",
  keywords: [
    "Flo's Pizza",
    "pizza Brockton MA",
    "pizza delivery Brockton",
    "pizza near me",
    "catering Brockton",
    "breakfast Brockton",
    "brunch Brockton",
    "order pizza online Brockton",
    "pizza Boston MA",
    "restaurant Brockton",
  ],
  authors: [{ name: "Flo's Pizza" }],
  creator: "Flo's Pizza",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flospizza.com",
    siteName: "Flo's Pizza",
    title: "Flo's Pizza | Fresh Pizza in Brockton & Boston, MA",
    description:
      "Fresh, handcrafted pizza made with authentic ingredients in Brockton, MA. Order online for pickup or delivery!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flo's Pizza | Fresh Pizza in Brockton & Boston, MA",
    description: "Fresh, handcrafted pizza in Brockton, MA. Order online!",
  },
  alternates: {
    canonical: "https://flospizza.com",
    languages: { "en-US": "https://flospizza.com" },
  },
  category: "Restaurant",
  classification: "Pizza Restaurant",
  other: {
    "geo.region": "US-MA",
    "geo.placename": "Brockton",
    "geo.position": "42.0867749;-70.9882542",
    ICBM: "42.0867749, -70.9882542",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#C1272D" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${righteous.variable} ${poppins.variable} antialiased`}
      >
        <GoogleAnalytics gaId="G-GZ9Z758XKL" />
        <Loader />
        <ConditionalNavBar />
        {children}
      </body>
    </html>
  );
}
