import { useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
// Import Sophie's profile image
import sophieProfileImg from "../assets/sophie-profile.png";

interface Message {
  role: 'user' | 'ai';
  content: string;
}

interface ChatPanelProps {
  messages: Message[];
  input: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  isLoading?: boolean;
}

export function ChatPanel({ messages, input, onInputChange, onSendMessage, isLoading = false }: ChatPanelProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
      e.preventDefault();
      onSendMessage();
    }
  };

  // Starter prompts - only show when there's only the welcome message
  const starterPrompts = messages.length === 1 ? [
    "What is a bot?",
    "Who are you?"
  ] : [];

  return (
    <div className="flex flex-col h-full bg-white rounded-tl-[12px] rounded-tr-[12px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)] overflow-hidden">
      {/* Chat Header */}
      <div className="bg-[#d8e493] px-8 h-[60px] flex items-center shrink-0">
        <div className="flex items-center gap-[14px]">
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden shrink-0 flex-shrink-0" style={{ minWidth: '44px', minHeight: '44px', maxWidth: '44px', maxHeight: '44px' }}>
            <img 
              src={sophieProfileImg}
              alt="Sophie"
              className="w-full h-full"
              style={{ width: '44px', height: '44px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <h2 className="text-[20px] font-semibold text-black" style={{ fontFamily: 'Inter, sans-serif' }}>Sophie.AI</h2>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'ai' && (
              <div className="w-[44px] h-[44px] rounded-full overflow-hidden shrink-0" style={{ minWidth: '44px', minHeight: '44px', maxWidth: '44px', maxHeight: '44px' }}>
                <img 
                  src={sophieProfileImg}
                  alt="Sophie AI"
                  className="w-full h-full"
                  style={{ width: '44px', height: '44px', objectFit: 'cover', display: 'block' }}
                />
              </div>
            )}dde9c8] rounded-full overflow-hidden flex items-center justify-center shrink-0">
                <img 
                  src={sophieProfileImg}
                  alt="Sophie AI"
                  className="w-full h-full object-cover"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            <div
              className={`max-w-[70%] rounded-[12px] px-6 py-2 ${
                msg.role === 'user'
                  ? 'bg-[#d8e493] text-black'
                  : 'bg-[#f7f8f3] text-[#333333]'
              }`}
            >
              <p className="text-[16px] leading-[1.5] whitespace-pre-wrap" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {msg.content}
              </p>
            </div>
            {msg.role === 'user' && (
              <div className="w-[44px] h-[44px] bg-[#d8e493] rounded-full flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" fill="#b7c277"/>
                  <path d="M24 14c-3.3 0-6 2.7-6 6v4h12v-4c0-3.3-2.7-6-6-6z" fill="white"/>
                  <circle cx="24" cy="34" r="8" fill="white"/>
                </svg>
              </div>
            )}
          </div>
        ))}

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-[44px] h-[44px] min-w-[44px] min-h-[44px] bg-[#dde9c8] rounded-full overflow-hidden flex items-center justify-center shrink-0">
              <img 
                src={sophieProfileImg}
                alt="Sophie AI"
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="bg-[#f7f8f3] rounded-[12px] px-6 py-2">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#999999] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-[#999999] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-[#999999] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />

        {/* Starter Prompts */}
        {starterPrompts.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {starterPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onInputChange(prompt);
                  setTimeout(() => onSendMessage(), 0);
                }}
                className="px-[30px] py-2 bg-white rounded-[12px] shadow-[2px_3px_9px_1px_rgba(0,0,0,0.07)] text-[#6d6d6d] text-[14px] font-medium hover:bg-[#e6edc6] hover:text-[#b7c277] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {prompt}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="px-8 pb-6 pt-2 shrink-0">
        <div className="flex gap-2 items-center bg-white rounded-[12px] shadow-[0px_1px_4px_2px_rgba(0,0,0,0.07)] px-5 py-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about my work!"
            className="flex-1 outline-none text-[16px] text-[#333333] placeholder:text-[#999999] bg-transparent"
            style={{ fontFamily: 'Inter, sans-serif' }}
            disabled={isLoading}
          />
          <button
            onClick={onSendMessage}
            disabled={!input.trim() || isLoading}
            className="p-2 text-[#b7c277] hover:text-[#a8b367] disabled:text-[#cccccc] transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-center text-[14px] text-[#999999] mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
          Powered by <span className="font-semibold">Flowise</span>
        </p>
      </div>
    </div>
  );
}