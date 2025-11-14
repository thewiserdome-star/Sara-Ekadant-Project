import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

interface FloorPlan {
  id: string;
  type: string;
  carpetArea: string;
  imageUrl: string;
  description: string;
  highlights: string[];
  pricingImageUrl?: string;
}

export function ExploreFloorPlans() {
  const [selectedPlan, setSelectedPlan] = useState<FloorPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const floorPlans: FloorPlan[] = [
    {
      id: '1bhk',
      type: '1 BHK',
      carpetArea: '585 sq.ft',
      imageUrl: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/1%20BHK%20PLAN%20copy.jpg',
      description: 'Compact and efficient living space perfect for individuals or young couples',
      highlights: ['Modular Kitchen', 'Spacious Bedroom', 'Modern Bathroom', 'Balcony']
    },
    {
      id: '2bhk',
      type: '2 BHK',
      carpetArea: '1167 sq.ft',
      imageUrl: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/2%20BHK%20PLAN%20-104%20copy.jpg',
      description: 'Ideal family home with ample space and smart design',
      highlights: ['2 Bedrooms', '2 Bathrooms', '3 Balconies','Premium Kitchen'],
      pricingImageUrl: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/2%20BHK%20Price%20Tag.png'
    },
    {
      id: '3bhk',
      type: '3.5 BHK Duplex',
      carpetArea: '2193 sq.ft',
      imageUrl: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/3%20BHK%20PLAN%20-%20604%20copy.jpg',
      description: 'Luxurious duplex offering spacious living with premium amenities',
      highlights: ['3.5 Bedrooms', '4 Bathrooms', '3 Balconies', 'Premium Kitchen', 'Duplex Design'],
      pricingImageUrl: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/3.5%20BHK%20Price%20Tag.png'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (plan: FloorPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="explore-floor-plans" className="py-24 px-6 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              Explore Our Floor Plans!
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover detailed layouts and configurations tailored to your lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {floorPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-navy-900 border-2 border-gold-500/20 hover:border-gold-500 transition-all duration-300 overflow-hidden group"
              >
                {/* Blurred Image Section */}
                <div 
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={scrollToContact}
                >
                  <img
                    src={plan.imageUrl}
                    alt={`${plan.type} Floor Plan`}
                    className="w-full h-full object-cover blur-sm group-hover:blur-none transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg bg-gold-500 px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                      {plan.type}
                    </h3>
                    <div className="flex items-center gap-2 text-gold-500">
                      <Maximize2 className="w-4 h-4" />
                      <span className="text-base">{plan.carpetArea}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {plan.description}
                  </p>

                  <div className="mb-6 flex gap-4 items-start">
                    {/* Key Highlights Section */}
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {plan.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing Image on the Right */}
                    {plan.pricingImageUrl && (
                      <div className="flex-shrink-0 w-32">
                        <img
                          src={plan.pricingImageUrl}
                          alt={`${plan.type} Pricing`}
                          className="w-full h-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    {plan.id === '1bhk' ? (
                      <button
                        type="button"
                        disabled
                        className="flex-1 bg-gray-400 text-gray-700 py-2 px-4 font-semibold text-sm cursor-not-allowed opacity-70"
                      >
                        SOLD OUT
                      </button>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => openModal(plan)}
                          className="flex-1 bg-gold-500 hover:bg-gold-600 text-navy-900 py-2 px-4 font-semibold text-sm transition-colors"
                        >
                          View Full Plan
                        </button>
                        <button
                          type="button"
                          onClick={scrollToContact}
                          className="flex-1 bg-navy-700 hover:bg-navy-600 text-white py-2 px-4 font-semibold text-sm transition-colors border border-gold-500/20"
                        >
                          Enquire Now
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal/Lightbox */}
      {isModalOpen && selectedPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] bg-navy-900 border-2 border-gold-500 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-gold-500 hover:bg-gold-600 text-navy-900 p-2 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              <div className="p-6">
                <h3 className="text-3xl font-playfair font-bold text-white mb-2">
                  {selectedPlan.type} Floor Plan
                </h3>
                <p className="text-gold-500 text-lg mb-6">
                  Carpet Area: {selectedPlan.carpetArea}
                </p>
              </div>

              {/* Full Image */}
              <div className="relative">
                <img
                  src={selectedPlan.imageUrl}
                  alt={`${selectedPlan.type} Full Floor Plan`}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Details */}
              <div className="p-6 bg-navy-800">
                <p className="text-gray-300 mb-4">{selectedPlan.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Features & Highlights:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedPlan.highlights.map((highlight, index) => (
                      <li key={index} className="text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    closeModal();
                    scrollToContact();
                  }}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 py-3 px-6 font-semibold transition-colors"
                >
                  Get More Information
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
