import React from 'react';
import { Sparkles, LineChart, Briefcase, BookOpen } from 'lucide-react';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How CareerPath Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our data-driven platform helps you discover the best career options based on your unique profile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Sparkles className="text-primary-500" size={32} />}
            title="Personalized Assessment"
            description="Take our comprehensive assessment to identify your unique skills, interests, and values"
          />
          
          <FeatureCard 
            icon={<LineChart className="text-primary-500" size={32} />}
            title="AI-Powered Matching"
            description="Our algorithm analyzes your profile to recommend the most suitable career paths"
          />
          
          <FeatureCard 
            icon={<Briefcase className="text-primary-500" size={32} />}
            title="Career Exploration"
            description="Explore detailed profiles of recommended careers including salary data and growth potential"
          />
          
          <FeatureCard 
            icon={<BookOpen className="text-primary-500" size={32} />}
            title="Learning Resources"
            description="Access personalized resources to help you bridge skill gaps and prepare for your new career"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureSection;