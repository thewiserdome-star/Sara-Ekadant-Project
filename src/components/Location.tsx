import { MapPin, Navigation, Train, ShoppingBag, GraduationCap, Cross, ExternalLink } from 'lucide-react';

export function Location() {
  const landmarks = [
    { icon: Train, title: 'Metro Station', distance: '10 km' },
    { icon: ShoppingBag, title: 'Shopping Mall', distance: '1.5 km' },
    { icon: GraduationCap, title: 'Schools', distance: '500 m' },
    { icon: Cross, title: 'Hospital', distance: '3 km' },
  ];

  // Keep the embeddable iframe src for inline map
  const embedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.083806012823!2d73.75729177501435!3d18.57026008253295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9558afbfda7%3A0xfedab17d94fc19a4!2sSara%20Ekadant%20Housing%20Project%20Mahalunge!5e0!3m2!1sen!2sin!4v1762518513661!5m2!1sen!2sin";

  // Use a normal (non-embed) map URL for opening in a new tab to avoid the "Embed API" error
  const mapsUrl = 'https://maps.app.goo.gl/J9M1jjyLKN1J43Gs7';

  return (
    <section id="location" className="py-24 px-6 bg-navy-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Prime Location</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Strategically located with excellent connectivity to key areas</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Embeddable Google Maps iframe (official embed URL) */}
            <div className="block aspect-video bg-navy-700 border border-gold-500/20 mb-6 overflow-hidden rounded-lg">
              <iframe
                src={embedSrc}
                title="Sara Ekadant location"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex items-start gap-3 text-gray-300">
              <Navigation className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-2">Easy Access to Major Landmarks</h3>
                <p className="text-gray-400 leading-relaxed">Located in a well-connected area with easy access to major roads, highways, and public transportation. Perfect for both work and leisure.</p>

                <div className="mt-4">
                  {/* OPEN A NON-EMBED MAP URL in a new tab so the user doesn't see the Embed-API message */}
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold-500 hover:underline font-medium" aria-label="Open location in Google Maps (opens in new tab)">
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
                <div key={landmark.title} className="bg-navy-900 p-6 border border-gold-500/20 hover:border-gold-500 transition-all flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-gold-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{landmark.title}</h4>
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
