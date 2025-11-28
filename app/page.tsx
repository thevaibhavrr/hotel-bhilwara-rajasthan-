"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Gallery from "@/components/gallery"
import About from "@/components/about"
import Chef from "@/components/chef"
import Cuisine from "@/components/cuisine"
import Experience from "@/components/experience"
import Location from "@/components/location"
import Footer from "@/components/footer"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-slate-950 overflow-x-hidden">
      <Header scrolled={scrolled} />
      <Hero />
      <Gallery />
      <About />
      <Chef />
      <Cuisine />
      <Experience />
      <Location />
      <Footer />
    </main>
  )
}
