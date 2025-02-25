import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';
import Reading from './components/Reading';
import Conjugation from './components/Conjugation';
import Flashcards from './components/Flashcards';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-italian-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<Chatbot />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/conjugation" element={<Conjugation />} />
            <Route path="/flashcards" element={<Flashcards />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;