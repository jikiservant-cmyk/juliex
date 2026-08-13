"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { JuliexLogo } from "@/components/JuliexLogo"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Properties", href: "/events" },
  { name: "Services", href: "/agents" },
  { name: "Blog", href: "/news" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full fixed top-0 left-0 right-0 h-[78px] z-[1000] flex items-center bg-[#fbfaf7f0] backdrop-blur-[14px] border-b border-black/5">
      <nav className="w-[min(1240px,calc(100%-40px))] mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <JuliexLogo showText={true} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-[34px]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[13px] text-[#555b55] transition-colors duration-250 hover:text-juliex-green",
                pathname === link.href && "text-juliex-green font-medium"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-[22px]">
          <a 
            href="tel:+256752461111" 
            className="hidden md:flex items-center gap-[7px] text-[12px] font-semibold text-juliex-text"
          >
            <span className="text-sm">☎</span>
            +256 752 461111
          </a>

          <a 
            href="/contact"
            className="hidden sm:inline-flex px-5 py-3 bg-juliex-green text-white rounded-[5px] text-[12px] font-semibold transition-all duration-250 hover:bg-juliex-green-light hover:-translate-y-[1px]"
          >
            List Your Land
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-juliex-green hover:opacity-70 text-[25px]"
          >
            {isOpen ? <X className="h-7 w-7" /> : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Links */}
      {isOpen && (
        <div className="lg:hidden fixed top-[78px] left-0 right-0 bg-[#fbfaf7] border-t border-black/5 px-5 py-[25px] flex flex-col gap-[18px] shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "block text-[15px] font-medium transition-colors",
                pathname === link.href ? "text-juliex-green" : "text-[#555b55] hover:text-juliex-green"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-black/5 flex flex-col gap-4">
            <a 
              href="tel:+256752461111" 
              className="flex items-center justify-center gap-2 text-[14px] font-semibold text-juliex-text py-2"
            >
              <span>☎</span> +256 752 461111
            </a>
            <a 
              href="/contact"
              className="flex items-center justify-center px-5 py-3 bg-juliex-green text-white rounded-[5px] text-[13px] font-semibold"
            >
              List Your Land
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
