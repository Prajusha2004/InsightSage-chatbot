export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  category?: string;
  feedback?: 'helpful' | 'not-helpful';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

export interface ChatSession {
  id: string;
  messages: Message[];
  startTime: Date;
  lastActive: Date;
}

export interface QuickResponse {
  id: string;
  text: string;
  category: string;
}