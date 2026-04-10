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
  getBusiness,
  generateRestaurantSchema,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
} from "aicms/server"

export default async function Home() {
  const biz = await getBusiness()
  const [restaurant, localBiz, org, website, breadcrumb] = await Promise.all([
    generateRestaurantSchema(),
    generateLocalBusinessSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateBreadcrumbSchema([{ name: "Home", url: biz.urls?.website ?? "https://flospizza.com" }]),
  ])

  return (
    <>
      <JsonLd data={[restaurant, localBiz, org, website, breadcrumb]} />
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
