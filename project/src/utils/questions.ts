import { Question } from "../types";

export const assessmentQuestions: Question[] = [
  {
    id: 1,
    text: "Which activities do you enjoy most?",
    type: "multiple-choice",
    options: [
      "Solving complex problems",
      "Helping and teaching others",
      "Creating and designing things",
      "Analyzing data and finding patterns"
    ],
    category: "interests"
  },
  {
    id: 2,
    text: "Rate your comfort level with technology:",
    type: "slider",
    category: "skills"
  },
  {
    id: 3,
    text: "Which skills are you most confident in?",
    type: "checkbox",
    options: [
      "Technical/Programming",
      "Communication/Presentation",
      "Design/Creativity",
      "Numbers/Analysis",
      "Organization/Planning",
      "Leadership/Management"
    ],
    category: "skills"
  },
  {
    id: 4,
    text: "What do you value most in a career?",
    type: "multiple-choice",
    options: [
      "Work-life balance",
      "High income potential",
      "Making a positive impact",
      "Innovation and cutting-edge work",
      "Job security and stability"
    ],
    category: "values"
  },
  {
    id: 5,
    text: "Which working environment do you prefer?",
    type: "multiple-choice",
    options: [
      "Fast-paced startup",
      "Established corporate setting",
      "Remote/flexible work",
      "Outdoor/field work",
      "Community/public service"
    ],
    category: "values"
  },
  {
    id: 6,
    text: "How would you describe your personality?",
    type: "checkbox",
    options: [
      "Analytical and logical",
      "Creative and innovative",
      "Organized and detail-oriented",
      "Risk-taking and adventurous",
      "Compassionate and supportive",
      "Persuasive and outgoing"
    ],
    category: "personality"
  },
  {
    id: 7,
    text: "What level of education are you willing to pursue?",
    type: "multiple-choice",
    options: [
      "High school diploma",
      "Associate's degree",
      "Bachelor's degree",
      "Master's degree",
      "Doctoral degree",
      "Professional certifications"
    ],
    category: "values"
  },
  {
    id: 8,
    text: "Which industries interest you most?",
    type: "checkbox",
    options: [
      "Technology",
      "Healthcare",
      "Finance",
      "Education",
      "Creative arts",
      "Business",
      "Engineering",
      "Environmental"
    ],
    category: "interests"
  }
];