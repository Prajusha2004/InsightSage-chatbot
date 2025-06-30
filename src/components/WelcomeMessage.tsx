import React from 'react';
import { Sparkles, MessageCircle, Zap } from 'lucide-react';

interface WelcomeMessageProps {
  isDarkMode: boolean;
}

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ isDarkMode }) => {
  return (
    <div className="text-center py-8 px-4 animate-fade-in">
      <div className="mb-6">
        <img 
          src="/public/Screenshot_2025-06-30_201243-removebg-preview.png" 
          alt="InsightSage Logo" 
          className="w-24 h-24 mx-auto mb-4 object-contain"
        />
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
          isDarkMode ? 'bg-gradient-to-br from-primary-600 to-success-600' : 'bg-gradient-to-br from-primary-500 to-success-500'
        }`}>
          <Sparkles className="w-8 h-8 text-white animate-pulse-slow" />
        </div>
      </div>
      
      <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-gray-900'}`}>
        Welcome to InsightSage
      </h2>
      
      <p className={`text-xl mb-2 ${isDarkMode ? 'text-primary-300' : 'text-primary-600'} font-medium`}>
        Wisdom at your fingertips
      </p>
      
      <p className={`text-lg mb-6 ${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`}>
        I'm here to help you find answers quickly and efficiently
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        <div className={`p-4 rounded-xl border ${
          isDarkMode ? 'border-dark-700 bg-dark-800' : 'border-gray-200 bg-white'
        } shadow-sm hover:shadow-md transition-shadow`}>
          <MessageCircle className={`w-6 h-6 mx-auto mb-2 ${
            isDarkMode ? 'text-primary-400' : 'text-primary-500'
          }`} />
          <h3 className={`font-semibold mb-1 ${isDarkMode ? 'text-dark-100' : 'text-gray-900'}`}>
            Ask Questions
          </h3>
          <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-600'}`}>
            Get instant answers to your questions about our platform
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border ${
          isDarkMode ? 'border-dark-700 bg-dark-800' : 'border-gray-200 bg-white'
        } shadow-sm hover:shadow-md transition-shadow`}>
          <Zap className={`w-6 h-6 mx-auto mb-2 ${
            isDarkMode ? 'text-success-400' : 'text-success-500'
          }`} />
          <h3 className={`font-semibold mb-1 ${isDarkMode ? 'text-dark-100' : 'text-gray-900'}`}>
            Quick Responses
          </h3>
          <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-600'}`}>
            Use predefined questions for faster support
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border ${
          isDarkMode ? 'border-dark-700 bg-dark-800' : 'border-gray-200 bg-white'
        } shadow-sm hover:shadow-md transition-shadow`}>
          <Sparkles className={`w-6 h-6 mx-auto mb-2 ${
            isDarkMode ? 'text-yellow-400' : 'text-yellow-500'
          }`} />
          <h3 className={`font-semibold mb-1 ${isDarkMode ? 'text-dark-100' : 'text-gray-900'}`}>
            Smart AI
          </h3>
          <p className={`text-sm ${isDarkMode ? 'text-dark-400' : 'text-gray-600'}`}>
            Powered by advanced AI for accurate responses
          </p>
        </div>
      </div>
      
      <div className={`mt-6 p-4 rounded-lg ${
        isDarkMode ? 'bg-primary-900/20 border border-primary-800' : 'bg-primary-50 border border-primary-200'
      }`}>
        <p className={`text-sm ${isDarkMode ? 'text-primary-300' : 'text-primary-700'}`}>
          💡 <strong>Tip:</strong> Try asking about getting started, pricing, technical support, or account settings
        </p>
      </div>
    </div>
  );
};