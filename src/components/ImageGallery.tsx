import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const images = [
  {
    url: 'https://res.cloudinary.com/duzonog7y/image/upload/v1761221585/Sara_Ekadant3_r4e5fh.jpg',
    title: 'Modern Living Room',
  },
  {
    url: 'https://res.cloudinary.com/duzonog7y/image/upload/v1761221584/Sara_Ekadant1_ypxiwz.jpg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Gourmet Kitchen',
  },
  {
    url: 'https://res.cloudinary.com/duzonog7y/image/upload/v1761221584/Sara_Ekadant2_unrwog.jpg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Master Bedroom',
  },
  {
    url: 'https://res.cloudinary.com/duzonog7y/image/upload/v1761221584/Sara_Ekadant4_x04ykv.jpg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Luxury Bathroom',
  },
  {
    url: 'https://res.cloudinary.com/duzonog7y/image/upload/v1761221584/Sara_Ekadant5_f3pd2n.jpg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Dining Area',
  },
  {
    url: 'https://res.cloudinary.com/duzonog7y/image/upload/v1761221584/Sara_Ekadant7_ollblt.jpg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Outdoor Terrace',
  },
];

export function ImageGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Property Gallery</h2>
          <p className="text-xl text-gray-400">Explore every detail of your future home</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden bg-navy-800 border border-gold-500/20 cursor-pointer hover:border-gold-500 transition-all"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/0 to-navy-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gold-500">
                    <Maximize2 className="w-4 h-4" />
                    <span>Click to enlarge</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gold-500 transition-colors p-2"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={previousImage}
            className="absolute left-6 text-white hover:text-gold-500 transition-colors p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-gold-500 transition-colors p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-7xl max-h-[90vh] mx-auto px-20">
            <img
              src={images[currentImage].url}
              alt={images[currentImage].title}
              className="w-full h-full object-contain"
            />
            <p className="text-center text-white text-xl mt-6 font-light">
              {images[currentImage].title}
            </p>
            <p className="text-center text-slate-400 text-sm mt-2">
              {currentImage + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
