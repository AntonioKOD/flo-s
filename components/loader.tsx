"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"

export default function Loader() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("flos_loaded")) return
    setShow(true)
    const timer = setTimeout(() => {
      setShow(false)
      sessionStorage.setItem("flos_loaded", "1")
    }, 2400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#C1272D] flex flex-col items-center justify-center"
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: "top" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/flospizza.png"
              alt="Flo's Pizza"
              width={150}
              height={150}
              priority
              className="drop-shadow-2xl"
            />
          </motion.div>
          <motion.p
            className="font-body text-white/70 text-lg tracking-widest uppercase mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Brockton, MA
          </motion.p>

          {/* Progress bar */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
