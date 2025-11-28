export default function Location() {
  return (
    <section id="location" className="py-24 bg-slate-900 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="animate-scale-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.6582637241223!2d75.7945!3d25.3439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d63f3c5c5c5c5%3A0x0!2sHotel%20Bhilwara!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Find Us
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-amber-400 font-semibold mb-1">Address</p>
                <p className="text-slate-300">Main Road, Bhilwara, Rajasthan 311001</p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-amber-400 font-semibold mb-1">Phone</p>
                <p className="text-slate-300 text-lg font-bold">+91 98765 43210</p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-amber-400 font-semibold mb-1">Email</p>
                <p className="text-slate-300">info@hotelbhilwara.com</p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-amber-400 font-semibold mb-1">Hours</p>
                <p className="text-slate-300">Mon-Sat: 11 AM - 11 PM</p>
                <p className="text-slate-300">Sunday: 11 AM - 10 PM</p>
              </div>
            </div>

            <button className="mt-8 px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/50 w-full md:w-auto">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
