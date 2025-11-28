import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold text-amber-400 mb-3"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              BHILWARA
            </h3>
            <p className="text-slate-400 text-sm">
              Premier destination for authentic Rajasthani fine dining
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Menu", "Gallery", "Reservations", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-4">Hours</h4>
            <p className="text-slate-400 text-sm">Open 24 hours</p>
            <p className="text-slate-400 text-sm">7 days a week</p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">

              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 bg-amber-600/20 hover:bg-amber-600 
                text-amber-400 hover:text-white rounded-full flex items-center 
                justify-center transition-all duration-300"
              >
                <Facebook size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 bg-amber-600/20 hover:bg-amber-600 
                text-amber-400 hover:text-white rounded-full flex items-center 
                justify-center transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/reel/DL8Knsao0EZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-600/20 hover:bg-amber-600 
                text-amber-400 hover:text-white rounded-full flex items-center 
                justify-center transition-all duration-300"
              >
                <Instagram size={20} />
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="w-10 h-10 bg-amber-600/20 hover:bg-amber-600 
                text-amber-400 hover:text-white rounded-full flex items-center 
                justify-center transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-500 text-sm">
            &copy; 2025 Hotel Bhilwara Rajasthan. All Rights Reserved. | Crafted for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
 