"use client"

import { motion } from "motion/react"
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useBusiness } from "aicms"
import Footer from "@/components/footer"

export default function ContactPage() {
  const biz = useBusiness()
  return (
    <main className="w-full min-h-screen bg-background">
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">Contact <span className="text-[#C1272D]">Us</span></h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-body">Stop by for a slice or stay for a meal. We&apos;d love to see you!</p>
          </motion.div>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 px-4 sm:px-6 md:px-16 lg:px-20 bg-[#1a1a1a] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-12">
            <motion.div className="bg-[#252525] rounded-2xl p-6 md:p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-full bg-[#C1272D]/20 flex items-center justify-center"><Clock className="w-5 h-5 text-[#C1272D]" /></div><h2 className="text-xl font-display">Hours</h2></div>
              <div className="space-y-4"><div className="flex justify-between items-center border-b border-gray-700 pb-3"><span className="text-gray-300 font-body">Monday - Sunday</span><span className="text-white font-body font-medium">{biz.hours?.weekdays?.display ?? ""}</span></div></div>
            </motion.div>
            <motion.div className="bg-[#252525] rounded-2xl p-6 md:p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-full bg-[#C1272D]/20 flex items-center justify-center"><MapPin className="w-5 h-5 text-[#C1272D]" /></div><h2 className="text-xl font-display">Location</h2></div>
              <p className="text-gray-300 mb-4 font-body">{biz.address.street}<br />{biz.address.city}, {biz.address.state} {biz.address.zip}</p>
              <a href={biz.urls?.googleMaps ?? "#"} target="_blank" rel="noopener noreferrer"><Button variant="outline" className="w-full border-[#C1272D] text-[#C1272D] hover:bg-[#C1272D] hover:text-white bg-transparent font-body">Get Directions</Button></a>
            </motion.div>
            <motion.div className="bg-[#252525] rounded-2xl p-6 md:p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-full bg-[#C1272D]/20 flex items-center justify-center"><Phone className="w-5 h-5 text-[#C1272D]" /></div><h2 className="text-xl font-display">Contact</h2></div>
              <div className="space-y-4"><div className="flex items-center gap-3"><Phone className="w-4 h-4 text-gray-400" /><a href={biz.phoneTel ?? "#"} className="text-gray-300 font-body hover:text-white transition-colors">{biz.phone}</a></div></div>
              <Link href={biz.urls?.orderOnline ?? "#"}><Button className="w-full mt-6 bg-[#C1272D] hover:bg-[#a01f25] text-white font-body">Order Now</Button></Link>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 px-4 sm:px-6 md:px-16 lg:px-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-2">Find Us</h2>
            <p className="text-muted-foreground font-body">{biz.address.street}, {biz.address.city}, {biz.address.state} {biz.address.zip}</p>
          </motion.div>
          <motion.div className="rounded-2xl overflow-hidden shadow-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.5!2d-71.0184!3d42.0834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4613b2becbeb9%3A0xflos_pizza_brockton!2s750+Centre+St%2C+Brockton%2C+MA+02302!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Flo's Pizza Location" className="w-full" />
          </motion.div>
          <div className="flex justify-center mt-6"><a href={biz.urls?.googleMaps ?? "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#C1272D] hover:underline font-body font-medium">Open in Google Maps <ExternalLink className="w-4 h-4" /></a></div>
        </div>
      </section>
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-20 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Ready to Order?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto font-body">Order online for pickup or delivery, or give us a call!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={biz.urls?.orderOnline ?? "#"} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-[#C1272D] hover:bg-[#a01f25] text-white font-body font-medium rounded-full transition-colors duration-200">Order Online</a>
              <a href={biz.phoneTel ?? "#"} className="px-8 py-3 bg-transparent border-2 border-[#C1272D] text-[#C1272D] hover:bg-[#C1272D]/10 font-body font-medium rounded-full transition-colors duration-200">Call Us: {biz.phone}</a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
