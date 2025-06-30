import React from 'react';
import { Download, Trash2, Moon, Sun } from 'lucide-react';

interface ChatHeaderProps {
  onExportChat: () => void;
  onClearChat: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  messageCount: number;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  onExportChat,
  onClearChat,
  isDarkMode,
  onToggleTheme,
  messageCount
}) => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-4 rounded-t-xl shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <img 
              src="/public/Screenshot_2025-06-30_201243-removebg-preview.png" 
              alt="InsightSage Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">InsightSage</h1>
            <p className="text-primary-100 text-sm">
              Wisdom at your fingertips • {messageCount} messages
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button
            onClick={onExportChat}
            disabled={messageCount === 0}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white transition-colors"
            title="Export chat history"
          >
            <Download className="w-4 h-4" />
          </button>
          
          <button
            onClick={onClearChat}
            disabled={messageCount === 0}
            className="p-2 rounded-lg bg-white/10 hover:bg-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed text-white transition-colors"
            title="Clear chat history"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};