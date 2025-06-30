# InsightSage

**Wisdom at your fingertips**

An AI-powered FAQ chatbot built with React, TypeScript, and Tailwind CSS. InsightSage provides intelligent responses to user queries with a beautiful, modern interface.

## Features

- 🤖 **Smart AI Responses** - Intelligent FAQ matching and fallback responses
- 🌙 **Dark/Light Mode** - Beautiful themes with black background option
- 💾 **Chat History** - Persistent chat sessions with export functionality
- ⚡ **Quick Responses** - Pre-defined questions for faster support
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Clean, professional interface with smooth animations
- 👍 **Feedback System** - Users can rate AI responses
- 📤 **Export Chat** - Download chat history as JSON

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Storage**: LocalStorage for chat persistence

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/insightsage-chatbot.git
cd insightsage-chatbot
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── ChatHeader.tsx   # Header with logo and controls
│   ├── ChatInput.tsx    # Message input component
│   ├── MessageBubble.tsx # Individual message display
│   ├── QuickResponses.tsx # Quick response buttons
│   ├── TypingIndicator.tsx # Loading animation
│   └── WelcomeMessage.tsx # Welcome screen
├── data/
│   └── faqData.ts       # FAQ database and quick responses
├── types/
│   └── index.ts         # TypeScript type definitions
├── utils/
│   ├── aiResponses.ts   # AI response generation logic
│   └── chatStorage.ts   # Chat persistence utilities
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## Customization

### Adding New FAQs

Edit `src/data/faqData.ts` to add new FAQ entries:

```typescript
{
  id: 'unique-id',
  question: 'Your question here',
  answer: 'Your answer here',
  category: 'General',
  keywords: ['keyword1', 'keyword2']
}
```

### Styling

The project uses Tailwind CSS with a custom color palette. Main colors:
- **Primary**: Blue tones for main UI elements
- **Success**: Green tones for AI responses
- **Dark**: Custom dark theme colors

### Branding

Update the logo and branding in:
- `src/components/ChatHeader.tsx`
- `src/components/WelcomeMessage.tsx`
- `index.html` (title and meta tags)

## Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@insightsage.com or create an issue in this repository.

---

**InsightSage** - Wisdom at your fingertips 🧠✨