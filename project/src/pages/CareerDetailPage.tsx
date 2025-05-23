import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import CareerDetail from '../components/Careers/CareerDetail';
import { careers } from '../utils/careerData';
import { ArrowLeft } from 'lucide-react';

const CareerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const career = careers.find(c => c.id === id);
  
  useEffect(() => {
    if (career) {
      document.title = `${career.title} - CareerPath`;
    } else {
      document.title = 'Career Not Found - CareerPath';
    }
  }, [career]);

  if (!career) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Career Not Found</h1>
            <p className="text-gray-600 mb-6">
              The career you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => navigate('/careers')}
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Back to Careers
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors duration-300"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back
          </button>
          
          <CareerDetail career={career} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareerDetailPage;