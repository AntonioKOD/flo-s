"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { Coffee, Pizza, Clock, UtensilsCrossed, Heart, Star, Users } from "lucide-react"
import { BUSINESS } from "@/lib/constants"
import Footer from "@/components/footer"
import breakfast1 from "@/public/delicious-breakfast-with-coffee-orange-juice-waffles-croissants-jam-nut-paste-light-top-view.jpg"
import breakfast2 from "@/public/edward-nguyen-Ma_tUpJHb2M-unsplash.jpg"
import breakfast3 from "@/public/homemade-fried-eggs-salad-bacon-plate-front-coffee-cup.jpg"
import breakfast4 from "@/public/pablo-pacheco-D3Mag4BKqns-unsplash.jpg"

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      {/* Hero */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
              About <span className="text-[#C1272D]">Flo&apos;s Pizza</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-body">
              More than just pizza — we&apos;re a Brockton tradition serving fresh, delicious food made with love
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-20 px-4 sm:px-6 md:px-16 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={breakfast1}
                  alt="Fresh breakfast"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                <Image
                  src={breakfast2}
                  alt="Artisan coffee"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden -mt-8">
                <Image
                  src={breakfast3}
                  alt="Fresh pastries"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={breakfast4}
                  alt="Eggs benedict"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-display text-foreground">
                Start Your Day Right With Our Breakfast Menu
              </h2>
              <p className="text-muted-foreground leading-relaxed font-body">
                At Flo&apos;s, we believe great food isn&apos;t limited to just one meal. Our breakfast menu features freshly baked
                pastries, artisan coffee, fluffy pancakes, and hearty egg dishes — all made with the same passion and
                quality ingredients as our famous pizzas.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C1272D]/10 flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-[#C1272D]" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Fresh Coffee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C1272D]/10 flex items-center justify-center">
                    <Pizza className="w-5 h-5 text-[#C1272D]" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Artisan Pizza</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C1272D]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#C1272D]" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Open Early</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C1272D]/10 flex items-center justify-center">
                    <UtensilsCrossed className="w-5 h-5 text-[#C1272D]" />
                  </div>
                  <span className="text-sm font-medium text-foreground">All Day Menu</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-16 md:py-20 px-4 sm:px-6 md:px-16 lg:px-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">
              Why Choose <span className="text-[#C1272D]">Flo&apos;s</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Made with Love",
                description:
                  "Every dish is crafted with care using authentic recipes and the freshest ingredients available.",
              },
              {
                icon: Star,
                title: "Quality First",
                description:
                  "We never compromise on quality. From our dough to our toppings, everything is made fresh daily.",
              },
              {
                icon: Users,
                title: "Community Focused",
                description:
                  "We're proud to be part of the Brockton community, serving families and friends since day one.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-white shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#C1272D]/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-[#C1272D]" />
                </div>
                <h3 className="text-lg font-display text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">
              Come Visit Us Today
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto font-body">
              We&apos;re located at {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state}. Stop by for a slice or stay for a meal!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="px-8 py-3 bg-[#C1272D] hover:bg-[#a01f25] text-white font-body font-medium rounded-full transition-colors duration-200"
              >
                View Our Menu
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-transparent border-2 border-[#C1272D] text-[#C1272D] hover:bg-[#C1272D]/10 font-body font-medium rounded-full transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
