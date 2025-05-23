import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { careers } from '../../utils/careerData';

const PopularCareers: React.FC = () => {
  // Get top 4 careers for display
  const topCareers = careers.slice(0, 4);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Popular Career Paths
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore some of the fastest-growing and most in-demand careers across various industries
            </p>
          </div>
          <Link 
            to="/careers" 
            className="mt-6 md:mt-0 inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
          >
            View all careers
            <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topCareers.map((career) => (
            <CareerCard 
              key={career.id}
              id={career.id}
              title={career.title}
              description={career.description}
              salary={career.averageSalary}
              outlook={career.growthOutlook}
              imageUrl={career.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CareerCardProps {
  id: string;
  title: string;
  description: string;
  salary: string;
  outlook: string;
  imageUrl: string;
}

const CareerCard: React.FC<CareerCardProps> = ({ 
  id, title, description, salary, outlook, imageUrl 
}) => {
  return (
    <Link 
      to={`/careers/${id}`}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Avg. Salary</span>
            <span className="font-medium text-gray-800">{salary}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Growth</span>
            <span className="font-medium text-green-600">{outlook}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularCareers;