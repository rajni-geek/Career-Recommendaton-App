import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Question, Answer } from '../../types';
import Button from '../Common/Button';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: Answer) => void;
  onNext: () => void;
  onPrevious: () => void;
  showPrevious: boolean;
  showNext: boolean;
  currentValue?: string | string[] | number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  onNext,
  onPrevious,
  showPrevious,
  showNext,
  currentValue
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    typeof currentValue === 'string' ? currentValue : undefined
  );
  
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    Array.isArray(currentValue) ? currentValue : []
  );
  
  const [sliderValue, setSliderValue] = useState<number>(
    typeof currentValue === 'number' ? currentValue : 5
  );

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onAnswer({ questionId: question.id, value: option });
  };

  const handleCheckboxToggle = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter(item => item !== option)
      : [...selectedOptions, option];
    
    setSelectedOptions(updatedOptions);
    onAnswer({ questionId: question.id, value: updatedOptions });
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);
    onAnswer({ questionId: question.id, value });
  };

  const renderQuestionContent = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedOption === option
                    ? 'border-primary-500 bg-primary-50 shadow-sm'
                    : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                      selectedOption === option
                        ? 'border-primary-500 bg-primary-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedOption === option && (
                      <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className="text-gray-800">{option}</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <div
                key={option}
                onClick={() => handleCheckboxToggle(option)}
                className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedOptions.includes(option)
                    ? 'border-primary-500 bg-primary-50 shadow-sm'
                    : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center mr-3 ${
                      selectedOptions.includes(option)
                        ? 'border-primary-500 bg-primary-500'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    {selectedOptions.includes(option) && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-800">{option}</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'slider':
        return (
          <div className="py-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Not at all comfortable</span>
              <span>Very comfortable</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="flex justify-between mt-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div
                  key={num}
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-medium text-sm ${
                    sliderValue === num
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-500'
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isNextDisabled = () => {
    switch (question.type) {
      case 'multiple-choice':
        return !selectedOption;
      case 'checkbox':
        return selectedOptions.length === 0;
      case 'slider':
        return false;
      default:
        return true;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full mx-auto transition-all duration-500 animate-fade-in">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{question.text}</h3>
      
      {renderQuestionContent()}
      
      <div className="flex justify-between mt-8">
        {showPrevious ? (
          <Button
            variant="outline"
            onClick={onPrevious}
            leftIcon={<ArrowLeft size={18} />}
          >
            Previous
          </Button>
        ) : <div />}
        
        {showNext && (
          <Button
            onClick={onNext}
            disabled={isNextDisabled()}
            rightIcon={<ArrowRight size={18} />}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;