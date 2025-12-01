import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { InfoPanel } from './components/InfoPanel';
import { ChatPanel } from './components/ChatPanel';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; content: string }>>([
    { role: 'ai', content: 'Hello! This is custom welcome message' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: message }]);
    setInput('');
    setIsLoading(true);

    try {
      // Call Flowise API
      const response = await fetch('https://cloud.flowiseai.com/api/v1/prediction/a24ebb8d-d82a-46df-b0dc-3ba2886ca12a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          question: message
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from API');
      }

      const data = await response.json();
      
      // Add AI response
      const aiResponse = data.text || data.answer || 'Sorry, I could not process that request.';
      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    } catch (error) {
      console.error('Error calling Flowise API:', error);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: 'This is a custom error message. Please try again later.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFAQClick = (question: string) => {
    handleSendMessage(question);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative size-full bg-[#fdfff0] overflow-hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {/* Layout Container */}
      <div className="h-full flex flex-col lg:flex-row">
        {/* Info Panel - Left Side */}
        <div
          className={`
            fixed lg:static inset-y-0 left-0 z-40
            w-full sm:w-[400px] lg:w-[437px]
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <InfoPanel onFAQClick={handleFAQClick} />
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Chat Panel - Right Side */}
        <div className="flex-1 flex flex-col min-h-full lg:p-8 p-4">
          <ChatPanel
            messages={messages}
            input={input}
            onInputChange={setInput}
            onSendMessage={() => handleSendMessage(input)}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}