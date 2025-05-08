
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 flowing-bg z-0"></div>
      <div className="glow-circle w-[800px] h-[800px] top-[-200px] right-[-200px] z-0"></div>
      <div className="glow-circle w-[600px] h-[600px] bottom-[-100px] left-[-100px] z-0"></div>
      <div className="glow-accent w-[300px] h-[300px] top-[20%] left-[15%] z-0"></div>
      
      <div className="infinity-container relative z-10 text-center px-6 md:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-8 leading-tight glow-text">
            Sua empresa está realmente crescendo ou morrendo?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Diagnosticamos, reestruturamos e potencializamos todo o funil do seu negócio — da operação ao faturamento. 
            Uma consultoria personalizada de verdade, feita para empresários que querem parar de apagar incêndios e começar a escalar com consistência.
          </p>
          
          <div className="mt-12">
            <Button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="infinity-btn-primary text-lg font-bold px-10 py-7 animate-glow-pulse"
              size="lg"
            >
              Solicitar Consultoria Agora
            </Button>
            
            <div className="mt-10">
              <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-lg bg-black/20 border border-infinity-800/30">
                <span className="text-gray-300 italic">+7 anos transformando empresas no Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white cursor-pointer transition-colors animate-bounce-subtle"
      >
        <ArrowDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
