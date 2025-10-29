import { Home, MapPin, Ruler, Key } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Premium Finishes',
    description: 'High-end materials and craftsmanship throughout every space',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Walking distance to Balewadi Sports Complex, shops, dining, and entertainment',
  },
  {
    icon: Ruler,
    title: 'Spacious Layout',
    description: 'Thoughtfully designed living space with large bedrooms',
  },
  {
    icon: Key,
    title: 'Move-In Ready',
    description: 'Fully renovated and ready for immediate occupancy',
  },
];

export function Features() {
  return (
    <section className="py-24 px-6 bg-navy-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Property Highlights</h2>
          <p className="text-xl text-gray-400">Everything you need for elevated living</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-navy-900 border border-gold-500/20 hover:border-gold-500 hover:bg-navy-700 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors">
                <feature.icon className="w-8 h-8 text-gold-500 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
