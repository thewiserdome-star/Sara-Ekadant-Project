import { Phone, MessageCircle } from 'lucide-react';

export function FloatingActions() {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
      <a
        href="tel:+919406161669"
        className="w-14 h-14 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-white group-hover:animate-pulse" />
      </a>

      <a
        href="https://wa.me/918698859243?text=I%20would%20like%20to%20understand%20more%20about%20project%20%22Sara%20Ekadant%22."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:animate-pulse" />
      </a>
    </div>
  );
}
