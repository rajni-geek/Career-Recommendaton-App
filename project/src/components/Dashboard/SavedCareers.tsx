import React from 'react';
import { Link } from 'react-router-dom';
import { useAssessment } from '../../context/AssessmentContext';
import { careers } from '../../utils/careerData';
import { Trash2, ExternalLink } from 'lucide-react';

const SavedCareers: React.FC = () => {
  const { savedCareerIds, removeSavedCareerId } = useAssessment();
  
  const savedCareers = careers.filter(career => 
    savedCareerIds.includes(career.id)
  );

  if (savedCareers.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-3">No Saved Careers</h3>
        <p className="text-gray-600 mb-6">
          You haven't saved any careers yet. Browse career options and save them for later comparison.
        </p>
        <Link
          to="/careers"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Explore Careers
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-800">Saved Careers</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {savedCareers.map(career => (
          <div key={career.id} className="p-4 hover:bg-gray-50">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img 
                  src={career.imageUrl} 
                  alt={career.title}
                  className="w-12 h-12 rounded-lg object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{career.title}</h4>
                  <div className="flex text-sm text-gray-500 space-x-4">
                    <span>{career.averageSalary}</span>
                    <span className="text-green-600">{career.growthOutlook}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Link 
                  to={`/careers/${career.id}`}
                  className="text-gray-500 hover:text-primary-600"
                >
                  <ExternalLink size={18} />
                </Link>
                <button
                  onClick={() => removeSavedCareerId(career.id)}
                  className="text-gray-500 hover:text-red-500"
                  aria-label="Remove from saved"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedCareers;