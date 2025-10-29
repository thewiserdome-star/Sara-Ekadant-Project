import { Award, Shield, TrendingUp, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'World-class construction with attention to every detail',
    },
    {
      icon: Shield,
      title: 'Trusted Developer',
      description: 'Decades of experience in delivering dream homes',
    },
    {
      icon: TrendingUp,
      title: 'High ROI',
      description: 'Strategic location ensuring excellent investment returns',
    },
    {
      icon: Users,
      title: 'Community Living',
      description: 'Vibrant community with like-minded residents',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience luxury living at its finest with world-class amenities and exceptional design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-navy-800 p-8 border border-gold-500/20 hover:border-gold-500 transition-all group"
              >
                <div className="w-16 h-16 bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                  <Icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-navy-800 p-8 md:p-12 border border-gold-500/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-white mb-6">
                About The Project
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Welcome to your dream home, where luxury meets comfort. Our meticulously designed residences offer the perfect blend of modern architecture and timeless elegance.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Located in a prime area with excellent connectivity, this project redefines urban living with spacious layouts, premium finishes, and world-class amenities.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Every aspect has been carefully planned to ensure your family enjoys a lifestyle of convenience, comfort, and luxury.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-navy-700 p-6 border border-gold-500/20">
                <div className="text-3xl font-playfair font-bold text-gold-500 mb-2">500+</div>
                <div className="text-gray-400">Happy Families</div>
              </div>
              <div className="bg-navy-700 p-6 border border-gold-500/20">
                <div className="text-3xl font-playfair font-bold text-gold-500 mb-2">25+</div>
                <div className="text-gray-400">Amenities</div>
              </div>
              <div className="bg-navy-700 p-6 border border-gold-500/20">
                <div className="text-3xl font-playfair font-bold text-gold-500 mb-2">3</div>
                <div className="text-gray-400">Configurations</div>
              </div>
              <div className="bg-navy-700 p-6 border border-gold-500/20">
                <div className="text-3xl font-playfair font-bold text-gold-500 mb-2">100%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
