import { Award, Shield, TrendingUp, Users } from 'lucide-react';

export function WhyChooseUs() {
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
      </div>
    </section>
  );
}
