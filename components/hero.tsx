export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyhKq_kBvDPwzktIKi8fYuLLaLQAv0pwvJQrhOFfHYn2tYLRLsIi8qA3yUP-klLvMXoGhid4tbgDH7Ju78_0_akl0AyAKm9ftj1_nAXe0xp-vqnkL0ocKjAve-LLQDKcaYSNXtsEg=s1360-w1360-h1020-rw)",
          filter: "brightness(0.4)",
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4 z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1
            className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Experience
            <span className="block text-amber-400">Authentic Luxury</span>
          </h1>

          <p className="text-xl md:text-2xl text-amber-100/80 mb-8 leading-relaxed">
            Discover the timeless flavors of Rajasthan in an atmosphere of elegance and sophistication
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/50 transform hover:scale-105">
              Reserve Now
            </button>
            <button className="px-8 py-3 border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 font-bold rounded-full transition-all duration-300">
              Explore Menu
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
