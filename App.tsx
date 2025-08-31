
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import About from './components/About.tsx';
import CaseStudies from './components/CaseStudies.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-[#000010] min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.15)_0,_transparent_40%)] -z-1"></div>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;