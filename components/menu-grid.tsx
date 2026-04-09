"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { formatPrice, type MenuItem } from "@/lib/menu-data"
import { useBusiness, useMenu } from "aicms"

const CATEGORIES = ["All", "Appetizers", "Platters", "Brunch"] as const
type Category = (typeof CATEGORIES)[number]

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const BUSINESS = useBusiness()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  const priceDisplay =
    item.prices.length === 1
      ? formatPrice(item.prices[0].amount)
      : item.prices
          .map((p) => (p.label ? `${p.label} ${formatPrice(p.amount)}` : formatPrice(p.amount)))
          .join(" \u00B7 ")

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] overflow-hidden group"
    >
      {/* Placeholder / color area */}
      <div className="h-[140px] w-full bg-gradient-to-br from-[#C1272D]/8 to-[#214A32]/8 flex items-center justify-center relative">
        <span className="text-4xl">
          {item.category === "Brunch" ? "🥞" : item.category === "Platters" ? "🍽️" : "🍕"}
        </span>
        {item.popular && (
          <span className="absolute top-3 right-3 bg-[#C1272D] text-white text-xs font-body font-bold px-3 py-1 rounded-full">
            Best Seller
          </span>
        )}
        {/* Hover overlay */}
        <a
          href={BUSINESS.urls?.orderOnline ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-[#C1272D]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="text-white font-body font-semibold text-sm">
            Order This &rarr;
          </span>
        </a>
      </div>

      <div className="p-5">
        <h3 className="font-display text-foreground text-lg mb-1">{item.name}</h3>
        {item.description && (
          <p className="font-body text-muted-foreground text-sm mb-3 line-clamp-2">
            {item.description}
          </p>
        )}
        {!item.description && <div className="mb-3" />}
        <div className="flex items-center justify-between">
          <span className="font-display text-[#C1272D] text-xl">{priceDisplay}</span>
          {/* Mobile order link */}
          <a
            href={BUSINESS.urls?.orderOnline ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden text-[#C1272D] font-body font-semibold text-sm"
          >
            Order &rarr;
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function MenuGrid() {
  const BUSINESS = useBusiness()
  const { items: MENU_ITEMS } = useMenu()
  const [active, setActive] = useState<Category>("All")

  const filtered = active === "All" ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.category === active)

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2.5 rounded-full font-body font-medium text-sm transition-colors ${
              active === cat
                ? "bg-[#C1272D] text-white"
                : "bg-white text-muted-foreground border border-gray-200 hover:border-[#C1272D] hover:text-[#C1272D]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <MenuCard key={item.name} item={item} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
