import { Home, Maximize2, DollarSign } from 'lucide-react';

export function FloorPlans() {
  const plans = [
    {
      type: '1 BHK',
      area: '585 sq.ft',
      price: 'Starting from ₹62 Lakhs',
      features: ['1 Bedroom', '1 Bathroom', 'Balcony', 'Modular Kitchen'],
      image: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/1%20BHK%20PLAN%20copy.jpg',
      sold: true,
    },
    {
      type: '2 BHK',
      area: '1167 sq.ft',
      price: 'Starting from ₹98 Lakhs',
      features: ['2 Bedrooms', '2 Bathrooms', '2 Balcony', 'Modular Kitchen'],
      image: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/2%20BHK%20PLAN%20-104%20copy.jpg',
      sold: false,
    },
    {
      type: '3.5 BHK Duplex',
      area: '2193 sq.ft',
      price: 'Starting from ₹2.5 Crores',
      features: ['3.5 Bedrooms', '3 Bathrooms', '2 Balconies', 'Premium Kitchen', 'Terrace Garden'],
      image: 'https://saraekadant.blob.core.windows.net/mediasaraekadant/3%20BHK%20PLAN.jpg',
      sold: false,
    },
  ];

  function handleBrochureClick() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="floor-plans" className="py-24 px-6 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Floor Plans</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Choose from our thoughtfully designed configurations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <article
              key={plan.type}
              className="bg-navy-800 border-2 border-gold-500/20 hover:border-gold-500 transition-all group rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img src={plan.image} alt={`${plan.type} floor plan`} className="w-full h-44 object-cover" loading="lazy" />
                {plan.sold && (
                  <span className="absolute top-3 left-3 inline-block bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded-full">SOLD OUT</span>
                )}
              </div>

              <div className="p-6">
                <header className="mb-4">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-1">{plan.type}</h3>
                  <div className="flex items-center gap-2 text-gold-500">
                    <Maximize2 className="w-5 h-5" />
                    <span className="text-lg">{plan.area}</span>
                  </div>
                </header>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-white font-semibold mb-2">
                    <DollarSign className="w-5 h-5 text-gold-500" />
                    <span className={`${plan.sold ? 'text-gray-300 line-through decoration-green-500' : 'text-white'}`}>{plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <Home className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={plan.sold ? undefined : handleBrochureClick}
                    disabled={plan.sold}
                    aria-disabled={plan.sold ? 'true' : 'false'}
                    title={plan.sold ? 'This unit is sold out' : 'Download brochure / enquire'}
                    className={`flex-1 py-3 px-4 font-semibold rounded-md transition-colors ${
                      plan.sold
                        ? 'bg-gray-500 text-gray-300 cursor-not-allowed opacity-80'
                        : 'bg-gold-500 hover:bg-gold-600 text-navy-900'
                    }`}
                  >
                    {plan.sold ? 'SOLD OUT' : 'Download Brochure'}
                  </button>

                  <button
                    type="button"
                    onClick={handleBrochureClick}
                    className="px-4 py-3 border border-gold-500 text-gold-500 rounded-md hover:bg-gold-500/10"
                    aria-label={`Request callback for ${plan.type}`}
                  >
                    Request Callback
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}