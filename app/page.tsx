import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import MarqueeText from "@/components/marquee-text"
import MenuSection from "@/components/menu-section"
import WeeklySpecial from "@/components/weekly-special"
import HowToOrder from "@/components/how-to-order"
import GallerySection from "@/components/gallery-section"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"
import SubscribeModal from "@/components/subscribe-modal"
import Footer from "@/components/footer"
import Divider from "@/components/divider"
import { JsonLd } from "@/components/json-ld"
import {
  getRestaurantSchema,
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebSiteSchema,
  getBreadcrumbSchema,
} from "@/lib/schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Flo's Pizza | Fresh Pizza in Brockton & Boston, MA | Order Online",
  description:
    "Flo's Pizza in Brockton, MA - Fresh, handcrafted pizza made with authentic ingredients. Stone-baked perfection delivered to Boston, Brockton, Stoughton, Abington, Easton, Randolph & surrounding Greater Boston areas. Order online for pickup or delivery!",
}

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          getRestaurantSchema(),
          getLocalBusinessSchema(),
          getOrganizationSchema(),
          getWebSiteSchema(),
          getBreadcrumbSchema([
            { name: "Home", url: "https://flospizza.com" },
          ]),
        ]}
      />
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
        <WeeklySpecial />
        <Divider />
        <HowToOrder />
        <Divider />
        <GallerySection />
        <Divider />
        <Testimonials />
        <Divider />
        <Newsletter />
        <ContactSection />
        <Footer />
        <SubscribeModal />
      </div>
    </>
  )
}
