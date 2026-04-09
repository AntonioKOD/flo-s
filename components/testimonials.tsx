"use client"

import { Star } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "motion/react"

const testimonials = [
  {
    quote:
      "Flo's Pizza sets the gold standard for neighborhood pizza. The hand-tossed crust is perfect every time, and the fresh ingredients make all the difference. Best pizza in Brockton!",
    name: "Sarah M.",
    role: "Brockton Resident",
    initials: "SM",
  },
  {
    quote:
      "Best catering we've ever had! We ordered platters for our company event and everything was fresh and delicious. The chicken broccoli ziti was a huge hit with everyone.",
    name: "Mike R.",
    role: "Regular Customer",
    initials: "MR",
  },
  {
    quote:
      "Their breakfast menu is incredible! The brioche french toast with fresh berries is a must-try. We come here every Sunday morning — it's become our family tradition.",
    name: "Jessica T.",
    role: "Food Enthusiast",
    initials: "JT",
  },
]

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-16 h-16 rounded-full bg-[#C1272D] flex items-center justify-center shrink-0">
      <span className="font-body font-bold text-white text-lg">{initials}</span>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="bg-[#fafafa] py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-[1240px]">
        <div className="flex flex-col items-center gap-6 mb-10 text-center">
          <h2 className="font-display text-[#C1272D] text-4xl md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Join hundreds of satisfied customers who love Flo&apos;s Pizza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-2xl shadow-[0px_5px_10px_0px_rgba(0,0,0,0.1)] p-8 flex flex-col gap-6"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="font-body text-muted-foreground text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <Avatar initials={t.initials} />
                <div>
                  <p className="font-display text-foreground text-lg">{t.name}</p>
                  <p className="font-body text-muted-foreground text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
