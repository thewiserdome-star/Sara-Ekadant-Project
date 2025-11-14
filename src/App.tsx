import { useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Welcome } from './components/Welcome';
import { Amenities } from './components/Amenities';
import { ExploreFloorPlans } from './components/ExploreFloorPlans';
import { ImageGallery } from './components/ImageGallery';
import { Features } from './components/Features';
import { Location } from './components/Location';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

function App() {
  const welcomeRef = useRef<HTMLDivElement>(null);

  const scrollToWelcome = () => {
    welcomeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-navy-900">
      <Navigation />
      <Hero onScrollToWelcome={scrollToWelcome} />
      <div ref={welcomeRef}>
        <Welcome />
      </div>
      <ImageGallery />
      <ExploreFloorPlans />
      <WhyChooseUs />
      <Amenities />
      <Features />
      <Location />
      <ContactForm />
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
