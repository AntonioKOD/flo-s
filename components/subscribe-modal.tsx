"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import { BUSINESS } from "@/lib/constants"

const COOKIE_NAME = "flos_subscribed"

function hasSubscribedCookie() {
  return document.cookie.split(";").some((c) => c.trim().startsWith(`${COOKIE_NAME}=`))
}

export default function SubscribeModal() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Modal disabled for now
    return
  }, [])

  function dismiss() {
    sessionStorage.setItem("flos_modal_dismissed", "1")
    setOpen(false)
  }

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
      if (!res.ok) throw new Error(data.error ?? "Something went wrong")
      setSubmitted(true)
      setEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md pointer-events-auto overflow-hidden"
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className="bg-[#C1272D] px-8 py-6">
                <button
                  onClick={dismiss}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <p className="font-body text-white/80 text-xs tracking-widest uppercase mb-1">
                  Exclusive offer
                </p>
                <h2 className="font-display text-white text-3xl leading-tight">
                  Get 10% OFF
                  <br />
                  Your Next Order
                </h2>
              </div>

              {/* Body */}
              <div className="px-8 py-7">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex items-start gap-3 bg-[#C1272D]/5 border border-[#C1272D]/20 rounded-2xl px-5 py-4">
                      <span className="text-2xl">📬</span>
                      <div>
                        <p className="font-body font-semibold text-[#C1272D] text-base">
                          Check your email!
                        </p>
                        <p className="font-body text-muted-foreground text-sm mt-1">
                          Your unique 10% OFF code is on its way. Use it at checkout on our{" "}
                          <a
                            href={BUSINESS.urls?.orderOnline ?? "#"}
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
                    <button
                      onClick={dismiss}
                      className="w-full font-body font-semibold text-[#C1272D] text-sm py-3 rounded-full border border-[#C1272D] hover:bg-[#C1272D]/5 transition-colors"
                    >
                      Start Ordering
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                      Subscribe to our list and receive an exclusive promo code straight to your
                      inbox. One per customer.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        disabled={isLoading}
                        className="w-full border border-gray-300 rounded-full px-5 py-3.5 font-body text-sm text-foreground placeholder-gray-400 focus:outline-none focus:border-[#C1272D] bg-white disabled:opacity-60"
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#C1272D] text-white font-body font-semibold py-3.5 rounded-full hover:bg-[#a01f25] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isLoading ? "Sending..." : "Get My 10% OFF Code"}
                      </button>
                      {error && (
                        <p className="font-body text-red-600 text-xs text-center">{error}</p>
                      )}
                    </form>

                    <p className="font-body text-gray-400 text-xs text-center mt-4">
                      One code per email address. No spam, ever.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
