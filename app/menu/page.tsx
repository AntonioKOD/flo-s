import MenuGrid from "@/components/menu-grid"
import MarqueeText from "@/components/marquee-text"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import {
  generateRestaurantSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema"
import { BUSINESS } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Menu",
  description: `Browse the full ${BUSINESS.name} menu. Pizza, catering platters, brunch items, and more. Order online for pickup or delivery in ${BUSINESS.address.city}, ${BUSINESS.address.state}.`,
  alternates: {
    canonical: `${BUSINESS.urls.website}/menu`,
  },
}

export default function MenuPage() {
  const schemas = [
    generateRestaurantSchema(),
    generateBreadcrumbSchema([
      { name: "Home", url: BUSINESS.urls.website },
      { name: "Menu", url: `${BUSINESS.urls.website}/menu` },
    ]),
  ]

  return (
    <>
      <JsonLd data={schemas} />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-12 px-4 text-center">
          <h1 className="font-display text-[#C1272D] text-5xl md:text-6xl lg:text-7xl mb-4">
            Our Menu
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            From handcrafted pizzas to catering platters and brunch favorites,
            there&apos;s something for everyone at Flo&apos;s.
          </p>
        </section>

        <MarqueeText
          texts={["Pizza", "Catering", "Platters", "Brunch", "Fresh Ingredients", "Handcrafted"]}
          variant="cream"
          speed="slow"
        />

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-[1280px]">
            <MenuGrid />
          </div>
        </section>

        <section className="py-16 px-4 bg-[#1c1c1c]">
          <div className="text-center">
            <h2 className="font-display text-white text-3xl md:text-4xl mb-4">
              Ready to Order?
            </h2>
            <p className="font-body text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              Place your order online for pickup or delivery. Fresh and hot, ready when you are.
            </p>
            <a
              href={BUSINESS.urls.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C1272D] text-white font-body font-semibold px-10 py-4 rounded-full hover:bg-[#a01f25] transition-colors"
            >
              Order Online Now
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
