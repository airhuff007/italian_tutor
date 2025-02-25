import React from 'react';
import { Link } from 'react-router-dom';
import { Languages, BookOpen, MessageSquare, Slash as Flashcard, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-italian-green text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Languages className="h-8 w-8" />
            <span className="text-xl font-bold">Impara l'Italiano</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-italian-white transition-colors">
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/chat" className="flex items-center space-x-1 hover:text-italian-white transition-colors">
              <MessageSquare className="h-5 w-5" />
              <span>Chat with Sofia</span>
            </Link>
            <Link to="/reading" className="flex items-center space-x-1 hover:text-italian-white transition-colors">
              <BookOpen className="h-5 w-5" />
              <span>Reading</span>
            </Link>
            <Link to="/conjugation" className="flex items-center space-x-1 hover:text-italian-white transition-colors">
              <Languages className="h-5 w-5" />
              <span>Conjugation</span>
            </Link>
            <Link to="/flashcards" className="flex items-center space-x-1 hover:text-italian-white transition-colors">
              <Flashcard className="h-5 w-5" />
              <span>Flashcards</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;