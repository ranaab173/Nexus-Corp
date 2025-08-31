
import React, { useState, useEffect } from 'react';
import { ImageAssets } from './ImageAssets.tsx';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Services', 'About', 'Case Studies', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex-shrink-0">
            <ImageAssets.logo className="h-8 w-auto" />
          </a>
          <nav className="hidden md:flex md:space-x-10">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group">
                {link}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-block px-5 py-2 text-sm font-medium text-white bg-transparent border-2 border-cyan-400 rounded-md relative overflow-hidden group hover:text-black">
            <span className="absolute inset-0 bg-cyan-400 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
            <span className="relative">Get In Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;