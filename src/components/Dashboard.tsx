import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, BarChart2, BookOpen, MessageSquare, Languages, Slash as Flashcard } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-italian-green">Benvenuto!</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            <span className="text-lg font-semibold">Level 3</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-italian-green" />
            <span className="text-lg font-semibold">7 Day Streak</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-italian-green">
          <h3 className="text-xl font-semibold mb-4">Today's Progress</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Words Learned</span>
              <span className="font-semibold">12/20</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-italian-green h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-italian-red">
          <h3 className="text-xl font-semibold mb-4">Weekly Stats</h3>
          <div className="flex items-center space-x-4">
            <BarChart2 className="h-12 w-12 text-italian-red" />
            <div>
              <p className="text-sm text-gray-600">Practice Time</p>
              <p className="text-2xl font-bold">3.5 hrs</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold mb-4">Next Lesson</h3>
          <p className="text-gray-600 mb-2">Food and Restaurants</p>
          <button className="bg-italian-green text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Start Learning
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/chat" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <MessageSquare className="h-8 w-8 text-italian-green mb-4" />
          <h3 className="text-lg font-semibold mb-2">Chat with Sofia</h3>
          <p className="text-gray-600">Practice conversations with our AI tutor</p>
        </Link>

        <Link to="/reading" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <BookOpen className="h-8 w-8 text-italian-red mb-4" />
          <h3 className="text-lg font-semibold mb-2">Reading Practice</h3>
          <p className="text-gray-600">Improve comprehension with Italian texts</p>
        </Link>

        <Link to="/conjugation" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <Languages className="h-8 w-8 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Verb Conjugation</h3>
          <p className="text-gray-600">Master Italian verb forms</p>
        </Link>

        <Link to="/flashcards" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <Flashcard className="h-8 w-8 text-purple-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Flashcards</h3>
          <p className="text-gray-600">Review vocabulary and phrases</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;