import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { assessmentQuestions } from '../utils/questions';
import QuestionCard from '../components/Assessment/QuestionCard';
import ResultsOverview from '../components/Assessment/ResultsOverview';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { useAssessment } from '../context/AssessmentContext';
import Button from '../components/Common/Button';
import { ArrowRight } from 'lucide-react';

const AssessmentPage: React.FC = () => {
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    saveAnswer,
    completeAssessment,
    assessmentCompleted,
    recommendations,
    resetAssessment
  } = useAssessment();

  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(!assessmentCompleted);

  useEffect(() => {
    document.title = 'Career Assessment - CareerPath';
  }, []);

  const handleNext = () => {
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      window.scrollTo(0, 0);
    } else {
      completeAssessment();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  const getCurrentQuestionValue = () => {
    const currentAnswer = answers.find(
      answer => answer.questionId === assessmentQuestions[currentQuestionIndex].id
    );
    return currentAnswer ? currentAnswer.value : undefined;
  };

  const startAssessment = () => {
    resetAssessment();
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {showIntro && !assessmentCompleted ? (
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Career Assessment</h1>
              <p className="text-gray-600 mb-4">
                This assessment will help us understand your skills, interests, and values to
                recommend the most suitable career paths for you.
              </p>
              <p className="text-gray-600 mb-6">
                The assessment takes about 5-10 minutes to complete and consists of {assessmentQuestions.length} questions.
                Your answers will be used to generate personalized career recommendations.
              </p>
              
              <div className="bg-primary-50 border border-primary-100 rounded-lg p-4 mb-8">
                <h3 className="font-semibold text-primary-800 mb-2">Tips for best results:</h3>
                <ul className="text-primary-700 space-y-1">
                  <li>• Answer honestly rather than what you think is "right"</li>
                  <li>• Focus on what you enjoy, not just what you're good at</li>
                  <li>• Consider your long-term goals and values</li>
                </ul>
              </div>
              
              <Button
                onClick={startAssessment}
                rightIcon={<ArrowRight size={18} />}
                fullWidth
                size="lg"
              >
                Start Assessment
              </Button>
            </div>
          ) : assessmentCompleted ? (
            <ResultsOverview recommendations={recommendations} />
          ) : (
            <>
              <div className="mb-8">
                <div className="max-w-3xl mx-auto">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${((currentQuestionIndex + 1) / assessmentQuestions.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-right mt-2 text-sm text-gray-500">
                    Question {currentQuestionIndex + 1} of {assessmentQuestions.length}
                  </div>
                </div>
              </div>

              <QuestionCard
                question={assessmentQuestions[currentQuestionIndex]}
                onAnswer={saveAnswer}
                onNext={handleNext}
                onPrevious={handlePrevious}
                showPrevious={currentQuestionIndex > 0}
                showNext={true}
                currentValue={getCurrentQuestionValue()}
              />
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AssessmentPage;