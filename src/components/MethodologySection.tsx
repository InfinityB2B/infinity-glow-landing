
import React, { useState } from 'react';

const MethodologySection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      title: "Diagnóstico estratégico",
      description: "Análise aprofundada do seu negócio, objetivos e desafios atuais.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Mapeamento de gargalos",
      description: "Identificação dos pontos críticos que estão travando o crescimento.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: "Plano de ação personalizado",
      description: "Desenvolvimento de estratégias sob medida para seu negócio.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Treinamentos e execuções",
      description: "Capacitação da sua equipe e implementação das estratégias.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Acompanhamento e suporte",
      description: "Monitoramento contínuo e ajustes para garantir resultados.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="metodologia" className="relative py-24 overflow-hidden">
      {/* Background glow effects continuing from previous section */}
      <div className="absolute inset-0 flowing-bg z-0"></div>
      <div className="glow-circle w-[600px] h-[600px] top-[50%] right-[-100px] z-0"></div>
      <div className="glow-accent w-[300px] h-[300px] bottom-[30%] left-[5%] z-0"></div>
      
      <div className="infinity-container relative z-10">
        <h2 className="section-title text-center">
          <span className="relative white-glow-text">
            Do diagnóstico ao crescimento: uma jornada estratégica guiada passo a passo.
            <span className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <p className="section-subtitle text-center">
          Nosso processo foi construído para gerar clareza, corrigir gargalos, reorganizar o funil e transformar a estrutura 
          da sua empresa em um ecossistema que gera resultado de verdade. Tudo é feito lado a lado com você — com inteligência, 
          método e execução.
        </p>
        
        <div className="hidden md:flex justify-between mb-1 relative mt-16">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-infinity-800/50 -translate-y-1/2 z-0"></div>
          {steps.map((_, index) => (
            <div 
              key={index} 
              className={`w-12 h-12 rounded-full z-10 flex items-center justify-center ${
                index <= activeStep! ? 'bg-infinity-600' : 'bg-infinity-900/70 backdrop-blur-sm'
              }`}
            >
              <span className="text-white text-lg font-bold">{index + 1}</span>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`subtle-card p-8 flex flex-col items-center text-center ${
                activeStep === index ? 'border-infinity-500/50 shadow-glow-sm' : ''
              }`}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className={`p-4 rounded-full mb-6 ${
                activeStep === index ? 'bg-infinity-700 animate-glow-pulse' : 'bg-infinity-900/70'
              }`}>
                <div className="text-white">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-xl bg-gradient-to-r from-infinity-800/30 to-infinity-900/30 backdrop-blur-md border border-infinity-700/20">
          <p className="text-white text-xl text-center italic">
            "Nada aqui é automático, genérico ou terceirizado. A consultoria é conduzida diretamente pela equipe INFINITY, 
            com reuniões, treinamentos, materiais e suporte real. Você terá um time estratégico ao seu lado, analisando sua 
            empresa de ponta a ponta — como ela merece."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
