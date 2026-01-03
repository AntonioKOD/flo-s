"use client"

import { TextRotate } from "./ui/text-rotate"
import { motion } from "motion/react"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Mobile layout */}
      <div className="flex flex-col items-center justify-start pt-12 pb-6 px-3 md:hidden">
        {/* Top - Freshly TextRotate */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="flex flex-col items-center gap-2 text-2xl font-bold text-foreground">
            <span>Freshly</span>
            <span className="inline-block overflow-hidden rounded-lg bg-[#C1272D] px-3 py-1.5 shadow-lg">
              <TextRotate
                texts={["made!", "baked!", "served!", "delivered!"]}
                mainClassName="inline-flex text-white"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </h1>
        </motion.div>

        {/* Middle - Pizza with text on both sides */}
        <motion.div
          className="relative flex items-center justify-center w-full gap-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-col justify-center gap-4 text-right">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground leading-tight">
              Fresh
              <br />
              <span className="text-xs font-medium text-foreground">Ingredients</span>
            </p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground leading-tight">
              Hand
              <br />
              <span className="text-xs font-medium text-foreground">Crafted</span>
            </p>
          </div>

          <div className="relative w-[250px] h-[250px] flex-shrink-0">
            <Image src="/hero_image.png" alt="Flo's Pizza" fill className="object-contain" priority />
          </div>

          <div className="flex flex-col justify-center gap-4 text-left">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground leading-tight">
              Stone
              <br />
              <span className="text-xs font-medium text-foreground">Baked</span>
            </p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground leading-tight">
              Authentic
              <br />
              <span className="text-xs font-medium text-foreground">Taste</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-3 w-full max-w-[280px] mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="https://flospizza.kwickmenu.com" className="flex-1">
            <Button size="sm" className="w-full bg-[#C1272D] hover:bg-[#a02025] text-white text-sm font-medium">
              Order Now
            </Button>
          </Link>
          <Link href="https://flospizza.kwickmenu.com" className="flex-1">
            <Button
              size="sm"
              variant="outline"
              className="w-full border-[#C1272D] text-[#C1272D] hover:bg-[#C1272D]/10 text-sm font-medium bg-transparent"
            >
              View Menu
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Desktop layout - unchanged */}
      <div className="hidden md:flex flex-row items-center justify-between min-h-screen p-16 lg:p-20">
        {/* Text Content - Left Side */}
        <div className="relative z-10 w-1/2 pl-8 lg:pl-12">
          <motion.h1
            className="flex items-center gap-4 lg:gap-5 text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block">Freshly</span>
            <span className="inline-block overflow-hidden rounded-lg bg-[#C1272D] px-5 lg:px-6 py-2.5 lg:py-3 shadow-lg">
              <TextRotate
                texts={["made!", "baked!", "served!", "delivered!"]}
                mainClassName="inline-flex text-white"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </motion.h1>
        </div>

        {/* Pizza Image - Right Side */}
        <motion.div
          className="relative w-1/2 pr-8 lg:pr-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] ml-auto">
            <Image
              src="/hero_image.png"
              alt="Flo's Pizza"
              fill
              className="object-contain scale-150 lg:scale-[1.75] translate-x-20 translate-y-10"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

