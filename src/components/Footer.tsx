import { Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300 py-12 px-6 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-gold-500" />
            <span className="text-2xl font-playfair font-bold text-white">Luxury Homes</span>
          </div>
          <p className="text-gray-400 leading-relaxed">Exceptional properties for discerning buyers seeking the finest in residential real estate.</p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-gold-500">Home</a></li>
            <li><a href="#about" className="hover:text-gold-500">About</a></li>
            <li><a href="#floor-plans" className="hover:text-gold-500">Floor Plans</a></li>
            <li><a href="#gallery" className="hover:text-gold-500">Gallery</a></li>
            <li><a href="#contact" className="hover:text-gold-500">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
          <div className="space-y-2">
            <a href="tel:+911234567890" className="block hover:text-gold-500" aria-label="Call sales">+91 12345 67890</a>
            <a href="mailto:info@saraekadant.com" className="block hover:text-gold-500" aria-label="Email sales">info@saraekadant.com</a>
            <div className="mt-3 text-sm text-gray-500">MahaRERA: P52100080513</div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500 flex items-center justify-between">
        <div>© 2025 Sara Ekadant. All rights reserved.</div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gold-500 underline">Back to top</button>
      </div>
    </footer>
  );
}