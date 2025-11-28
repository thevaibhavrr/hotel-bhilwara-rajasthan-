"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header({ scrolled }: { scrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-slate-900/20 border-b border-amber-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4 animate-fade-in">
          <img
            src="https://i.ibb.co/nNWCW499/Screenshot-2025-11-26-at-11-08-02-PM.png"
            alt="Hotel Bhilwara"
            className="h-16 w-16 rounded-full ring-2 ring-amber-600/50"
          />
          <div>
            <h1 className="text-2xl font-bold text-amber-400" style={{ fontFamily: "Playfair Display, serif" }}>
              राजस्थानी होटल भीलवाड़ा
            </h1>
            <p className="text-sm text-amber-200/60">Authentic Rajasthani Cuisine & Rooms</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {["Home", "About", "Menu", "Gallery", "Location"].map((item, i) => (
            <Link
              key={i}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-slate-100 hover:text-amber-400 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <button
          onClick={() => (window.location.href = "tel:7909921367")}
          className="hidden md:block px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/50 relative overflow-hidden group"
        >
          <span className="relative z-10">Order Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-amber-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-lg border-t border-amber-900/20 p-4 animate-fade-in-up">
          <nav className="flex flex-col gap-4">
            {["Home", "About", "Menu", "Gallery", "Location"].map((item, i) => (
              <Link
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-slate-100 hover:text-amber-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
