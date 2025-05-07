
import React, { useState } from 'react';

const MethodologySection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      title: "Diagnóstico estratégico",
      description: "Análise aprofundada do seu negócio, objetivos e desafios atuais.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Mapeamento de gargalos",
      description: "Identificação dos pontos críticos que estão travando o crescimento.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: "Plano de ação personalizado",
      description: "Desenvolvimento de estratégias sob medida para seu negócio.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Treinamentos e execuções",
      description: "Capacitação da sua equipe e implementação das estratégias.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Acompanhamento e suporte",
      description: "Monitoramento contínuo e ajustes para garantir resultados.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-infinity-950">
      <div className="infinity-container">
        <h2 className="section-title text-center">
          <span className="relative">
            METODOLOGIA
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Nosso processo foi desenhado para gerar clareza, ação e resultado real.
        </p>
        
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="hidden md:flex justify-between mb-1 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-infinity-800 -translate-y-1/2 z-0"></div>
            {steps.map((_, index) => (
              <div 
                key={index} 
                className={`w-8 h-8 rounded-full z-10 flex items-center justify-center ${
                  index <= activeStep! ? 'bg-infinity-600' : 'bg-infinity-900'
                }`}
              >
                <span className="text-white text-sm">{index + 1}</span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`infinity-card flex flex-col items-center text-center ${
                  activeStep === index ? 'shadow-glow-md border-infinity-500' : ''
                }`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className={`p-3 rounded-full mb-4 ${
                  activeStep === index ? 'bg-infinity-700 animate-glow-pulse' : 'bg-infinity-900'
                }`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
