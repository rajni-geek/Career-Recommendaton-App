import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Answer, AssessmentResult, Career } from '../types';
import { processAssessmentAnswers, generateCareerRecommendations } from '../utils/recommendationAlgorithm';

interface AssessmentContextType {
  currentQuestionIndex: number;
  answers: Answer[];
  recommendations: Career[];
  assessmentCompleted: boolean;
  setCurrentQuestionIndex: (index: number) => void;
  saveAnswer: (answer: Answer) => void;
  completeAssessment: () => void;
  resetAssessment: () => void;
  saveCareerId: (id: string) => void;
  removeSavedCareerId: (id: string) => void;
  savedCareerIds: string[];
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export const AssessmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [recommendations, setRecommendations] = useState<Career[]>([]);
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);
  const [savedCareerIds, setSavedCareerIds] = useState<string[]>([]);

  const saveAnswer = (answer: Answer) => {
    setAnswers(prev => {
      const existingAnswerIndex = prev.findIndex(a => a.questionId === answer.questionId);
      if (existingAnswerIndex !== -1) {
        const newAnswers = [...prev];
        newAnswers[existingAnswerIndex] = answer;
        return newAnswers;
      } else {
        return [...prev, answer];
      }
    });
  };

  const completeAssessment = () => {
    const result: AssessmentResult = processAssessmentAnswers(answers);
    const recommendations = generateCareerRecommendations(result);
    setRecommendations(recommendations);
    setAssessmentCompleted(true);
  };

  const resetAssessment = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setRecommendations([]);
    setAssessmentCompleted(false);
  };

  const saveCareerId = (id: string) => {
    setSavedCareerIds(prev => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const removeSavedCareerId = (id: string) => {
    setSavedCareerIds(prev => prev.filter(careerId => careerId !== id));
  };

  return (
    <AssessmentContext.Provider
      value={{
        currentQuestionIndex,
        answers,
        recommendations,
        assessmentCompleted,
        setCurrentQuestionIndex,
        saveAnswer,
        completeAssessment,
        resetAssessment,
        saveCareerId,
        removeSavedCareerId,
        savedCareerIds
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
};