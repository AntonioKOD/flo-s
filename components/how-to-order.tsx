"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { useBusiness } from "aicms"

const steps = [{number:"1",title:"Browse Menu",description:"Explore our full menu online and choose from our handcrafted pizzas, catering platters, and breakfast items"},{number:"2",title:"Customize",description:"Add extra toppings, choose your size, and make it exactly how you like it"},{number:"3",title:"Place Order",description:"Secure online checkout or call us directly. We accept all major cards and cash"},{number:"4",title:"Enjoy!",description:"Pick up at the store or get it delivered fresh and hot — ready when you are"}]

function StepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div ref={ref} className="relative" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}>
      <div className="w-10 h-10 rounded-full bg-[#C1272D] flex items-center justify-center shadow-md mb-5"><span className="font-body font-bold text-white text-lg">{step.number}</span></div>
      <div className="bg-white rounded-2xl shadow-[0px_5px_10px_0px_rgba(0,0,0,0.1)] p-6 h-[160px] flex flex-col justify-center"><h3 className="font-display text-foreground text-lg mb-3">{step.title}</h3><p className="font-body text-muted-foreground text-sm leading-5">{step.description}</p></div>
    </motion.div>
  )
}

export default function HowToOrder() {
  const biz = useBusiness()
  return (
    <section className="bg-[#fafafa] py-20 px-4">
      <div className="container mx-auto max-w-[1240px]">
        <motion.div className="flex flex-col items-center gap-6 mb-10 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}>
          <h2 className="font-display text-[#C1272D] text-4xl md:text-5xl">Order in 4 Easy Steps</h2>
          <p className="font-body text-muted-foreground text-lg">Four simple steps to get your perfect meal fresh and hot</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">{steps.map((step, i) => (<StepCard key={step.number} step={step} index={i} />))}</div>
        <motion.div className="flex justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
          <a href={biz.urls?.orderOnline ?? "#"} target="_blank" rel="noopener noreferrer" className="bg-[#C1272D] text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-[#a01f25] transition-colors">Start Your Order</a>
        </motion.div>
      </div>
    </section>
  )
}
