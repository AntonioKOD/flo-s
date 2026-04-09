"use client"

import React from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { CATERING_SECTIONS, formatPrice } from "@/lib/menu-data"
import { BUSINESS } from "@/lib/constants"

export default function CateringPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
              Catering <span className="text-[#C1272D]">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-body">
              Make your event memorable with Flo&apos;s Pizza catering. From corporate events to family gatherings, we bring fresh, delicious food to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="w-full py-8 md:py-12 px-4 sm:px-6 md:px-16 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">
          {CATERING_SECTIONS.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-display tracking-wide text-foreground mb-2">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-sm md:text-base text-muted-foreground font-body">
                    {section.subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-4 md:space-y-5">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    className="flex flex-col gap-2 border-b border-border pb-4 md:pb-5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                      <div className="flex-1 flex items-center gap-2">
                        <span className="font-medium text-foreground text-base md:text-lg font-body">
                          {item.name}
                        </span>
                        {item.popular && (
                          <span className="text-xs font-body font-bold bg-[#C1272D]/10 text-[#C1272D] px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="text-right whitespace-nowrap">
                        <span className="text-foreground font-semibold text-base md:text-lg font-body">
                          {item.prices.length === 0
                            ? item.note ?? ""
                            : item.prices
                                .map((p) =>
                                  p.label
                                    ? `${p.label} ${formatPrice(p.amount)}`
                                    : formatPrice(p.amount)
                                )
                                .join(" \u00B7 ")}
                        </span>
                      </div>
                    </div>

                    {item.description && (
                      <p className="text-sm md:text-base text-muted-foreground mt-1 font-body">
                        {item.description}
                      </p>
                    )}

                    {item.note && item.prices.length > 0 && (
                      <p className="text-xs md:text-sm text-muted-foreground mt-1 italic font-body">
                        {item.note}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">
              Ready to Plan Your Event?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto font-body">
              Contact us to discuss your catering needs. We&apos;re here to make your event a success!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={BUSINESS.phoneTel}
                className="px-6 py-3 bg-[#C1272D] hover:bg-[#a01f25] text-white font-body font-medium rounded-full transition-colors duration-200"
              >
                Call Us: {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 bg-transparent border-2 border-[#C1272D] text-[#C1272D] hover:bg-[#C1272D]/10 font-body font-medium rounded-full transition-colors duration-200"
              >
                Visit Our Location
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
