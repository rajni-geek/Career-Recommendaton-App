import { Answer, AssessmentResult, Career } from "../types";
import { careers } from "./careerData";

// Weight different assessment categories based on importance
const CATEGORY_WEIGHTS = {
  interests: 0.4,
  skills: 0.3,
  values: 0.2,
  personality: 0.1
};

// Map answers to career attributes for matching
const answerToAttributeMap: Record<string, string[]> = {
  // Interests
  "problem-solving": ["Software Developer", "Data Scientist", "Cybersecurity Analyst"],
  "helping-others": ["Healthcare Administrator", "UX Designer"],
  "creative-work": ["UX Designer", "Digital Marketing Specialist"],
  "analytical-tasks": ["Financial Analyst", "Data Scientist"],
  
  // Skills
  "technical": ["Software Developer", "Cybersecurity Analyst", "Renewable Energy Engineer"],
  "communication": ["Digital Marketing Specialist", "Healthcare Administrator"],
  "design": ["UX Designer"],
  "numbers": ["Financial Analyst", "Data Scientist"],
  
  // Values
  "work-life-balance": ["Healthcare Administrator", "UX Designer"],
  "high-income": ["Software Developer", "Data Scientist", "Cybersecurity Analyst"],
  "social-impact": ["Healthcare Administrator", "Renewable Energy Engineer"],
  "innovation": ["Software Developer", "Renewable Energy Engineer", "UX Designer"],
  
  // Personality
  "analytical": ["Data Scientist", "Financial Analyst", "Cybersecurity Analyst"],
  "creative": ["UX Designer", "Digital Marketing Specialist"],
  "organized": ["Healthcare Administrator", "Financial Analyst"],
  "risk-taker": ["Renewable Energy Engineer", "Digital Marketing Specialist"]
};

export const processAssessmentAnswers = (answers: Answer[]): AssessmentResult => {
  // Initialize result object with empty arrays for each category
  const result: AssessmentResult = {
    interests: [],
    skills: [],
    values: [],
    personality: []
  };
  
  answers.forEach(answer => {
    // Map question ID to category
    const questionCategory = `question-${answer.questionId}-category` as keyof AssessmentResult;
    
    // Ensure the category array exists
    if (!result[questionCategory]) {
      result[questionCategory] = [];
    }
    
    if (Array.isArray(answer.value)) {
      // For checkbox questions
      answer.value.forEach(val => {
        if (typeof val === 'string') {
          result[questionCategory].push(val);
        }
      });
    } else if (typeof answer.value === 'string') {
      result[questionCategory].push(answer.value);
    }
  });
  
  return result;
};

export const generateCareerRecommendations = (assessmentResult: AssessmentResult): Career[] => {
  // Calculate match scores for each career
  const careerScores = careers.map(career => {
    let score = 0;
    
    // Calculate score based on interests match
    assessmentResult.interests.forEach(interest => {
      if (answerToAttributeMap[interest]?.includes(career.title)) {
        score += CATEGORY_WEIGHTS.interests;
      }
    });
    
    // Calculate score based on skills match
    assessmentResult.skills.forEach(skill => {
      if (answerToAttributeMap[skill]?.includes(career.title)) {
        score += CATEGORY_WEIGHTS.skills;
      }
    });
    
    // Calculate score based on values match
    assessmentResult.values.forEach(value => {
      if (answerToAttributeMap[value]?.includes(career.title)) {
        score += CATEGORY_WEIGHTS.values;
      }
    });
    
    // Calculate score based on personality match
    assessmentResult.personality.forEach(trait => {
      if (answerToAttributeMap[trait]?.includes(career.title)) {
        score += CATEGORY_WEIGHTS.personality;
      }
    });
    
    return {
      career,
      score
    };
  });
  
  // Sort careers by score and return top recommendations
  return careerScores
    .sort((a, b) => b.score - a.score)
    .map(item => item.career);
};