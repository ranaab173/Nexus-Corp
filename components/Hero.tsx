
import React from 'react';
import Globe from './Globe.tsx';
import ArrowRightIcon from './icons/ArrowRightIcon.tsx';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute inset-0 z-0">
         <Globe />
      </div>
      <div className="relative z-20 container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-white mb-4">
          <span className="glow-text-cyan">Synthesizing</span>
          <br />
          <span className="glow-text-purple">Tomorrow's Solutions</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          We are an elite consultancy architecting the future of business through strategic innovation and technological mastery.
        </p>
        <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-cyan-400 rounded-md shadow-lg shadow-cyan-500/30 hover:bg-cyan-300 transform hover:scale-105 transition-all duration-300">
          Explore Our Services
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;