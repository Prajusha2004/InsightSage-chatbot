import React from 'react';
import { Bot } from 'lucide-react';

interface TypingIndicatorProps {
  isDarkMode: boolean;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ isDarkMode }) => {
  return (
    <div className="flex justify-start mb-4 animate-fade-in">
      <div className="flex flex-row space-x-2">
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
          isDarkMode ? 'bg-success-600' : 'bg-success-500'
        }`}>
          <Bot className="w-4 h-4 text-white" />
        </div>
        
        <div className={`px-4 py-3 rounded-2xl rounded-bl-md shadow-sm ${
          isDarkMode ? 'bg-dark-700 border border-dark-600' : 'bg-white border border-gray-200'
        }`}>
          <div className="flex space-x-1">
            <div className={`w-2 h-2 rounded-full animate-bounce ${
              isDarkMode ? 'bg-dark-400' : 'bg-gray-400'
            }`} style={{ animationDelay: '0ms' }}></div>
            <div className={`w-2 h-2 rounded-full animate-bounce ${
              isDarkMode ? 'bg-dark-400' : 'bg-gray-400'
            }`} style={{ animationDelay: '150ms' }}></div>
            <div className={`w-2 h-2 rounded-full animate-bounce ${
              isDarkMode ? 'bg-dark-400' : 'bg-gray-400'
            }`} style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};