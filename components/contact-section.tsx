"use client"

import { motion } from "motion/react"
import { Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useBusiness } from "aicms"

export default function ContactSection() {
  const BUSINESS = useBusiness()
  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a] text-white" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">
            Visit <span className="text-[#C1272D]">Flo&apos;s</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto font-body">
            Stop by for a slice or stay for a meal. We&apos;d love to see you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Hours */}
          <motion.div
            className="bg-[#252525] rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#C1272D]/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#C1272D]" />
              </div>
              <h3 className="text-xl font-display">Hours</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                <span className="text-gray-300 font-body">Monday - Sunday</span>
                <span className="text-white font-body font-medium">{BUSINESS.hours.weekdays.display}</span>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="bg-[#252525] rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#C1272D]/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#C1272D]" />
              </div>
              <h3 className="text-xl font-display">Location</h3>
            </div>
            <p className="text-gray-300 mb-4 font-body">
              {BUSINESS.address.street}
              <br />
              {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
            </p>
            <a href={BUSINESS.urls?.googleMaps ?? "#"} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="w-full border-[#C1272D] text-[#C1272D] hover:bg-[#C1272D] hover:text-white bg-transparent font-body"
              >
                Get Directions
              </Button>
            </a>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="bg-[#252525] rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#C1272D]/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#C1272D]" />
              </div>
              <h3 className="text-xl font-display">Contact</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href={BUSINESS.phoneTel} className="text-gray-300 font-body hover:text-white transition-colors">
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
            <Link href={BUSINESS.urls?.orderOnline ?? "#"}>
              <Button className="w-full mt-6 bg-[#C1272D] hover:bg-[#a01f25] text-white font-body">
                Order Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
