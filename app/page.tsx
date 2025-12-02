import Image from "next/image";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
export default function Home() {
  return (
    <div className="relative w-full h-full">
      <Hero/>
      <AboutSection/>
      <ContactSection/>
    </div>
  );
}
