import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeatureSection from '../components/Home/FeatureSection';
import PopularCareers from '../components/Home/PopularCareers';
import Testimonials from '../components/Home/Testimonials';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const HomePage: React.FC = () => {
  // Set title when component mounts
  React.useEffect(() => {
    document.title = 'CareerPath - Find Your Ideal Career';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16"> {/* pt-16 to account for fixed header */}
        <HeroSection />
        <FeatureSection />
        <PopularCareers />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;