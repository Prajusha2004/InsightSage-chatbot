import React from 'react';
import { quickResponses } from '../data/faqData';
import { Zap } from 'lucide-react';

interface QuickResponsesProps {
  onQuickResponse: (text: string) => void;
  isDarkMode: boolean;
}

export const QuickResponses: React.FC<QuickResponsesProps> = ({ onQuickResponse, isDarkMode }) => {
  return (
    <div className={`p-4 border-b ${isDarkMode ? 'border-dark-700 bg-dark-800' : 'border-gray-200 bg-gray-50'}`}>
      <div className="flex items-center space-x-2 mb-3">
        <Zap className={`w-4 h-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
        <span className={`text-sm font-medium ${isDarkMode ? 'text-dark-200' : 'text-gray-700'}`}>
          Quick responses
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {quickResponses.map((response) => (
          <button
            key={response.id}
            onClick={() => onQuickResponse(response.text)}
            className={`px-3 py-1.5 text-sm rounded-full border transition-all duration-200 hover:scale-105 ${
              isDarkMode 
                ? 'border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white' 
                : 'border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white'
            }`}
          >
            {response.text}
          </button>
        ))}
      </div>
    </div>
  );
};