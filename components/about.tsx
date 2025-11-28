export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              A Legacy of Excellence
            </h2>

            <div className="space-y-4 text-slate-300">
              <p>
                Since 1995, राजस्थानी होटल भीलवाड़ा has been the premier destination for authentic Rajasthani cuisine. Our
                commitment to preserving traditional flavors while embracing modern culinary techniques has earned us
                recognition across the region.
              </p>
              <p>
                Every dish is a testament to our heritage, prepared with the finest ingredients and age-old recipes
                passed down through generations of Rajasthani master chefs.
              </p>
              <p className="text-amber-300 font-semibold">
                We also offer premium rooms for guests seeking an authentic Rajasthani hospitality experience.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">30+</div>
                <p className="text-slate-400 text-sm">Years of Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">100%</div>
                <p className="text-slate-400 text-sm">Authentic Recipes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">5★</div>
                <p className="text-slate-400 text-sm">Guest Rated</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right">
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyf9aCYxCQ7mrXeztS66IfJqiqW2dDPLpdPGRjqnCDOJbHcvLafkSIJQCM9PCLUhVOTbP5SwPZSIVa3bLUVK0cgHXfUXi50yX8BmIT8kiqb4AA7fg1Dhy9kCy-0fU2qVL9n_3U=s1360-w1360-h1020-rw"
              alt="Restaurant ambiance"
              className="rounded-lg shadow-2xl shadow-slate-900/50 hover:shadow-amber-600/20 transition-shadow duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
