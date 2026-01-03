"use client"

import React from "react"
import { motion } from "motion/react"
import Link from "next/link"

type Price = {
  label?: string // e.g. "Sm", "Lg", "Feeds 20–25", etc.
  amount: number
}

type MenuItem = {
  name: string
  description?: string
  prices: Price[]
  note?: string
}

type MenuSection = {
  title: string
  subtitle?: string
  items: MenuItem[]
}

const cateringSections: MenuSection[] = [
  {
    title: "Appetizers",
    subtitle: "",
    items: [
      {
        name: "Chicken Tenders",
        prices: [ { label: "Sm", amount: 60}, { label: "Lg", amount: 110}],
      },
      {
        name: "Chicken Wings",
        prices: [ { label: "Sm", amount: 60}, { label: "Lg", amount: 110}],
      },
      {
        name: "Kebab Chicken Skewers",
        prices: [{ amount: 100 }],
      },
      {
        name: "Steak and Cheese Sub Rolls",
        prices: [{ amount: 115 }],
      },
      {
        name: "Steak Tip Skewers",
        prices: [{ amount: 150 }],
      },
      {
        name: "Cheeseburger Sliders",
        prices: [{ amount: 125 }],
      },
      {
        name: "Roast Beef Sliders",
        description: "Variety of BBQ, cheese, and mayo",
        prices: [{ amount: 150 }],
      },
      {
        name: "Lobster Rangoon",
        prices: [{ amount: 90 }],
      },
      {
        name: "Shrimp Cocktail",
        prices: [{ amount: 95 }],
      },
      {
        name: "Tuna Salad Sliders or Wraps",
        prices: [{ amount: 115 }],
      },
      {
        name: "Cheese Pizza",
        prices: [{ amount: 16.49 }],
      },
      {
        name: "Pizza with One Topping",
        prices: [{ amount: 19.49 }],
      },
      {
        name: "Pizza with Two Toppings",
        prices: [{ amount: 22.49 }],
      },
      {
        name: "Flo's Special Pizza",
        prices: [{ amount: 24.99 }],
      },
      {
        name: "Special Pizzas",
        description: "Veggie, Margherita, Chicken Bacon Ranch, Hawaiian, Chicken Broccoli, BBQ Chicken, Buffalo Chicken, Greek, MeatLovers,",
        prices: [{ amount: 23.99 }],
      },
    ],
  },
  {
    title: "Platters and Trays",
    subtitle: "Feeds 20–25 people",
    items: [
      { name: "Fruit Platter", prices: [{ amount: 115 }] },
      { name: "Hummus Platter", prices: [{ amount: 110 }] },
      { name: "Cheese and Fruit", prices: [{ amount: 140 }] },
      {
        name: "Charcuterie and Artisan Cheeses",
        prices: [{ amount: 180 }],
      },
      {
        name: "Choice of Salad – Caesar",
        prices: [{ amount: 85 }],
      },
      {
        name: "Choice of Salad – Greek, House",
        prices: [{ amount: 90 }],
      },
      { name: "Chicken Broccoli Ziti", prices: [{ amount: 140 }], description: "Homemade Alfredo Sauce" },
      { name: "Fried Haddock", prices: [{ amount: 240 }]},
      { name: "Fried Shrimp", prices: [{amount: 120}], description: "40/50 pieces per platter"},
      { name: "Garlic Mashed Potatoes", prices: [{ amount: 120 }] },
      {
        name: "Chicken Parmigiana Ziti",
        prices: [{ amount: 140 }],
      },
      {
        name: "Spaghetti and Meatballs",
        prices: [{ amount: 140 }],
      },
      {
        name: "Steak Tips",
        prices: [{amount: 320 }],
      },
      {
        name: "Grilled Chicken",
        prices: [{ amount: 200 }],
      },
    ],
  },
  {
    title: "Brunch Catering Menu",
    items: [
      {
        name: "Breakfast Potatoes with Peppers & Onions",
        prices: [{ amount: 100 }],
      },
      {
        name: "Fruit Platter",
        prices: [{ amount: 80 }],
      },
      {
        name: "Scramble Eggs",
        prices: [{ amount: 150 }],
      },
      {
        name: "Veggie Omelette",
        prices: [{label: "Dozen", amount: 95 }],
      },
      {
        name: "Omelette",
        description: "Choice of Bacon, Ham, Sausage",
        prices: [{label: "Dozen", amount: 105 }],
      },
      {
        name: "Bacon",
        prices: [
          { label: "Sm", amount: 75 },
          { label: "Lg", amount: 140 },
        ],
      },
      {
        name: "Sausages",
        prices: [
          { label: "Sm", amount: 75 },
          { label: "Lg", amount: 140 },
        ],
      },
      {
        name: "Pancakes",
        description: "With fresh berries, butter, maple syrup",
        prices: [{ amount: 100 }],
      },
      {
        name: "Brioche French Toast",
        description: "With fresh berries, butter, maple syrup",
        prices: [{ amount: 110 }],
      },
      {
        name: "Toast",
        description:
          "White, Wheat, English Muffin, Biscuit, Bagel, Croissant",
        prices: [{ amount: 50 }],
      },
    ],
  },
]

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Catering <span className="text-[#C1272D]">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Make your event memorable with Flo&apos;s Pizza catering. From corporate events to family gatherings, we bring fresh, delicious food to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="w-full py-8 md:py-12 px-4 sm:px-6 md:px-16 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">
          {cateringSections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-foreground mb-2">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-sm md:text-base text-muted-foreground">
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
                      <div className="flex-1">
                        <span className="font-medium text-foreground text-base md:text-lg">
                          {item.name}
                        </span>
                      </div>
                      <div className="text-right whitespace-nowrap">
                        <span className="text-foreground font-semibold text-base md:text-lg">
                          {item.prices.length === 0
                            ? item.note ?? ""
                            : item.prices
                                .map((p) =>
                                  p.label
                                    ? `${p.label} ${formatPrice(p.amount)}`
                                    : formatPrice(p.amount)
                                )
                                .join(" · ")}
                        </span>
                      </div>
                    </div>

                    {item.description && (
                      <p className="text-sm md:text-base text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    )}

                    {item.note && item.prices.length > 0 && (
                      <p className="text-xs md:text-sm text-muted-foreground mt-1 italic">
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Plan Your Event?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact us to discuss your catering needs. We&apos;re here to make your event a success!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+17744805155"
                className="px-6 py-3 bg-[#C1272D] hover:bg-[#a01f25] text-white font-medium rounded-lg transition-colors duration-200"
              >
                Call Us: (774) 480-5155
              </a>
              <Link
                href="/#contact"
                className="px-6 py-3 bg-transparent border-2 border-[#C1272D] text-[#C1272D] hover:bg-[#C1272D]/10 font-medium rounded-lg transition-colors duration-200"
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

