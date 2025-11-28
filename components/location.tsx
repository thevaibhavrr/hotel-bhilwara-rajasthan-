export default function Location() {
  return (
    <section id="location" className="py-24 bg-slate-900 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="animate-scale-in">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3649.684934084376!2d75.1042222!3d23.8298002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396423ac3e5f1beb%3A0x1a9fee3f3b83c578!2sRajasthani%20Hotel%20Bhilwarxxxxx!5e0!3m2!1sen!2sin!4v1764331666949!5m2!1sen!2sin" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Info */}
          <div className="animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Find Us
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-amber-400 font-semibold mb-1">Address</p>
                <p className="text-slate-300">
                  Mandsaur - Ratlam - Dhar Hwy, Manan Kheda, Lasudia Ila, Madhya Pradesh 458669
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-amber-400 font-semibold mb-1">Phone</p>
                <p className="text-slate-300 text-lg font-bold">+91 98765 43210</p>
              </div>



              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-amber-400 font-semibold mb-1">Hours</p>
                <p className="text-slate-300">Open 24 hours, 7 days a week</p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/QngE7fJkVPxZxhn2A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/50 w-full md:w-auto text-center"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
