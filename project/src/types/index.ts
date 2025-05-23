export interface Career {
  id: string;
  title: string;
  description: string;
  averageSalary: string;
  education: string[];
  skills: string[];
  growthOutlook: string;
  industryCategory: string;
  imageUrl: string;
}

export interface Question {
  id: number;
  text: string;
  type: 'multiple-choice' | 'slider' | 'checkbox';
  options?: string[];
  category: 'interests' | 'skills' | 'values' | 'personality';
}

export interface Answer {
  questionId: number;
  value: string | string[] | number;
}

export interface AssessmentResult {
  interests: string[];
  skills: string[];
  values: string[];
  personality: string[];
}

export interface UserProfile {
  assessmentCompleted: boolean;
  answers: Answer[];
  savedCareers: string[];
  result?: AssessmentResult;
}