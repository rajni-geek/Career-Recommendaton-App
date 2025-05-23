import React from 'react';
import { Link } from 'react-router-dom';
import { Career } from '../../types';
import { Bookmark, ArrowRight } from 'lucide-react';
import { useAssessment } from '../../context/AssessmentContext';

interface CareerCardProps {
  career: Career;
}

const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  const { saveCareerId, savedCareerIds, removeSavedCareerId } = useAssessment();

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (savedCareerIds.includes(career.id)) {
      removeSavedCareerId(career.id);
    } else {
      saveCareerId(career.id);
    }
  };

  const isSaved = savedCareerIds.includes(career.id);

  return (
    <Link 
      to={`/careers/${career.id}`}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={career.imageUrl} 
          alt={career.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <button
          onClick={handleSaveToggle}
          className={`absolute top-3 right-3 p-2 rounded-full ${
            isSaved ? 'bg-primary-500 text-white' : 'bg-white/90 text-gray-700'
          } transition-colors duration-300`}
          aria-label={isSaved ? "Unsave career" : "Save career"}
        >
          <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} />
        </button>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{career.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{career.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Avg. Salary</span>
            <span className="font-medium text-gray-800">{career.averageSalary}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Growth</span>
            <span className="font-medium text-green-600">{career.growthOutlook}</span>
          </div>
        </div>
        
        <span className="text-primary-600 font-medium text-sm flex items-center mt-auto group">
          Learn more 
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </div>
    </Link>
  );
};

export default CareerCard;