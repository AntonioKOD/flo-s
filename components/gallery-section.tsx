"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  { src: "/delicious-breakfast-with-coffee-orange-juice-waffles-croissants-jam-nut-paste-light-top-view.jpg", alt: "Fresh breakfast spread with coffee and waffles" },
  { src: "/edward-nguyen-Ma_tUpJHb2M-unsplash.jpg", alt: "Artisan coffee and pastries" },
  { src: "/homemade-fried-eggs-salad-bacon-plate-front-coffee-cup.jpg", alt: "Homemade fried eggs with bacon and salad" },
  { src: "/pablo-pacheco-D3Mag4BKqns-unsplash.jpg", alt: "Fresh eggs benedict" },
  { src: "/hero_image.png", alt: "Flo's signature pizza" },
]

export default function GallerySection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? galleryImages.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === galleryImages.length - 1 ? 0 : c + 1))

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 mb-10 text-center">
          <h2 className="font-display text-[#C1272D] text-4xl md:text-5xl">Our Gallery</h2>
          <p className="font-body text-muted-foreground text-lg">
            A taste of what awaits you at Flo&apos;s Pizza
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-2xl shadow-lg relative">
            <div className="relative w-full h-80 md:h-[500px]">
              <Image
                src={galleryImages[current].src}
                alt={galleryImages[current].alt}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              />
            </div>

            {/* Navigation */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center mt-4 gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === current ? "bg-[#C1272D]" : "bg-gray-300"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
