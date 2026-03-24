import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIAgentWidget = () => {
    // Auto-open logic
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "How can I help you today? Let me know, I will convey your message to the master.", sender: 'ai' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        // Auto open after a short delay
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        
        const newMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, newMsg]);
        setInput('');
        
        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, { 
                id: Date.now(), 
                text: "Message received! I'll make sure the master gets this right away. Anything else?", 
                sender: 'ai' 
            }]);
        }, 1000);
    };

    return (
        <div className="ai-widget-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="ai-chat-window glass"
                    >
                        <div className="ai-chat-header">
                            <div className="ai-header-info">
                                <div className="ai-avatar bg-accent">
                                    <Sparkles size={16} color="white" />
                                </div>
                                <div>
                                    <h4>AI Assistant</h4>
                                    <span>Online</span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="ai-close-btn" aria-label="Close Chat">
                                <X size={20} />
                            </button>
                        </div>
                        
                        <div className="ai-chat-body">
                            {messages.map(msg => (
                                <div key={msg.id} className={`ai-message-wrapper ${msg.sender}`}>
                                    <div className="ai-message">
                                        <p>{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        
                        <div className="ai-chat-footer">
                            <form onSubmit={handleSend} className="ai-input-form">
                                <input 
                                    type="text" 
                                    placeholder="Type a message..." 
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <button type="submit" className="ai-send-btn" aria-label="Send Message" disabled={!input.trim()}>
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isOpen && (
                <motion.button 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ai-trigger-btn"
                    onClick={() => setIsOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Open AI Chat"
                >
                    <Bot size={28} />
                    <span className="ai-tooltip">Chatbot for Help ✨</span>
                </motion.button>
            )}
        </div>
    );
};

export default AIAgentWidget;
