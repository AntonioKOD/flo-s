"use client"

import { ShoppingCart, Star } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { formatPrice } from "@/lib/menu-data"
import { useBusiness, useMenu, type MenuItem } from "aicms"

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
          />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">({reviews})</span>
    </div>
  )
}

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const BUSINESS = useBusiness()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl shadow-[0px_5px_10px_0px_rgba(0,0,0,0.1)] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Placeholder image area */}
      <div className="h-[180px] w-full bg-gradient-to-br from-[#C1272D]/10 to-[#214A32]/10 flex items-center justify-center">
        <span className="text-5xl">🍕</span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-foreground text-xl mb-2">{item.name}</h3>
        <StarRating rating={5} reviews={Math.floor(Math.random() * 40 + 20)} />
        {item.description && (
          <p className="font-body text-muted-foreground text-sm mt-3 mb-4 line-clamp-2">
            {item.description}
          </p>
        )}
        {!item.description && <div className="mt-3 mb-4" />}
        <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
          <span className="font-display text-[#C1272D] text-2xl">
            {item.prices.length === 1
              ? formatPrice(item.prices[0].amount)
              : item.prices.map((p: { label?: string; amount: number }) => (p.label ? `${p.label} ${formatPrice(p.amount)}` : formatPrice(p.amount))).join(" · ")}
          </span>
          <a
            href={BUSINESS.urls?.orderOnline ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-[#C1272D] transition-colors"
            aria-label={`Order ${item.name}`}
          >
            <ShoppingCart className="w-6 h-6 text-[#C1272D]" />
          </a>
        </div>
        {item.popular && (
          <span className="inline-block mt-3 text-xs font-body font-semibold bg-[#C1272D]/10 text-[#C1272D] px-3 py-1 rounded-full">
            Best Seller
          </span>
        )}
      </div>
    </motion.div>
  )
}

export default function MenuSection() {
  const BUSINESS = useBusiness()
  const { items } = useMenu()
  const FEATURED_ITEMS = items.filter((i) => i.popular)
  return (
    <section className="bg-[#fafafa] py-20 px-4">
      <div className="container mx-auto max-w-[1240px]">
        <motion.div
          className="flex flex-col items-center gap-6 mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-display text-[#C1272D] text-4xl md:text-5xl">Our Menu</h2>
          <p className="font-body text-muted-foreground text-lg">
            Discover our most beloved dishes, crafted with passion and perfection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {FEATURED_ITEMS.map((item, i) => (
            <MenuCard key={item.name} item={item} index={i} />
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href={BUSINESS.urls?.orderOnline ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C1272D] text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-[#a01f25] transition-colors"
          >
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  )
}
