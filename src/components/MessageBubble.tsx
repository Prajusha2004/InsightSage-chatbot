import React from 'react';
import { ThumbsUp, ThumbsDown, User, Bot, Copy, Check } from 'lucide-react';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
  onFeedback: (messageId: string, feedback: 'helpful' | 'not-helpful') => void;
  isDarkMode: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, onFeedback, isDarkMode }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy message:', error);
    }
  };

  return (
    <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in`}>
      <div className={`flex max-w-xs lg:max-w-md ${message.isUser ? 'flex-row-reverse' : 'flex-row'} space-x-2`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          message.isUser 
            ? 'bg-primary-500 ml-2' 
            : isDarkMode ? 'bg-success-600 mr-2' : 'bg-success-500 mr-2'
        }`}>
          {message.isUser ? (
            <User className="w-4 h-4 text-white" />
          ) : (
            <Bot className="w-4 h-4 text-white" />
          )}
        </div>
        
        <div className={`group relative px-4 py-3 rounded-2xl shadow-sm ${
          message.isUser 
            ? 'bg-primary-500 text-white rounded-br-md' 
            : isDarkMode 
              ? 'bg-dark-700 text-dark-100 rounded-bl-md border border-dark-600' 
              : 'bg-white text-gray-800 rounded-bl-md border border-gray-200'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
          
          <div className={`flex items-center justify-between mt-2 pt-2 border-t ${
            message.isUser 
              ? 'border-primary-400' 
              : isDarkMode ? 'border-dark-600' : 'border-gray-200'
          }`}>
            <span className={`text-xs ${
              message.isUser 
                ? 'text-primary-100' 
                : isDarkMode ? 'text-dark-400' : 'text-gray-500'
            }`}>
              {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            
            <div className="flex items-center space-x-1">
              <button
                onClick={handleCopy}
                className={`p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                  message.isUser 
                    ? 'hover:bg-primary-400 text-primary-100' 
                    : isDarkMode ? 'hover:bg-dark-600 text-dark-400' : 'hover:bg-gray-100 text-gray-500'
                }`}
                title="Copy message"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              </button>
              
              {!message.isUser && (
                <>
                  <button
                    onClick={() => onFeedback(message.id, 'helpful')}
                    className={`p-1 rounded transition-colors ${
                      message.feedback === 'helpful' 
                        ? 'text-success-500' 
                        : isDarkMode ? 'text-dark-400 hover:text-success-400' : 'text-gray-500 hover:text-success-500'
                    }`}
                    title="Mark as helpful"
                  >
                    <ThumbsUp className="w-3 h-3" />
                  </button>
                  
                  <button
                    onClick={() => onFeedback(message.id, 'not-helpful')}
                    className={`p-1 rounded transition-colors ${
                      message.feedback === 'not-helpful' 
                        ? 'text-red-500' 
                        : isDarkMode ? 'text-dark-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'
                    }`}
                    title="Mark as not helpful"
                  >
                    <ThumbsDown className="w-3 h-3" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};