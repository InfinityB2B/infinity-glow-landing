
import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-infinity-950/80 to-black z-0"></div>
      <div 
        className="absolute inset-0 z-0 opacity-30" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) contrast(1.2)'
        }}
      ></div>
      
      <div className="infinity-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
            Sua empresa cresce em visibilidade, mas as vendas não acompanham?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transformamos operação, marketing e vendas em um só ecossistema de resultados
          </p>
          
          <div className="mt-10">
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="infinity-btn-primary text-lg animate-glow-pulse"
            >
              Solicitar diagnóstico gratuito
            </button>
            
            <div className="mt-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-infinity-800/50">
                <span className="text-gray-300">+7 anos transformando empresas em todo o Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white cursor-pointer transition-colors animate-bounce-subtle"
      >
        <ArrowDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
