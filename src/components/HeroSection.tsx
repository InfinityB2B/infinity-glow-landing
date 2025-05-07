
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-infinity-950/90 to-black z-0"></div>
      <div 
        className="absolute inset-0 z-0 opacity-30" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) contrast(1.2)'
        }}
      ></div>
      
      {/* Red glow overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-infinity-500 blur-3xl"></div>
      
      <div className="infinity-container relative z-10 text-center px-6 md:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-infinity-500 mb-6 leading-tight glow-text">
            Sua empresa está realmente crescendo ou morrendo?
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Diagnosticamos, reestruturamos e potencializamos todo o funil do seu negócio — da operação ao faturamento. 
            Uma consultoria personalizada de verdade, feita para empresários que querem parar de apagar incêndios e começar a escalar com consistência.
          </p>
          
          <div className="mt-10">
            <Button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="infinity-btn-primary text-lg font-bold animate-glow-pulse px-8 py-6"
              size="lg"
            >
              Fale Conosco Agora
            </Button>
            
            <div className="mt-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-infinity-800/50">
                <span className="text-gray-300 italic opacity-60">+7 anos transformando empresas no Brasil</span>
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
