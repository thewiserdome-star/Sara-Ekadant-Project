import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Floor Plans', href: '#floor-plans' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
           <img
              src="https://saraekadant.blob.core.windows.net/mediasaraekadant/001_logo.JPG"
              alt="Logo"
              className="w-8 h-8"
              style={{ objectFit: 'contain' }}
            />
            <span className="text-2xl font-playfair font-bold text-white">Luxury Homes</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-gold-500 transition-colors font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-navy-800 border-t border-gold-500/20">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-gold-500 transition-colors font-medium py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
