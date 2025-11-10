import { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/13_01_Bird View copy.jpg',
    title: 'Building Bird Eye View',
  },
  {
    url: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/13_03_Building View copy.jpg',
    title: 'Building Front View',
  },
  {
    url: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/13_06_building_back_side copy.jpg',
    title: 'Back Side Diagonal Elevation',
  },
  {
    url: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/13_05_building_side copy.jpg',
    title: 'Horizontal Side Elevation',
  },
 {
    url: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/13_04_building_perspective copy.jpg',
    title: 'Building Perspective',
  },
  {
    url: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/13_07 copy.jpg',
    title: 'Left Diagonal Side Elevation',
  },
  {
    url: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/13_04_Night_view copy.jpg',
    title: 'Night View Elevation',
  },
  
{
    url: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/13_02_Block View copy.jpg',
    title: 'Ameneties View from Top',
  },

  
];

export function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!isOpen) return;
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, images.length - 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => closeBtnRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  function openAt(i: number) {
    setIndex(i);
    setIsOpen(true);
  }

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  return (
    <section id="gallery" className="py-24 px-6 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Gallery</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Explore the property from different perspectives</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <button
              key={img.url}
              onClick={() => openAt(i)}
              className="overflow-hidden rounded-md bg-navy-800 focus:outline-none focus:ring-2 focus:ring-gold-500"
              aria-label={`Open ${img.title} image`}
            >
              <img src={img.url} alt={img.title} className="w-full h-40 object-cover transform group-hover:scale-105 transition" loading="lazy" />
            </button>
          ))}
        </div>

        {isOpen && (
          <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
            <div className="relative max-w-4xl w-full">
              <button ref={closeBtnRef} onClick={() => setIsOpen(false)} className="absolute top-3 right-3 p-2 rounded bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-gold-500" aria-label="Close viewer">
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <button onClick={prev} aria-label="Previous image" className="p-2 rounded bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-gold-500">
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex-1">
                  <img src={images[index].url} alt={images[index].title} className="w-full max-h-[70vh] object-contain rounded-md shadow-lg mx-auto" />
                  <div className="mt-3 text-center text-gray-200">{images[index].title}</div>
                </div>

                <button onClick={next} aria-label="Next image" className="p-2 rounded bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-gold-500">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
