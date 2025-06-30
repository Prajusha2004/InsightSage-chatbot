import { faqData } from '../data/faqData';
import { FAQ } from '../types';

export class AIResponseGenerator {
  private static instance: AIResponseGenerator;
  
  public static getInstance(): AIResponseGenerator {
    if (!AIResponseGenerator.instance) {
      AIResponseGenerator.instance = new AIResponseGenerator();
    }
    return AIResponseGenerator.instance;
  }

  public findBestMatch(query: string): FAQ | null {
    const normalizedQuery = query.toLowerCase().trim();
    
    // First, try exact keyword matches
    for (const faq of faqData) {
      if (faq.keywords.some(keyword => normalizedQuery.includes(keyword.toLowerCase()))) {
        return faq;
      }
    }
    
    // Then try partial matches in questions
    for (const faq of faqData) {
      const questionWords = faq.question.toLowerCase().split(' ');
      const queryWords = normalizedQuery.split(' ');
      
      const matchCount = queryWords.filter(word => 
        questionWords.some(qWord => qWord.includes(word) || word.includes(qWord))
      ).length;
      
      if (matchCount >= Math.min(2, queryWords.length)) {
        return faq;
      }
    }
    
    return null;
  }

  public generateFallbackResponse(query: string): string {
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon'];
    const normalizedQuery = query.toLowerCase();
    
    if (greetings.some(greeting => normalizedQuery.includes(greeting))) {
      return "Hello! Welcome to InsightSage - your source of wisdom at your fingertips. How can I help you today? You can ask me about our platform, features, billing, or technical support.";
    }
    
    if (normalizedQuery.includes('thank')) {
      return "You're welcome! InsightSage is here whenever you need wisdom and guidance. Is there anything else I can help you with today?";
    }
    
    const fallbackResponses = [
      "I understand you're seeking wisdom on this topic, but I couldn't find a specific answer in my knowledge base. Could you please rephrase your question or try asking about our platform features, billing, account settings, or technical support?",
      "That's an insightful question! While I don't have a direct answer for that, InsightSage can assist you with information about getting started, account management, billing, or technical issues. What would you like to explore?",
      "Great question! I don't have specific wisdom on that topic yet, but I can help you with questions about our platform, features, pricing, or support. You can also contact our human support team at support@insightsage.com for more specialized assistance.",
      "InsightSage is here to help! Although I don't have information about that specific topic, I can provide guidance on platform usage, account settings, billing questions, or technical support. What other wisdom can I share with you?"
    ];
    
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  }

  public async processQuery(query: string): Promise<string> {
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const bestMatch = this.findBestMatch(query);
    
    if (bestMatch) {
      return bestMatch.answer;
    }
    
    return this.generateFallbackResponse(query);
  }
}