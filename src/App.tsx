import { useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Amenities } from './components/Amenities';
import { ExploreFloorPlans } from './components/ExploreFloorPlans';
import { ImageGallery } from './components/ImageGallery';
import { Features } from './components/Features';
import { Location } from './components/Location';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

function App() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-navy-900">
      <Navigation />
      <Hero onScrollToGallery={scrollToGallery} />
      <About />
      <Amenities />
      <div ref={galleryRef}>
        <ImageGallery />
      </div>
      <ExploreFloorPlans />
      <Features />
      <Location />
      <ContactForm />
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
