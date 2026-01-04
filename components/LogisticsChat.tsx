
import React, { useState, useRef, useEffect } from 'react';
import { getLogisticsAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const LogisticsChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Welcome to the Executive Logistics portal. I am the North Pole AI. How may I assist your inquiry regarding our global operations?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setIsTyping(true);

    const response = await getLogisticsAdvice(userText);
    setMessages(prev => [...prev, { role: 'assistant', content: response || 'Data retrieval failure.' }]);
    setIsTyping(false);
  };

  return (
    <section id="workshop" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#022b21] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-[#D4AF37]/10 p-6 border-b border-[#D4AF37]/20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-[#D4AF37] font-bold uppercase tracking-widest">NP-Logistics Console v4.2.0</h3>
            </div>
            <div className="text-[#D4AF37]/60 text-xs">ENCRYPTED CONNECTION</div>
          </div>
          
          <div 
            ref={scrollRef}
            className="h-[400px] overflow-y-auto p-6 space-y-6 scroll-smooth"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-xl ${
                  m.role === 'user' 
                    ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-white rounded-tr-none' 
                    : 'bg-[#01160e] border border-white/10 text-slate-300 rounded-tl-none'
                }`}>
                  <div className="text-[10px] uppercase tracking-widest mb-1 opacity-50 font-bold">
                    {m.role === 'user' ? 'Stakeholder' : 'Executive AI'}
                  </div>
                  <p className="text-sm leading-relaxed">{m.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#01160e] border border-white/10 p-4 rounded-xl rounded-tl-none">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-6 bg-[#01160e]/50 border-t border-[#D4AF37]/20">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about global distribution, toy QA, or supersonic flight..."
                className="flex-1 bg-black/40 border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button 
                type="submit"
                disabled={isTyping}
                className="bg-[#D4AF37] text-[#01160e] px-8 py-3 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-[#f7e7ce] transition-colors disabled:opacity-50"
              >
                Query
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogisticsChat;
