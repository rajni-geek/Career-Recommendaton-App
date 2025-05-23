import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import SavedCareers from '../components/Dashboard/SavedCareers';
import SkillsOverview from '../components/Dashboard/SkillsOverview';
import { useAssessment } from '../context/AssessmentContext';
import Button from '../components/Common/Button';
import { LineChart, ArrowRight } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { assessmentCompleted, recommendations } = useAssessment();

  useEffect(() => {
    document.title = 'Your Dashboard - CareerPath';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Dashboard</h1>
          
          {!assessmentCompleted ? (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="text-center mb-6">
                <LineChart size={48} className="mx-auto text-primary-500 mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Complete Your Assessment</h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Take our career assessment to get personalized recommendations based on your
                  unique skills, interests, and values.
                </p>
              </div>
              <div className="flex justify-center">
                <Link to="/assessment">
                  <Button rightIcon={<ArrowRight size={18} />}>
                    Start Assessment
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow p-6 mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Your Top Recommendations</h2>
                  <div className="space-y-4">
                    {recommendations.slice(0, 3).map((career) => (
                      <Link 
                        key={career.id}
                        to={`/careers/${career.id}`}
                        className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      >
                        <img 
                          src={career.imageUrl} 
                          alt={career.title}
                          className="w-16 h-16 rounded-lg object-cover mr-4"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">{career.title}</h3>
                          <div className="flex text-sm text-gray-500">
                            <span className="mr-4">{career.averageSalary}</span>
                            <span className="text-green-600">{career.growthOutlook}</span>
                          </div>
                        </div>
                        <ArrowRight size={18} className="text-gray-400" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Link 
                      to="/assessment"
                      className="text-primary-600 font-medium hover:text-primary-700"
                    >
                      View All Recommendations
                    </Link>
                  </div>
                </div>
                
                <SavedCareers />
              </div>
              
              <div>
                <SkillsOverview />
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;