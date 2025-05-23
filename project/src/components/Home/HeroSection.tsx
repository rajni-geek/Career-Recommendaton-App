import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white py-32 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 bg-white opacity-5 rounded-full w-96 h-96 -mt-24 -mr-24"></div>
        <div className="absolute bottom-0 left-0 bg-white opacity-5 rounded-full w-72 h-72 -mb-24 -ml-24"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in">
            Discover Your Ideal Career Path
          </h1>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl animate-fade-in delay-100">
            Take our personalized assessment to find the perfect career match for your skills, 
            interests, and values. Get started on your journey to professional fulfillment.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in delay-200">
            <Link
              to="/assessment"
              className="bg-white text-primary-700 font-medium py-3 px-6 rounded-lg hover:bg-primary-50 transition-colors duration-300 flex items-center justify-center sm:justify-start shadow-lg hover:shadow-xl"
            >
              Start Assessment
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/careers"
              className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center sm:justify-start"
            >
              Explore Careers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;