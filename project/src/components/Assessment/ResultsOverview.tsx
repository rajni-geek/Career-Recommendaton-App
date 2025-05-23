import React from 'react';
import { Link } from 'react-router-dom';
import { Career } from '../../types';
import { ArrowRight, Bookmark } from 'lucide-react';
import Button from '../Common/Button';
import { useAssessment } from '../../context/AssessmentContext';

interface ResultsOverviewProps {
  recommendations: Career[];
}

const ResultsOverview: React.FC<ResultsOverviewProps> = ({ recommendations }) => {
  const { saveCareerId, savedCareerIds, removeSavedCareerId } = useAssessment();

  const handleSaveToggle = (careerId: string) => {
    if (savedCareerIds.includes(careerId)) {
      removeSavedCareerId(careerId);
    } else {
      saveCareerId(careerId);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Your Career Recommendations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Based on your assessment, we've identified the following careers that match your skills, interests, and values.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {recommendations.slice(0, 4).map((career) => (
          <div 
            key={career.id}
            className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <div className="h-40 overflow-hidden relative">
              <img 
                src={career.imageUrl} 
                alt={career.title} 
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => handleSaveToggle(career.id)}
                className={`absolute top-3 right-3 p-2 rounded-full ${
                  savedCareerIds.includes(career.id) 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-white/90 text-gray-700'
                }`}
                aria-label={savedCareerIds.includes(career.id) ? "Unsave career" : "Save career"}
              >
                <Bookmark size={18} fill={savedCareerIds.includes(career.id) ? "currentColor" : "none"} />
              </button>
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{career.title}</h3>
              <div className="flex justify-between text-sm mb-3">
                <span className="text-gray-500">Avg. Salary</span>
                <span className="font-medium text-gray-800">{career.averageSalary}</span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-gray-500">Growth</span>
                <span className="font-medium text-green-600">{career.growthOutlook}</span>
              </div>
              
              <Link to={`/careers/${career.id}`} className="text-primary-600 font-medium text-sm flex items-center hover:text-primary-700">
                View details <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-6">
          Want to see all your career matches and explore them in detail?
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/dashboard">
            <Button variant="primary">
              Go to Dashboard
            </Button>
          </Link>
          <Link to="/careers">
            <Button variant="outline">
              Explore All Careers
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultsOverview;