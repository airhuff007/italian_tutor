// ChatbotComponent.jsx - UI for the chatbot

import React, { useState, useEffect, useRef } from 'react';
import ChatbotService from './ChatbotService';

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Ciao! Sono Sofia, il tuo tutor di italiano. Come posso aiutarti oggi? (Hello! I\'m Sofia, your Italian tutor. How can I help you today?)' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [corrections, setCorrections] = useState(null);
  const [contextMenu, setContextMenu] = useState(false);
  const [levelMenu, setLevelMenu] = useState(false);
  
  // Create chatbot service instance
  const chatbotService = useRef(new ChatbotService()).current;
  
  // Scroll to bottom of messages
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Get conversation suggestions on component mount
  useEffect(() => {
    setSuggestions(chatbotService.getSuggestions());
  }, []);
  
  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;
    
    // Add user message to state
    setMessages(prev => [...prev, { sender: 'user', text: inputValue }]);
    
    // Clear input and show loading
    setInputValue('');
    setIsLoading(true);
    setCorrections(null);
    
    // Send to chatbot service
    const response = await chatbotService.sendMessage(inputValue);
    
    // Update with bot response
    setMessages(prev => [...prev, { sender: 'bot', text: response.message }]);
    
    // Show corrections if any
    if (response.corrections) {
      setCorrections(response.corrections);
    }
    
    // Update suggestions based on new context
    setSuggestions(chatbotService.getSuggestions());
    
    setIsLoading(false);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.italian);
    setShowSuggestions(false);
  };
  
  const setContext = (context) => {
    const response = chatbotService.setContext(context);
    setMessages(prev => [...prev, { sender: 'bot', text: response }]);
    setSuggestions(chatbotService.getSuggestions());
    setContextMenu(false);
  };
  
  const setProficiencyLevel = (level) => {
    const response = chatbotService.setProficiencyLevel(level);
    setMessages(prev => [...prev, { sender: 'bot', text: response }]);
    setLevelMenu(false);
  };
  
  const clearConversation = () => {
    const response = chatbotService.clearConversation();
    setMessages([{ sender: 'bot', text: response }]);
    setCorrections(null);
  };
  
  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Sofia - Tutor di Italiano</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => setContextMenu(!contextMenu)} 
            className="px-3 py-1 bg-white text-green-600 rounded text-sm"
          >
            Scenario
          </button>
          <button 
            onClick={() => setLevelMenu(!levelMenu)} 
            className="px-3 py-1 bg-white text-green-600 rounded text-sm"
          >
            Livello
          </button>
        </div>
      </div>
      
      {/* Context Menu Dropdown */}
      {contextMenu && (
        <div className="absolute right-4 mt-12 bg-white shadow-lg rounded-md z-10">
          <ul className="py-1">
            <li onClick={() => setContext('general')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Generale</li>
            <li onClick={() => setContext('restaurant')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ristorante</li>
            <li onClick={() => setContext('directions')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Direzioni</li>
            <li onClick={() => setContext('shopping')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shopping</li>
            <li onClick={() => setContext('weather')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tempo</li>
          </ul>
        </div>
      )}
      
      {/* Level Menu Dropdown */}
      {levelMenu && (
        <div className="absolute right-4 mt-12 bg-white shadow-lg rounded-md z-10">
          <ul className="py-1">
            <li onClick={() => setProficiencyLevel('beginner')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Principiante</li>
            <li onClick={() => setProficiencyLevel('intermediate')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Intermedio</li>
            <li onClick={() => setProficiencyLevel('advanced')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Avanzato</li>
          </ul>
        </div>
      )}
      
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}>
            <div 
              className={`inline-block p-3 rounded-lg ${
                message.sender === 'user' 
                  ? 'bg-green-500 text-white rounded-br-none' 
                  : 'bg-gray-200 text-gray-800 rounded-bl-none'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        
        {/* Corrections display */}
        {corrections && (
          <div className="mb-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <span className="font-medium">Correzione: </span>
                  {corrections[0].original} → {corrections[0].correction}
                </p>
                <p className="text-sm text-yellow-700 mt-1">
                  {corrections[0].explanation}
                </p>
              </div>
            </div>
          </div>
        )}
        
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-200 text-gray-800 p-3 rounded-lg rounded-bl-none flex items-center">
              <div className="dot-flashing"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Suggestion chips */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="bg-gray-100 p-2 flex flex-wrap">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="m-1 px-3 py-1 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50"
            >
              {suggestion.italian}
            </button>
          ))}
        </div>
      )}
      
      {/* Input Box */}
      <div className="border-t p-3 bg-white">
        <div className="flex items-center">
          <button 
            onClick={() => setShowSuggestions(!showSuggestions)} 
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Scrivi un messaggio in italiano... (Write a message in Italian...)"
            className="flex-1 p-2 mx-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSendMessage}
            disabled={inputValue.trim() === ''}
            className={`p-2 rounded-full ${
              inputValue.trim() === '' 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-white bg-green-500 hover:bg-green-600'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-between mt-2">
          <button 
            onClick={clearConversation}
            className="text-xs text-gray-500 hover:text-red-500"
          >
            Cancella conversazione (Clear conversation)
          </button>
          
          <button className="text-xs text-gray-500 hover:text-green-500">
            🎤 Parla (Speak)
          </button>
        </div>
      </div>
      
      {/* CSS for loading animation */}
      <style jsx>{`
        .dot-flashing {
          position: relative;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #9880ff;
          color: #9880ff;
          animation: dot-flashing 1s infinite linear alternate;
          animation-delay: 0.5s;
        }
        .dot-flashing::before, .dot-flashing::after {
          content: '';
          display: inline-block;
          position: absolute;
          top: 0;
        }
        .dot-flashing::before {
          left: -15px;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #9880ff;
          color: #9880ff;
          animation: dot-flashing 1s infinite alternate;
          animation-delay: 0s;
        }
        .dot-flashing::after {
          left: 15px;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #9880ff;
          color: #9880ff;
          animation: dot-flashing 1s infinite alternate;
          animation-delay: 1s;
        }
        @keyframes dot-flashing {
          0% {
            background-color: #9880ff;
          }
          50%, 100% {
            background-color: rgba(152, 128, 255, 0.2);
          }
        }
      `}</style>
    </div>
  );
};

export default ChatbotComponent;