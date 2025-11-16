import { Building2, Link, Phone, Mail, MapPin, BadgeCheck, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300 py-12 px-6 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-gold-500" />
            <span className="text-2xl font-playfair font-bold text-white">Sara Ekadant</span>
          </div>
          <p className="text-gray-400 leading-relaxed">Exceptional properties for discerning buyers seeking the finest in residential real estate.</p>
        </div>

        {/* Quick Links Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Link className="w-5 h-5 text-gold-500" />
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
          </div>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-gold-500 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-gold-500 transition-colors">About</a></li>
            <li><a href="#explore-floor-plans" className="hover:text-gold-500 transition-colors">Floor Plans</a></li>
            <li><a href="#gallery" className="hover:text-gold-500 transition-colors">Gallery</a></li>
            <li><a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Phone className="w-5 h-5 text-gold-500" />
            <h3 className="text-white text-lg font-semibold">Contact Info</h3>
          </div>
          <div className="space-y-3">
          <a href="tel:+919406161669" className="hover:text-gold-500 transition-colors flex items-center gap-1" aria-label="Call +91 94061 61669">
              <Phone className="w-4 h-4" />
              +91 94061 61669
            </a>
            <a href="tel:+918668370323" className="hover:text-gold-500 transition-colors flex items-center gap-1" aria-label="Call +91 8668370323">
              <Phone className="w-4 h-4" />
              +91 8668370323
            </a>
            <a href="tel:+917875026265" className="hover:text-gold-500 transition-colors flex items-center gap-1" aria-label="Call +91 7875026265">
              <Phone className="w-4 h-4" />
              +91 7875026265
            </a>
            <a href="mailto:saraekadant@gmail.com" className="flex items-center gap-2 hover:text-gold-500 transition-colors" aria-label="Email sales">
              <Mail className="w-4 h-4" />
              saraekadant@gmail.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" />
              <span className="text-gray-400">Sara Ekadant, Survey No. 11/A, Mahalunge, Pune</span>
            </div>
          </div>
        </div>

        {/* RERA Details Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BadgeCheck className="w-5 h-5 text-gold-500" />
            <h3 className="text-white text-lg font-semibold">RERA Details</h3>
          </div>
          <div className="space-y-3">
            {/* QR Code */}
            <a 
              href="https://maharerait.maharashtra.gov.in/public/project/view/56930"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-24 h-24 transition-transform hover:scale-105"
              aria-label="Scan RERA QR Code"
            >
              <img
                src="https://saraekadant.blob.core.windows.net/mediasaraekadant/QR%20Code%20RERA%20Sara%20Ekadant.jpg"
                alt="RERA QR Code"
                className="w-full h-full rounded border-2 border-gold-500/30 hover:border-gold-500 transition-colors"
              />
            </a>
            <div>
              <p className="text-sm text-gray-400 mb-1">MahaRERA Registration Number</p>
              <p className="text-white font-semibold">P52100080513</p>
            </div>
            <a 
              href="https://maharerait.maharashtra.gov.in/public/project/view/56930" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold-500 hover:text-gold-600 transition-colors"
              aria-label="Visit MahaRERA official website"
            >
              <span>https://maharera.maharashtra.gov.in/</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Policy Section */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gold-500/20">
        <div className="text-xs text-gray-500 leading-relaxed">
          <p className="mb-4">
            <strong className="text-gray-400">Privacy Policy:</strong> We respect your privacy and protect the data you share with us. Personal information collected through this website is used solely to respond to inquiries, share project updates, and enhance our services. We do not disclose your information to third parties except as required by law or to trusted partners assisting in communications. This website and its content, including artistic impressions and stock images, are for informational purposes only and do not constitute a binding offer, commitment, or warranty. By continuing to use this website, you agree to this Privacy Policy and its updates.The developers reserve the right to amend the layout, plans, dimension, elevation, color scheme, specifications and amenities etc. While every care has been taken in providing this information the owner or the agent cannot be held responsible for any inaccuracies.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gold-500/10 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© 2025 Sara Ekadant. All rights reserved.</div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="text-gold-500 hover:text-gold-600 underline transition-colors"
          aria-label="Back to top"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}
