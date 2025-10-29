import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300 py-16 px-6 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-gold-500" />
              <span className="text-2xl font-playfair font-bold text-white">Luxury Homes</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Exceptional properties for discerning buyers seeking the finest in residential real estate.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>Sara Ekadant, Survey No. 11/A, Mahalunge, Pune</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span>+91 999 999 9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span>info@luxuryhomes.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Office Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gold-500/20 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Sara Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
