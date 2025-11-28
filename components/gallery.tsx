"use client"

import { useState, useEffect } from "react"

const images = [
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyhKq_kBvDPwzktIKi8fYuLLaLQAv0pwvJQrhOFfHYn2tYLRLsIi8qA3yUP-klLvMXoGhid4tbgDH7Ju78_0_akl0AyAKm9ftj1_nAXe0xp-vqnkL0ocKjAve-LLQDKcaYSNXtsEg=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwibzk826ivzH5g3PBPs_CvsVOWeuJZtb24pvWueA27fjb0sOP0LhouqX5v_ApOoxKPSxyUdNN_XRb-_93yWgjL1GmvTcngmFsX_mOssFpAqqxXQUJ2sJi7vlxIQV9f4wQkfWnDpA=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyf9aCYxCQ7mrXeztS66IfJqiqW2dDPLpdPGRjqnCDOJbHcvLafkSIJQCM9PCLUhVOTbP5SwPZSIVa3bLUVK0cgHXfUXi50yX8BmIT8kiqb4AA7fg1Dhy9kCy-0fU2qVL9n_3U=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw2tIXbum4EJeObh4wlkEoUuu68SPDmqnjA2JEywSTIjr5oPqr7nYU0HLhGLLwvH8uNimmM1IsLT5tR2ikGZN0CmWKmiP9ITJyAYwy4qCeHHVt_Q3Cj7shBZr0J0gMFnT7cBpRU=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzFmozk3dqF5UKj3hcOnp5R4YI7KH0c38zQ1hX_W1DjXmCD9Q4KpB4l-X9oq9F7gkbvH9gTGGQ1I5cmJPweJgtTJEzW7nWC_oiJeN9YrE08kQnfSllH6fthguB4k03P_y8on2BfzA=s1360-w1360-h1020-rw",
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="gallery" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our Restaurant
          </h2>
          <p className="text-amber-200/70 text-lg">Experience elegance in every moment</p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Main Carousel */}
        <div className="relative rounded-lg overflow-hidden group mb-8">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  idx === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Restaurant view ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 text-amber-400 hover:bg-amber-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 text-amber-400 hover:bg-amber-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            →
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-2 justify-center">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-amber-500 w-8" : "bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
