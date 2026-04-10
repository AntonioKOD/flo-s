"use client"

import Image from "next/image"
import Link from "next/link"
import { BUSINESS } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="py-10 border-t-2 border-gray-200 shadow-lg bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image src="/flospizza.png" alt="Flo's Pizza Logo" width={80} height={80} />
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 text-sm font-semibold font-body">
              <Link href="/" className="hover:text-[#C1272D] transition-colors">
                Home
              </Link>
              <Link href="/menu" className="hover:text-[#C1272D] transition-colors">
                Menu
              </Link>
              <Link href="/about" className="hover:text-[#C1272D] transition-colors">
                About
              </Link>
              <Link href="/catering" className="hover:text-[#C1272D] transition-colors">
                Catering
              </Link>
              <Link href="/contact" className="hover:text-[#C1272D] transition-colors">
                Contact
              </Link>
              <a
                href={BUSINESS.urls?.orderOnline ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C1272D] transition-colors"
              >
                Order Online
              </a>
            </div>
          </div>

          {/* Store Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-display mb-4 text-[#C1272D]">Store Hours</h3>
            <div className="space-y-2 text-sm font-body">
              <div className="flex justify-between md:block">
                <span className="font-semibold">Monday - Sunday:</span>
                <span className="ml-2">{BUSINESS.hours?.weekdays?.display ?? ""}</span>
              </div>
            </div>
          </div>

          {/* Visit Us */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-display mb-4 text-[#C1272D]">Visit Us</h3>
            <div className="space-y-2 text-sm font-body">
              <p className="font-semibold">{BUSINESS.address.street}</p>
              <p>
                {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
              </p>
              <p className="mt-4">
                <a
                  href={BUSINESS.phoneTel ?? "#"}
                  className="font-semibold hover:text-[#C1272D] transition-colors"
                >
                  {BUSINESS.phone}
                </a>
              </p>
              <a
                href={BUSINESS.urls?.googleMaps ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-[#C1272D] hover:underline font-semibold"
              >
                Get Directions &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-sm text-muted-foreground font-body">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. | Made with
            {" \u2764\uFE0F "}by{" "}
            <Link href="https://buildquick.io" className="text-[#C1272D] hover:underline">
              BuildQuick
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
