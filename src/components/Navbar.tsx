
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
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white flex items-center">
          <span className="glow-text bg-clip-text text-transparent bg-gradient-to-r from-white to-infinity-300">
            INFINITY
          </span>
          <span className="ml-1 text-sm font-normal text-infinity-300 hidden sm:inline">Consultoria</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#solucao" className="text-gray-300 hover:text-white transition-colors">Soluções</a>
          <a href="#metodologia" className="text-gray-300 hover:text-white transition-colors">Metodologia</a>
          <a href="#resultados" className="text-gray-300 hover:text-white transition-colors">Resultados</a>
          <a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a>
        </div>

        <button 
          className="infinity-btn-primary hidden md:block"
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Diagnóstico Gratuito
        </button>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-black to-infinity-950 absolute w-full">
          <div className="px-4 py-4 space-y-4 flex flex-col">
            <a 
              href="#solucao" 
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluções
            </a>
            <a 
              href="#metodologia" 
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Metodologia
            </a>
            <a 
              href="#resultados" 
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resultados
            </a>
            <a 
              href="#contato" 
              className="infinity-btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Diagnóstico Gratuito
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
