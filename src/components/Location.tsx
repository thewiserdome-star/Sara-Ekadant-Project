import { MapPin, Navigation, Train, ShoppingBag, GraduationCap, Cross, ExternalLink } from 'lucide-react';

export function Location() {
  const landmarks = [
    { icon: Train, title: 'Metro Station', distance: '2 km' },
    { icon: ShoppingBag, title: 'Shopping Mall', distance: '1.5 km' },
    { icon: GraduationCap, title: 'Schools', distance: '500 m' },
    { icon: Cross, title: 'Hospital', distance: '3 km' },
  ];

  const mapsUrl = 'https://maps.app.goo.gl/J9M1jjyLKN1J43Gs7';

  return (
    <section id="location" className="py-24 px-6 bg-navy-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Prime Location
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Strategically located with excellent connectivity to key areas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Clickable map area: opens Google Maps link in a new tab.
                An iframe is used as the map background; if embedding is blocked,
                the anchor still provides the link. */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open location in Google Maps"
              className="block aspect-video bg-navy-700 border border-gold-500/20 flex items-center justify-center mb-6 overflow-hidden rounded-lg"
            >
              <iframe
                src={mapsUrl}
                title="Sara Ekadant location"
                className="w-full h-full border-0"
                loading="lazy"
                aria-hidden="false"
              />
            </a>

            <div className="flex items-start gap-3 text-gray-300">
              <Navigation className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                  Easy Access to Major Landmarks
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Located in a well-connected area with easy access to major roads, highways, and public transportation. Perfect for both work and leisure.
                </p>

                <div className="mt-4">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold-500 hover:underline font-medium"
                    aria-label="Open location in Google Maps (opens in new tab)"
                  >
                    View on Google Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {landmarks.map((landmark) => {
              const Icon = landmark.icon;
              return (
                <div
                  key={landmark.title}
                  className="bg-navy-900 p-6 border border-gold-500/20 hover:border-gold-500 transition-all flex items-center gap-6 group"
                >
                  <div className="w-16 h-16 bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-gold-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {landmark.title}
                    </h4>
                    <p className="text-gray-400">Within {landmark.distance}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
