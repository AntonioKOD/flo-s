"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Coffee, Pizza, Clock, UtensilsCrossed } from "lucide-react"
import breakfast1 from "@/public/delicious-breakfast-with-coffee-orange-juice-waffles-croissants-jam-nut-paste-light-top-view.jpg"
import breakfast2 from "@/public/edward-nguyen-Ma_tUpJHb2M-unsplash.jpg"
import breakfast3 from "@/public/homemade-fried-eggs-salad-bacon-plate-front-coffee-cup.jpg"
import breakfast4 from "@/public/pablo-pacheco-D3Mag4BKqns-unsplash.jpg"

export default function AboutSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-20 bg-background" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">More Than Just Pizza</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            From sunrise to sunset, we serve fresh, delicious food made with love
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Image Grid */}
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

          {/* Right - Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Start Your Day Right With Our Breakfast Menu
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At Flo&apos;s, we believe great food isn&apos;t limited to just one meal. Our breakfast menu features freshly baked
              pastries, artisan coffee, fluffy pancakes, and hearty egg dishes — all made with the same passion and
              quality ingredients as our famous pizzas.
            </p>

            {/* Features */}
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
  )
}
