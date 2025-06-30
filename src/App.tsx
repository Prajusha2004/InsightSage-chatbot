import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatHeader } from './components/ChatHeader';
import { QuickResponses } from './components/QuickResponses';
import { MessageBubble } from './components/MessageBubble';
import { TypingIndicator } from './components/TypingIndicator';
import { ChatInput } from './components/ChatInput';
import { WelcomeMessage } from './components/WelcomeMessage';
import { AIResponseGenerator } from './utils/aiResponses';
import { ChatStorage } from './utils/chatStorage';
import { Message, ChatSession } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const aiGenerator = AIResponseGenerator.getInstance();

  // Initialize chat session
  useEffect(() => {
    const existingSession = ChatStorage.getCurrentSession();
    if (existingSession) {
      setCurrentSession(existingSession);
      setMessages(existingSession.messages);
    } else {
      const newSession: ChatSession = {
        id: uuidv4(),
        messages: [],
        startTime: new Date(),
        lastActive: new Date()
      };
      setCurrentSession(newSession);
      ChatStorage.saveChatSession(newSession);
    }

    // Load theme preference (default to dark)
    const savedTheme = localStorage.getItem('chat_theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Save session when messages change
  useEffect(() => {
    if (currentSession && messages.length > 0) {
      const updatedSession: ChatSession = {
        ...currentSession,
        messages,
        lastActive: new Date()
      };
      setCurrentSession(updatedSession);
      ChatStorage.saveChatSession(updatedSession);
    }
  }, [messages, currentSession]);

  const handleSendMessage = async (text: string) => {
    if (!currentSession) return;

    const userMessage: Message = {
      id: uuidv4(),
      text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await aiGenerator.processQuery(text);
      
      const aiMessage: Message = {
        id: uuidv4(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      
      const errorMessage: Message = {
        id: uuidv4(),
        text: "I apologize, but I'm having trouble processing your request right now. Please try again in a moment or contact our support team for assistance.",
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = (messageId: string, feedback: 'helpful' | 'not-helpful') => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, feedback } : msg
    ));
  };

  const handleExportChat = () => {
    if (!currentSession) return;
    
    const chatData = ChatStorage.exportChatHistory(currentSession.id);
    const blob = new Blob([chatData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `insightsage-chat-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClearChat = () => {
    if (window.confirm('Are you sure you want to clear the chat history? This action cannot be undone.')) {
      setMessages([]);
      
      if (currentSession) {
        const clearedSession: ChatSession = {
          ...currentSession,
          messages: [],
          lastActive: new Date()
        };
        setCurrentSession(clearedSession);
        ChatStorage.saveChatSession(clearedSession);
      }
    }
  };

  const handleToggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('chat_theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-black transition-colors duration-300">
      <div className="container mx-auto max-w-4xl h-screen flex flex-col p-4">
        <div className={`flex-1 rounded-xl shadow-2xl overflow-hidden ${
          isDarkMode ? 'bg-dark-900 border border-dark-700' : 'bg-white border border-gray-200'
        }`}>
          
          <ChatHeader
            onExportChat={handleExportChat}
            onClearChat={handleClearChat}
            isDarkMode={isDarkMode}
            onToggleTheme={handleToggleTheme}
            messageCount={messages.length}
          />

          <QuickResponses onQuickResponse={handleSendMessage} isDarkMode={isDarkMode} />

          <div className="flex-1 overflow-y-auto p-4" style={{ maxHeight: 'calc(100vh - 280px)' }}>
            {messages.length === 0 ? (
              <WelcomeMessage isDarkMode={isDarkMode} />
            ) : (
              <>
                {messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    onFeedback={handleFeedback}
                    isDarkMode={isDarkMode}
                  />
                ))}
                {isLoading && <TypingIndicator isDarkMode={isDarkMode} />}
              </>
            )}
            <div ref={messagesEndRef} />
          </div>

          <ChatInput
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
}

export default App;