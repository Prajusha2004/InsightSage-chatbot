import { FAQ, QuickResponse } from '../types';

export const faqCategories = [
  'General',
  'Technical',
  'Billing',
  'Account',
  'Features',
  'Support'
];

export const faqData: FAQ[] = [
  {
    id: '1',
    question: 'How do I get started with the platform?',
    answer: 'Getting started is easy! Simply create an account, complete the onboarding process, and you\'ll have access to all features. Our quick start guide will walk you through the essential first steps.',
    category: 'General',
    keywords: ['getting started', 'begin', 'start', 'onboarding', 'setup']
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.',
    category: 'Billing',
    keywords: ['payment', 'credit card', 'paypal', 'billing', 'pay']
  },
  {
    id: '3',
    question: 'How do I reset my password?',
    answer: 'To reset your password, click on "Forgot Password" on the login page, enter your email address, and follow the instructions sent to your email. The reset link expires in 24 hours for security.',
    category: 'Account',
    keywords: ['password', 'reset', 'forgot', 'login', 'access']
  },
  {
    id: '4',
    question: 'Is there a mobile app available?',
    answer: 'Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store. The mobile app includes all the core features of the web platform.',
    category: 'Features',
    keywords: ['mobile', 'app', 'ios', 'android', 'download']
  },
  {
    id: '5',
    question: 'What are the system requirements?',
    answer: 'Our platform works on any modern web browser (Chrome, Firefox, Safari, Edge). For optimal performance, we recommend using the latest browser version with JavaScript enabled and a stable internet connection.',
    category: 'Technical',
    keywords: ['system', 'requirements', 'browser', 'compatibility', 'technical']
  },
  {
    id: '6',
    question: 'How can I contact customer support?',
    answer: 'You can reach our support team 24/7 through this chat, email at support@company.com, or phone at 1-800-SUPPORT. We typically respond to emails within 2 hours during business days.',
    category: 'Support',
    keywords: ['support', 'contact', 'help', 'customer service', 'assistance']
  },
  {
    id: '7',
    question: 'Can I export my data?',
    answer: 'Absolutely! You can export your data at any time from the Settings page. We support various formats including CSV, JSON, and PDF. Data exports are processed within minutes and sent to your registered email.',
    category: 'Features',
    keywords: ['export', 'data', 'download', 'backup', 'csv', 'json']
  },
  {
    id: '8',
    question: 'What security measures do you have in place?',
    answer: 'We use enterprise-grade security including SSL encryption, two-factor authentication, regular security audits, and SOC 2 compliance. Your data is stored in secure, encrypted databases with regular backups.',
    category: 'Technical',
    keywords: ['security', 'encryption', 'ssl', 'safety', 'protection', 'compliance']
  }
];

export const quickResponses: QuickResponse[] = [
  { id: '1', text: 'How do I get started?', category: 'General' },
  { id: '2', text: 'Pricing information', category: 'Billing' },
  { id: '3', text: 'Technical support', category: 'Support' },
  { id: '4', text: 'Account settings', category: 'Account' },
  { id: '5', text: 'Mobile app', category: 'Features' },
  { id: '6', text: 'Contact support', category: 'Support' }
];