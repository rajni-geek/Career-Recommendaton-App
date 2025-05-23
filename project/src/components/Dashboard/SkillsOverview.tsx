import React from 'react';
import { useAssessment } from '../../context/AssessmentContext';

// This is a simplified version. In a real application, this would be based on actual assessment data.
const skillsData = {
  technical: 75,
  communication: 60,
  problemSolving: 85,
  creativity: 65,
  leadership: 40,
  analytical: 80
};

const SkillsOverview: React.FC = () => {
  const { assessmentCompleted } = useAssessment();

  if (!assessmentCompleted) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Your Skills Profile</h3>
      <div className="space-y-6">
        {Object.entries(skillsData).map(([skill, value]) => (
          <div key={skill}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 capitalize">
                {skill.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span className="text-sm font-medium text-gray-700">{value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-primary-600 h-2.5 rounded-full" 
                style={{ width: `${value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsOverview;