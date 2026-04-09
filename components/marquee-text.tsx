"use client"

type MarqueeVariant = "dark" | "red" | "cream"

const variantStyles: Record<MarqueeVariant, { bg: string; text: string; separator: string }> = {
  dark: { bg: "bg-[#1C1C1C]", text: "text-white", separator: "text-[#C1272D]" },
  red: { bg: "bg-[#C1272D]", text: "text-[#FFF5E1]", separator: "text-[#214A32]" },
  cream: { bg: "bg-[#FFF5E1]", text: "text-[#1C1C1C]", separator: "text-[#C1272D]" },
}

export default function MarqueeText({
  texts,
  variant = "dark",
  speed = "normal",
}: {
  texts: string[]
  variant?: MarqueeVariant
  speed?: "normal" | "slow"
}) {
  const styles = variantStyles[variant]
  const animClass = speed === "slow" ? "animate-marquee-slow" : "animate-marquee"

  const content = texts.map((t, i) => (
    <span key={i} className="flex items-center gap-6 mx-6">
      <span className={`${styles.separator} text-lg`}>{"\u2605"}</span>
      <span className="whitespace-nowrap font-display text-sm md:text-base uppercase tracking-widest">
        {t}
      </span>
    </span>
  ))

  return (
    <div className={`${styles.bg} ${styles.text} py-3 overflow-hidden select-none`}>
      <div className={`flex ${animClass}`} style={{ width: "max-content" }}>
        <div className="flex">{content}</div>
        <div className="flex">{content}</div>
      </div>
    </div>
  )
}
