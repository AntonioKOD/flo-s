"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { BUSINESS } from "@/lib/constants"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setIsLoading(true)
    setError("")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Something went wrong")
      setSubmitted(true)
      setEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-[#fafafa] py-20 px-4">
      <div className="container mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-[#C1272D] text-4xl md:text-5xl leading-tight">
              Stay in the Loop
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Get exclusive deals, new menu updates, and special offers delivered
              straight to your inbox. Be the first to know about our weekly specials!
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col gap-4"
              >
                <p className="font-body font-semibold text-foreground text-lg">
                  Welcome to the Flo&apos;s Pizza family!
                </p>
                <div className="flex items-start gap-3 bg-[#C1272D]/5 border border-[#C1272D]/20 rounded-2xl px-6 py-5">
                  <span className="text-2xl">📬</span>
                  <div>
                    <p className="font-body font-semibold text-[#C1272D] text-base">
                      Check your email for your exclusive discount code!
                    </p>
                    <p className="font-body text-muted-foreground text-sm mt-1">
                      We sent a unique <span className="font-bold">10% OFF</span> code to your
                      inbox. Use it at checkout on our{" "}
                      <a
                        href={BUSINESS.urls.orderOnline}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C1272D] underline underline-offset-2"
                      >
                        online ordering
                      </a>{" "}
                      platform.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={isLoading}
                    className="flex-1 border border-gray-300 rounded-full px-6 py-4 font-body text-base text-foreground placeholder-gray-400 focus:outline-none focus:border-[#C1272D] bg-white disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#C1272D] text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-[#a01f25] transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
                {error && <p className="font-body text-red-600 text-sm">{error}</p>}
              </form>
            )}

            {!submitted && (
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["JK", "ML", "RP"].map((init) => (
                    <div
                      key={init}
                      className="w-8 h-8 rounded-full bg-[#C1272D] border-2 border-white flex items-center justify-center"
                    >
                      <span className="font-body font-bold text-white text-[10px]">{init}</span>
                    </div>
                  ))}
                </div>
                <p className="font-body text-muted-foreground text-sm">
                  Join 500+ pizza lovers who never miss a deal
                </p>
              </div>
            )}
          </motion.div>

          <motion.div
            className="h-[350px] md:h-[420px] rounded-2xl shadow-[0px_5px_10px_0px_rgba(0,0,0,0.1)] bg-gradient-to-br from-[#C1272D]/20 to-[#214A32]/20 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[100px]">🍕</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
