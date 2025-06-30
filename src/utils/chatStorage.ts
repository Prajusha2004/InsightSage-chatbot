import { ChatSession, Message } from '../types';

const STORAGE_KEY = 'insightsage_chat_sessions';
const CURRENT_SESSION_KEY = 'current_insightsage_session';

export class ChatStorage {
  public static saveChatSession(session: ChatSession): void {
    try {
      const sessions = this.getAllSessions();
      const existingIndex = sessions.findIndex(s => s.id === session.id);
      
      if (existingIndex >= 0) {
        sessions[existingIndex] = session;
      } else {
        sessions.push(session);
      }
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
      localStorage.setItem(CURRENT_SESSION_KEY, session.id);
    } catch (error) {
      console.error('Failed to save chat session:', error);
    }
  }

  public static getAllSessions(): ChatSession[] {
    try {
      const sessions = localStorage.getItem(STORAGE_KEY);
      return sessions ? JSON.parse(sessions) : [];
    } catch (error) {
      console.error('Failed to load chat sessions:', error);
      return [];
    }
  }

  public static getCurrentSession(): ChatSession | null {
    try {
      const currentId = localStorage.getItem(CURRENT_SESSION_KEY);
      if (!currentId) return null;
      
      const sessions = this.getAllSessions();
      return sessions.find(s => s.id === currentId) || null;
    } catch (error) {
      console.error('Failed to load current session:', error);
      return null;
    }
  }

  public static exportChatHistory(sessionId: string): string {
    const sessions = this.getAllSessions();
    const session = sessions.find(s => s.id === sessionId);
    
    if (!session) return '';
    
    const exportData = {
      platform: 'InsightSage',
      tagline: 'Wisdom at your fingertips',
      sessionId: session.id,
      startTime: session.startTime,
      lastActive: session.lastActive,
      messageCount: session.messages.length,
      messages: session.messages.map(msg => ({
        timestamp: msg.timestamp,
        sender: msg.isUser ? 'User' : 'InsightSage AI',
        message: msg.text,
        category: msg.category || 'General'
      }))
    };
    
    return JSON.stringify(exportData, null, 2);
  }

  public static clearAllSessions(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(CURRENT_SESSION_KEY);
    } catch (error) {
      console.error('Failed to clear chat sessions:', error);
    }
  }
}