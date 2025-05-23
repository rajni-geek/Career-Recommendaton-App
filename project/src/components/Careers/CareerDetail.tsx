import React from 'react';
import { Career } from '../../types';
import { BriefcaseIcon, GraduationCap, TrendingUp, BarChart } from 'lucide-react';
import Button from '../Common/Button';
import { useAssessment } from '../../context/AssessmentContext';

interface CareerDetailProps {
  career: Career;
}

const CareerDetail: React.FC<CareerDetailProps> = ({ career }) => {
  const { saveCareerId, savedCareerIds, removeSavedCareerId } = useAssessment();

  const handleSaveToggle = () => {
    if (savedCareerIds.includes(career.id)) {
      removeSavedCareerId(career.id);
    } else {
      saveCareerId(career.id);
    }
  };

  const isSaved = savedCareerIds.includes(career.id);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="h-64 relative">
        <img 
          src={career.imageUrl} 
          alt={career.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{career.title}</h1>
            <p className="text-white/90">{career.industryCategory}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <InfoCard 
            icon={<BriefcaseIcon className="text-primary-500" />}
            title="Average Salary"
            value={career.averageSalary}
          />
          <InfoCard 
            icon={<TrendingUp className="text-green-500" />}
            title="Growth Outlook"
            value={career.growthOutlook}
          />
          <InfoCard 
            icon={<BarChart className="text-blue-500" />}
            title="Industry"
            value={career.industryCategory}
          />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-600">{career.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Required Skills</h2>
          <div className="flex flex-wrap gap-2">
            {career.skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            <GraduationCap className="inline-block mr-2" size={20} />
            Education Paths
          </h2>
          <ul className="space-y-2">
            {career.education.map((edu, index) => (
              <li key={index} className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>
                <span className="text-gray-700">{edu}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleSaveToggle}
            variant={isSaved ? "outline" : "primary"}
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill={isSaved ? "none" : "currentColor"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            }
          >
            {isSaved ? "Remove from Saved" : "Save This Career"}
          </Button>
        </div>
      </div>
    </div>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, value }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-center mb-2">
        {icon}
        <span className="text-gray-500 text-sm ml-2">{title}</span>
      </div>
      <div className="font-semibold text-gray-800">{value}</div>
    </div>
  );
};

export default CareerDetail;