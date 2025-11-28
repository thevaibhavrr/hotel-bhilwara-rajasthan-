export default function Experience() {
  const experiences = [
    {
      icon: "🕯️",
      title: "Ambiance",
      desc: "Elegant dining spaces with traditional Rajasthani decor",
    },
    {
      icon: "👨‍🍳",
      title: "Chef Selection",
      desc: "Handpicked master chefs with decades of expertise",
    },
    {
      icon: "🌟",
      title: "Premium Service",
      desc: "Five-star hospitality and personalized attention",
    },
    {
      icon: "🏅",
      title: "Quality Assurance",
      desc: "Every ingredient inspected for excellence",
    },
  ]

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            The Premium Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-amber-950/20 to-slate-900/50 border border-amber-900/30 rounded-lg p-8 text-center hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/10 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-4">{exp.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>
              <p className="text-slate-400">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
