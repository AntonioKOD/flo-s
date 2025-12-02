"use client"

import { motion } from "motion/react"
import { Phone, MapPin, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function ContactSection() {
  const hours = [
    { days: "Sunday - Thursday", time: "11:00 AM - 9:00 PM" },
    { days: "Friday - Saturday", time: "10:00 AM - 10:00 PM" },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Visit <span className="text-[#C1272D]">Flo&apos;s</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
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
              <h3 className="text-xl font-semibold">Hours</h3>
            </div>
            <div className="space-y-4">
              {hours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-700 pb-3 last:border-0"
                >
                  <span className="text-gray-300">{schedule.days}</span>
                  <span className="text-white font-medium">{schedule.time}</span>
                </div>
              ))}
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
              <h3 className="text-xl font-semibold">Location</h3>
            </div>
            <p className="text-gray-300 mb-4">
              750 Centre Street
              <br />
              Brockton, MA 02302
            </p>
            <Link href="https://www.google.com/maps/place/750+Centre+St,+Brockton,+MA+02302/@42.0867749,-70.9882542,17z/data=!3m1!4b1!4m6!3m5!1s0x89e49b3a386fdf1b:0x34892425bad38f3e!8m2!3d42.0867749!4d-70.9882542!16s%2Fg%2F11b8v4fsng?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D">
            <Button
              variant="outline"
              className="w-full border-[#C1272D] text-[#C1272D] hover:bg-[#C1272D] hover:text-white bg-transparent"
              
            >
              
                Get Directions
              
            </Button>
            </Link>
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
              <h3 className="text-xl font-semibold">Contact</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">(774) 480-5155</span>
              </div>
              {/*<div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">hello@flospizza.com</span>
              </div>*/}
            </div>
            <Button className="w-full mt-6 bg-[#C1272D] hover:bg-[#a01f25] text-white">Order Now</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
