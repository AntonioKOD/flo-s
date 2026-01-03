'use client'

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Catering", link: "/catering" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <Navbar>
      {/* Desktop navbar */}
      <NavBody>
        {/* left: logo */}
        <NavbarLogo />

        {/* center: links */}
        <NavItems items={navItems} />

        {/* right: CTA button */}
        <div className="relative z-20 flex items-center gap-2">
        <Link href="https://flospizza.kwickmenu.com">
          <NavbarButton variant="primary" href="#order">
            Order Online
          </NavbarButton>
          </Link>
        </div>
      </NavBody>

      {/* Mobile navbar */}
      <MobileNav>
        <MobileNavHeader>
          {/* left: logo */}
          <NavbarLogo />

          {/* right: toggle */}
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item) => {
            const isExternalLink = item.link.startsWith("http");
            const isHashLink = item.link.startsWith("#");
            const isPageRoute = !isExternalLink && !isHashLink;
            
            if (isPageRoute) {
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 text-base font-medium text-foreground"
                >
                  {item.name}
                </Link>
              );
            }
            
            return (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="w-full py-2 text-base font-medium text-foreground"
              >
                {item.name}
              </a>
            );
          })}
          <Link href="https://flospizza.kwickmenu.com" className="mt-4 w-full">
            <NavbarButton
              variant="primary"
              href="https://flospizza.kwickmenu.com"
              className="w-full"
              as="button"
            >
              Order Online
            </NavbarButton>
          </Link>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}