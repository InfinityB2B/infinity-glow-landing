
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white flex items-center">
          <span className="glow-text bg-clip-text text-transparent bg-gradient-to-r from-white to-infinity-300">
            INFINITY
          </span>
          <span className="ml-1 text-sm font-normal text-infinity-300 hidden sm:inline">Consultoria</span>
        </a>
        
        <div className="hidden md:flex space-x-10">
          <a href="#solucao" className="text-gray-300 hover:text-white transition-colors text-lg">Soluções</a>
          <a href="#metodologia" className="text-gray-300 hover:text-white transition-colors text-lg">Metodologia</a>
          <a href="#resultados" className="text-gray-300 hover:text-white transition-colors text-lg">Resultados</a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-lg">FAQ</a>
        </div>

        <button 
          className="hidden md:block bg-infinity-600 hover:bg-infinity-700 hover:shadow-glow-sm text-white px-6 py-2 rounded-md font-medium transition-all duration-300"
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Solicitar Consultoria
        </button>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-black via-infinity-950/90 to-infinity-950/90 absolute w-full backdrop-blur-lg">
          <div className="px-4 py-6 space-y-6 flex flex-col">
            <a 
              href="#solucao" 
              className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluções
            </a>
            <a 
              href="#metodologia" 
              className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Metodologia
            </a>
            <a 
              href="#resultados" 
              className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Resultados
            </a>
            <a 
              href="#faq" 
              className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#contato" 
              className="bg-infinity-600 hover:bg-infinity-700 text-white py-3 rounded-md font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Consultoria
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
