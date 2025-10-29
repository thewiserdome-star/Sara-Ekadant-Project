import { Dumbbell, Waves, Trees, Shield, Car, Zap, Wind, Droplets, Users, Heart, BookOpen, Gamepad2 } from 'lucide-react';

export function Amenities() {
  const amenities = [
    { icon: Dumbbell, title: 'Fitness Center' },
    { icon: Waves, title: 'Swimming Pool' },
    { icon: Trees, title: 'Landscaped Gardens' },
    { icon: Shield, title: '24/7 Security' },
    { icon: Car, title: 'Covered Parking' },
    { icon: Zap, title: 'Power Backup' },
    { icon: Wind, title: 'Central AC' },
    { icon: Droplets, title: 'Water Supply' },
    { icon: Users, title: 'Clubhouse' },
    { icon: Heart, title: 'Yoga & Meditation' },
    { icon: BookOpen, title: 'Library' },
    { icon: Gamepad2, title: 'Indoor Games' },
  ];

  return (
    <section id="amenities" className="py-24 px-6 bg-navy-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            World-Class Amenities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need for a lifestyle of comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity) => {
            const Icon = amenity.icon;
            return (
              <div
                key={amenity.title}
                className="bg-navy-900 p-6 border border-gold-500/20 hover:border-gold-500 hover:bg-navy-700 transition-all group text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-gold-500" />
                  </div>
                </div>
                <h3 className="text-white font-medium">{amenity.title}</h3>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            And many more amenities to make your life comfortable and luxurious
          </p>
        </div>
      </div>
    </section>
  );
}
