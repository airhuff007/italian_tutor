import React from 'react';
import { Bookmark, RotateCcw } from 'lucide-react';

const Flashcards = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-italian-green">Flashcards</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md">
            <Bookmark className="h-5 w-5 text-italian-green" />
            <span>Saved Cards</span>
          </button>
        </div>
      </div>

      <div className="relative h-96">
        <div className="absolute inset-0 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-center transform transition-transform duration-500 cursor-pointer hover:shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ciao</h2>
          <p className="text-gray-500 mb-8">Click to reveal translation</p>
          <div className="absolute bottom-4 right-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <RotateCcw className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-opacity-90">
          Incorrect
        </button>
        <button className="px-6 py-2 bg-italian-green text-white rounded-lg hover:bg-opacity-90">
          Correct
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-2">Common Phrases</h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">24 cards</span>
            <span className="text-italian-green">75% mastered</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-2">Food & Dining</h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">32 cards</span>
            <span className="text-italian-green">60% mastered</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-2">Travel</h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">18 cards</span>
            <span className="text-italian-green">45% mastered</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-2">Numbers</h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">20 cards</span>
            <span className="text-italian-green">90% mastered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;