export default function Chef() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Chef Image */}
          <div className="animate-scale-in order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-600/20 to-amber-900/20 rounded-lg blur-xl" />
              <img
                src="https://i.ibb.co/qLYS7Pdz/Gemini-Generated-Image-cu2yyxcu2yyxcu2y.png"
                alt="Master Chef"
                className="relative rounded-lg shadow-2xl shadow-slate-900/50"
              />
            </div>
          </div>

          {/* Chef Info */}
          <div className="animate-fade-in-up order-1 md:order-2">
            <p className="text-amber-400 font-semibold mb-2">MEET OUR MASTER</p>
            <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Custodian of Tradition
            </h2>

            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Our Head Chef brings decades of expertise in traditional Rajasthani cooking. With a passion for authentic
              flavors and a commitment to quality, every dish is crafted to perfection.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Master of Traditional Rajasthani Cuisine",
                "Award-Winning Culinary Expertise",
                "Premium Ingredient Selection",
                "Heritage Recipe Preservation",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <span className="w-2 h-2 bg-amber-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/50">
              Book a Special Tasting
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
