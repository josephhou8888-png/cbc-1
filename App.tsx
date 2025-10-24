
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Market from './components/Market';
import Technology from './components/Technology';
import Economics from './components/Economics';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Market />
        <Technology />
        <Economics />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
};

export default App;