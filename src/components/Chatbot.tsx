import React from 'react';

const Chatbot = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-italian-green">Chat with Sofia</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-italian-green flex items-center justify-center">
            <span className="text-white font-semibold">S</span>
          </div>
          <div className="flex-1">
            <p className="text-gray-600 mb-2">Ciao! I'm Sofia, your Italian conversation partner. How can I help you practice today?</p>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 text-sm bg-italian-green/10 text-italian-green rounded-full hover:bg-italian-green/20">
                Order at a Restaurant
              </button>
              <button className="px-3 py-1 text-sm bg-italian-green/10 text-italian-green rounded-full hover:bg-italian-green/20">
                Ask for Directions
              </button>
              <button className="px-3 py-1 text-sm bg-italian-green/10 text-italian-green rounded-full hover:bg-italian-green/20">
                Basic Greetings
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Type your message in Italian..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-italian-green"
            />
            <button className="px-4 py-2 bg-italian-green text-white rounded-lg hover:bg-opacity-90">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;