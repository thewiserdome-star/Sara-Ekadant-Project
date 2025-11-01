import { useState } from 'react';
import { Home, Maximize2, DollarSign } from 'lucide-react';

export function FloorPlans() {
  const [downloading, setDownloading] = useState<Record<string, boolean>>({});

  // Map all configurations to the same Azure Blob PDF for now
  const brochureUrl = 'https://saraekadant.blob.core.windows.net/mediasaraekadant/Sara%20Ekadant%20Brochure.pdf';
  const brochureMap: Record<string, string> = {
    '1 BHK': brochureUrl,
    '2 BHK': brochureUrl,
    '3.5 BHK Duplex': brochureUrl,
  };

  const plans = [
    {
      type: '1 BHK',
      area: '650 sq.ft',
      price: 'Starting from ₹55 Lakhs',
      features: ['1 Bedroom', '1 Bathroom', 'Balcony', 'Modular Kitchen'],
    },
    {
      type: '2 BHK',
      area: '950 sq.ft',
      price: 'Starting from ₹98 Lakhs',
      features: ['2 Bedrooms', '2 Bathrooms', 'Balcony', 'Modular Kitchen'],
    },
    {
      type: '3.5 BHK Duplex',
      area: '1850 sq.ft',
      price: 'Starting from ₹2 Crores',
      features: ['3.5 Bedrooms', '3 Bathrooms', '2 Balconies', 'Premium Kitchen', 'Terrace Garden'],
    },
  ];

  function handleDownload(planType: string) {
    setDownloading((prev) => ({ ...prev, [planType]: true }));
    try {
      const brochureLink = brochureMap[planType] || brochureUrl;
      const a = document.createElement('a');
      a.href = brochureLink;
      a.download = `${planType.replace(/\s+/g, '-').toLowerCase()}-sara-ekadant-brochure.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      // basic error handling
      // eslint-disable-next-line no-console
      console.error(err);
      alert('Could not download brochure. Please try again later.');
    } finally {
      setDownloading((prev) => ({ ...prev, [planType]: false }));
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
                  <span className="text-lg font-semibold">{plan.price}</span>
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
                  onClick={() => handleDownload(plan.type)}
                  disabled={!!downloading[plan.type]}
                  aria-busy={!!downloading[plan.type]}
                  className={`w-full ${downloading[plan.type] ? 'opacity-70 cursor-not-allowed' : ''} bg-gold-500 hover:bg-gold-600 text-navy-900 py-3 px-6 font-semibold transition-colors`}
                >
                  {downloading[plan.type] ? 'Downloading...' : 'Download Brochure'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
