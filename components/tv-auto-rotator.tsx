"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter, usePathname } from "next/navigation"

const TV_ROUTES = [
  "/tv/pizza",
  "/tv/wings",
  "/tv/subs",
  "/tv/appetizers",
  "/tv/platters",
  "/tv/brunch",
]
const INTERVAL_MS = 15_000

export default function TVAutoRotator() {
  const router = useRouter()
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)

  const currentIndex = TV_ROUTES.indexOf(pathname)
  const isActive = currentIndex !== -1

  const goNext = useCallback(() => {
    if (!isActive) return
    const next = (currentIndex + 1) % TV_ROUTES.length
    router.push(TV_ROUTES[next])
    setProgress(0)
  }, [isActive, currentIndex, router])

  useEffect(() => {
    if (!isActive) return

    setProgress(0)
    const start = Date.now()

    const frame = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min((elapsed / INTERVAL_MS) * 100, 100)
      setProgress(pct)
      if (pct >= 100) {
        clearInterval(frame)
        goNext()
      }
    }, 50)

    return () => clearInterval(frame)
  }, [pathname, isActive, goNext])

  if (!isActive) return null

  const screenNum = currentIndex + 1
  const totalScreens = TV_ROUTES.length

  return (
    <>
      {/* Progress bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "4px",
          background: "#E4E2DD",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "#C1272D",
            transition: "width 50ms linear",
          }}
        />
      </div>

      {/* Screen counter */}
      <div
        style={{
          position: "fixed",
          top: "1.5vh",
          right: "1.5vw",
          background: "rgba(28,28,28,0.65)",
          color: "#FFF5E1",
          borderRadius: "6px",
          padding: "0.3em 0.75em",
          fontSize: "clamp(0.6rem, 0.8vw, 0.9rem)",
          fontWeight: 600,
          letterSpacing: "0.05em",
          zIndex: 9998,
          backdropFilter: "blur(4px)",
        }}
      >
        {screenNum} / {totalScreens}
      </div>
    </>
  )
}
