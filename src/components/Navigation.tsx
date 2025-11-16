import { Menu, X, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>('home');
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Amenities', href: '#amenities', id: 'amenities' },
    { label: 'Floor Plans', href: '#explore-floor-plans', id: 'explore-floor-plans' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Location', href: '#location', id: 'location' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    // Observe sections to set active nav item on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id || '');
            // Update URL hash without scrolling
            if (id) history.replaceState(null, '', `#${id}`);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Close mobile nav on Escape
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  useEffect(() => {
    // When mobile menu opens, focus the first link for accessibility
    if (isOpen) {
      setTimeout(() => firstMobileLinkRef.current?.focus(), 50);
      // prevent body scroll when menu open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  function handleNavClick(e: React.MouseEvent, href: string) {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
    // update active immediately
    setActive(id);
    history.replaceState(null, '', `#${id}`);
  }

  function scrollToContact() {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="https://saraekadant.blob.core.windows.net/mediasaraekadant/SaraCorpLogoShort.jpg"
              alt="Sara Ekadant logo"
              className="w-12 h-12"
              style={{ objectFit: 'contain' }}
            />
            <span className="text-2xl font-playfair font-bold text-white">Sara Ekadant</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors px-2 py-1 rounded ${
                  active === item.id ? 'text-gold-500 underline decoration-gold-500/40' : 'text-gray-300 hover:text-gold-500'
                } focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2`}
              >
                {item.label}
              </a>
            ))}

            {/* CTA */}
            <button
              onClick={scrollToContact}
              className="ml-4 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold py-2 px-4 rounded-md shadow-sm transition focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
            >
              <Phone className="w-4 h-4" />
              Enquire Now
            </button>
          </div>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-navy-800 border-t border-gold-500/20">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                ref={idx === 0 ? firstMobileLinkRef : undefined}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block text-base font-medium py-2 rounded ${
                  active === item.id ? 'text-gold-500' : 'text-gray-300 hover:text-gold-500'
                } focus:outline-none focus:ring-2 focus:ring-gold-500`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => { setIsOpen(false); scrollToContact(); }}
                className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold py-3 px-4 rounded-md shadow-sm transition focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <Phone className="w-4 h-4" />
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
