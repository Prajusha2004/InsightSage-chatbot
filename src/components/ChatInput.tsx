import React, { useState } from 'react';
import { Send, Mic, Paperclip } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  isDarkMode: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading, isDarkMode }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className={`p-4 border-t ${isDarkMode ? 'border-dark-700 bg-dark-800' : 'border-gray-200 bg-gray-50'}`}>
      <form onSubmit={handleSubmit} className="flex items-end space-x-3">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question here..."
            disabled={isLoading}
            rows={1}
            className={`w-full px-4 py-3 rounded-2xl border resize-none transition-all duration-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
              isDarkMode 
                ? 'bg-dark-700 border-dark-600 text-dark-100 placeholder-dark-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            style={{
              minHeight: '48px',
              maxHeight: '120px',
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
            }}
          />
          
          <div className="absolute right-2 bottom-2 flex items-center space-x-1">
            <button
              type="button"
              className={`p-1.5 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'text-dark-400 hover:text-dark-200 hover:bg-dark-600' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
              title="Attach file"
            >
              <Paperclip className="w-4 h-4" />
            </button>
            
            <button
              type="button"
              className={`p-1.5 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'text-dark-400 hover:text-dark-200 hover:bg-dark-600' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
              title="Voice input"
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className={`p-3 rounded-2xl transition-all duration-200 flex items-center justify-center ${
            message.trim() && !isLoading
              ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
              : isDarkMode 
                ? 'bg-dark-700 text-dark-400 cursor-not-allowed' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          title="Send message"
        >
          <Send className={`w-5 h-5 ${isLoading ? 'animate-pulse' : ''}`} />
        </button>
      </form>
      
      <div className={`mt-2 text-xs ${isDarkMode ? 'text-dark-400' : 'text-gray-500'} text-center`}>
        Press Enter to send • Shift + Enter for new line
      </div>
    </div>
  );
};