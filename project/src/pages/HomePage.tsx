import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/Home/HeroSection';
import FeatureSection from '../components/Home/FeatureSection';
import PopularCareers from '../components/Home/PopularCareers';
import Testimonials from '../components/Home/Testimonials';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = 'CareerPath - Find Your Ideal Career';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />

        {/* 👇 Add Sign In / Sign Up buttons here */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => navigate('/signup')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate('/signin')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded shadow"
          >
            Sign In
          </button>
        </div>

        <FeatureSection />
        <PopularCareers />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
