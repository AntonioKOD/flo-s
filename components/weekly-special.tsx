"use client"

import { useEffect, useState } from "react"
import { useBusiness } from "aicms"

const TARGET_DATE = new Date()
TARGET_DATE.setDate(TARGET_DATE.getDate() + 3)
TARGET_DATE.setHours(23, 59, 59, 0)

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    function tick() {
      const diff = Math.max(0, target.getTime() - Date.now())
      setTimeLeft({ days: Math.floor(diff / (1000 * 60 * 60 * 24)), hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)), seconds: Math.floor((diff % (1000 * 60)) / 1000) })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return timeLeft
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (<div className="flex flex-col items-center gap-1"><span className="font-body font-semibold text-white text-2xl tabular-nums">{String(value).padStart(2, "0")}</span><span className="font-body text-[#d6d6d6] text-xs tracking-widest">{label}</span></div>)
}

export default function WeeklySpecial() {
  const biz = useBusiness()
  const timeLeft = useCountdown(TARGET_DATE)
  return (
    <section className="bg-[#1c1c1c] py-20 px-4">
      <div className="container mx-auto max-w-[1240px]">
        <div className="flex flex-col items-center gap-6 mb-10 text-center">
          <h2 className="font-display text-white text-4xl md:text-5xl">This Week&apos;s Special</h2>
          <p className="font-body text-[#fafafa] text-lg">Limited time offer &mdash; Don&apos;t miss our chef&apos;s signature creation</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative"><div className="w-full h-[400px] md:h-[500px] rounded-2xl bg-gradient-to-br from-[#C1272D]/20 to-[#214A32]/20 flex items-center justify-center"><span className="text-[120px]">🍕</span></div><div className="absolute top-6 right-6 bg-[#C1272D] text-white font-body font-semibold px-6 py-3 rounded-full text-sm shadow-lg">25% OFF</div></div>
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-white text-3xl md:text-4xl leading-tight">Flo&apos;s Special Pizza</h3>
            <p className="font-body text-[#fafafa] text-lg leading-relaxed">Our most celebrated creation featuring premium toppings, fresh mozzarella, roasted garlic, and our signature house-made sauce on our hand-tossed crust baked to golden perfection.</p>
            <div className="bg-[#2b2b2b] border border-[#d6d6d6]/20 rounded-2xl p-6 grid grid-cols-2 gap-3">{["Fresh Mozzarella", "Roasted Garlic", "House-Made Sauce", "Hand-Tossed Crust"].map((ingredient) => (<div key={ingredient} className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#C1272D] shrink-0" /><span className="font-body font-semibold text-white text-sm">{ingredient}</span></div>))}</div>
            <div className="flex items-end gap-3"><span className="font-display text-white text-4xl">$18.74</span><span className="font-display text-[#d6d6d6] text-2xl line-through mb-1">$24.99</span></div>
            <div><p className="font-display text-white text-lg mb-4">Offer Ends In:</p><div className="flex gap-8"><CountdownUnit value={timeLeft.days} label="DAYS" /><CountdownUnit value={timeLeft.hours} label="HOURS" /><CountdownUnit value={timeLeft.minutes} label="MINUTES" /><CountdownUnit value={timeLeft.seconds} label="SECONDS" /></div></div>
            <a href={biz.urls?.orderOnline ?? "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#C1272D] text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-[#a01f25] transition-colors w-full text-center">Get It Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
