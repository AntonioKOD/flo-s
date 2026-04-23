import { Geist, Geist_Mono, Righteous, Poppins } from "next/font/google";

import "./globals.css";
import ConditionalNavBar from "@/components/conditional-navbar";
import Loader from "@/components/loader";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { CmsProvider } from "aicms";
import { getSiteContent, generateCmsMetadata } from "aicms/server";

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

export async function generateMetadata(): Promise<Metadata> {
  const base = await generateCmsMetadata("home");
  return {
    ...base,
    metadataBase: new URL("https://flospizza.com"),
    category: "Restaurant",
    classification: "Pizza Restaurant",
    other: {
      "geo.region": "US-MA",
      "geo.placename": "Brockton",
      "geo.position": "42.0867749;-70.9882542",
      ICBM: "42.0867749, -70.9882542",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getSiteContent();
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
        <CmsProvider initialContent={content}>
          <Loader />
          <ConditionalNavBar />
          {children}
        </CmsProvider>
      </body>
    </html>
  );
}
