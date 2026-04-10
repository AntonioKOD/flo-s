import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import MarqueeText from "@/components/marquee-text"
import MenuSection from "@/components/menu-section"
import HowToOrder from "@/components/how-to-order"
import GallerySection from "@/components/gallery-section"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"
import SubscribeModal from "@/components/subscribe-modal"
import Footer from "@/components/footer"
import Divider from "@/components/divider"
import { JsonLd } from "@/components/json-ld"
import {
  generateRestaurantSchema,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema"
import { BUSINESS } from "@/lib/constants"

export default function Home() {
  const schemas = [
    generateRestaurantSchema(),
    generateLocalBusinessSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateBreadcrumbSchema([{ name: "Home", url: BUSINESS.urls.website }]),
  ]

  return (
    <>
      <JsonLd data={schemas} />
      <div className="relative w-full h-full">
        <Hero />
        <MarqueeText
          texts={[
            "Fresh Pizza",
            "Stone Baked",
            "Handcrafted",
            "Brockton, MA",
            "Order Online",
            "Catering Available",
            "Breakfast & Brunch",
          ]}
          variant="red"
        />
        <AboutSection />
        <Divider />
        <MenuSection />
        <Divider />
        <HowToOrder />
        <Divider />
        <GallerySection />
        <Divider />
        <Testimonials />
        <Divider />
        <Newsletter />
        <Footer />
        <SubscribeModal />
      </div>
    </>
  )
}
