import { Building2, ChevronDown, Images } from 'lucide-react';

interface HeroProps {
  onScrollToGallery: () => void;
}

export function Hero({ onScrollToGallery }: HeroProps) {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/duzonog7y/image/upload/v1761221584/Sara_Ekadant2_unrwog.jpg')] bg-cover bg-center opacity-30"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-transparent to-navy-900/80"></div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-20">
        <div className="flex justify-center mb-8">
          <img
              src="https://saraekadant.blob.core.windows.net/mediasaraekadant/001_logo.JPG"
              alt="Logo"
              className="w-8 h-8"
              style={{ objectFit: 'contain' }}
            />
        </div>

        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 tracking-tight">
          Sara Ekadant
          <span className="block text-gold-500 font-normal mt-4 text-3xl md:text-4xl">Where Luxury Meets Prosperity</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Experience exceptional architecture and timeless design in the heart of the city's most prestigious neighborhood
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onScrollToGallery}
            className="group inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore Property
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="https://photos.app.goo.gl/YOUR_GOOGLE_PHOTOS_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-navy-800 hover:bg-navy-700 border-2 border-gold-500/50 hover:border-gold-500 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Images className="w-5 h-5" />
            View Full Album
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gold-500/70" />
      </div>
    </div>
  );
}
