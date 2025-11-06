import { Home, Maximize2, DollarSign } from 'lucide-react';

export function FloorPlans() {
  const plans = [
    {
      type: '1 BHK',
      area: '585 sq.ft',
      price: 'Starting from ₹62 Lakhs',
      features: ['1 Bedroom', '1 Bathroom', 'Balcony', 'Modular Kitchen'],
    },
    {
      type: '2 BHK',
      area: '1167 sq.ft',
      price: 'Starting from ₹98 Lakhs',
      features: ['2 Bedrooms', '2 Bathrooms', '2 Balcony', 'Modular Kitchen'],
    },
    {
      type: '3.5 BHK Duplex',
      area: '2193 sq.ft',
      price: 'Starting from ₹2.5 Crores',
      features: ['3.5 Bedrooms', '3 Bathrooms', '2 Balconies', 'Premium Kitchen', 'Terrace Garden'],
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
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Floor Plans
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose from our thoughtfully designed configurations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.type}
              className="bg-navy-800 border-2 border-gold-500/20 hover:border-gold-500 transition-all group"
            >
              <div className="bg-navy-700 p-6 border-b border-gold-500/20">
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                  {plan.type}
                </h3>
                <div className="flex items-center gap-2 text-gold-500">
                  <Maximize2 className="w-5 h-5" />
                  <span className="text-lg">{plan.area}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-orange-500 mb-6">
                  <DollarSign className="w-5 h-5" />
                  <span 
                    className={`text-lg font-semibold ${plan.type === '1 BHK' ? 'line-through decoration-green-500' : ''}`}
                  >
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <Home className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={plan.type === '1 BHK' ? undefined : handleBrochureClick}
                  disabled={plan.type === '1 BHK'}
                  aria-disabled={plan.type === '1 BHK' ? 'true' : 'false'}
                  className={`w-full py-3 px-6 font-semibold transition-colors ${
                    plan.type === '1 BHK'
                      ? 'bg-gray-500 text-gray-300 cursor-not-allowed opacity-60'
                      : 'bg-gold-500 hover:bg-gold-600 text-navy-900'
                  }`}
                >
                  {plan.type === '1 BHK' ? 'SOLD OUT' : 'Download Brochure'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
