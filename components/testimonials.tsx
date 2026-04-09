"use client"

import { Star } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "motion/react"

/** Quotes sourced from public Google Maps reviews (Flo's Pizza & Roast Beef, Brockton). */
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Flo%27s+Pizza+%26+Roast+Beef/@42.0867749,-70.9882542,17z/data=!3m1!4b1!4m6!3m5!1s0x89e49bcc65a54ad9:0x97346ffc1ffd176d!8m2!3d42.0867749!4d-70.9882542!16s%2Fg%2F11h3ld_gf1"

const testimonials = [
  {
    quote:
      "Just had a delicious Italian calzone with banana peppers, and pepperoni.",
    name: "Dylan N.",
    role: "Google review · Brockton",
    initials: "DN",
  },
  {
    quote: "Great food, great service, and a cozy vibe.",
    name: "Erik W.",
    role: "Google review · Brockton",
    initials: "EW",
  },
  {
    quote:
      "Nice, to be served by people who care about what they give their customers.",
    name: "Rita G.",
    role: "Google review · Brockton",
    initials: "RG",
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
          <p className="font-body text-muted-foreground text-lg max-w-2xl">
            Real feedback from Google reviews —{" "}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C1272D] underline underline-offset-2 hover:opacity-90"
            >
              read more on Google Maps
            </a>
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
