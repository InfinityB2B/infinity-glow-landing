
import React from 'react';
import { Brain, RefreshCcw, Puzzle, TrendingUp, Handshake } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Brain className="h-12 w-12 text-infinity-500" />,
      title: "Diagnóstico individual e preciso",
      description: "Análise completa das áreas críticas do seu negócio."
    },
    {
      icon: <RefreshCcw className="h-12 w-12 text-infinity-500" />,
      title: "Funil completo, da atração ao pós-venda",
      description: "Visão integrada de todo o processo comercial."
    },
    {
      icon: <Puzzle className="h-12 w-12 text-infinity-500" />,
      title: "Integração entre áreas",
      description: "Alinhamento total entre marketing, vendas e operação."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-infinity-500" />,
      title: "Plano estratégico sob medida",
      description: "Estratégias personalizadas para seu negócio."
    },
    {
      icon: <Handshake className="h-12 w-12 text-infinity-500" />,
      title: "Acompanhamento verdadeiro",
      description: "Suporte contínuo e ajustes estratégicos."
    }
  ];

  return (
    <section id="solution-section" className="py-20 bg-gradient-to-b from-infinity-950 to-black">
      <div className="infinity-container">
        <h2 className="section-title text-center mb-6">
          <span className="relative">
            Consultoria personalizada, prática e estratégica para quem quer escalar de forma sólida.
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <p className="section-subtitle text-center max-w-3xl mx-auto mb-12">
          A INFINITY atua onde a maioria não sabe nem olhar: no alinhamento real entre marketing, vendas, operação e crescimento. 
          Aqui, nada é genérico. Cada empresa recebe um diagnóstico único, um plano estratégico exclusivo e acompanhamento direto da nossa equipe.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-12">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="infinity-card flex flex-col items-center text-center group h-full"
            >
              <div className="mb-4 group-hover:animate-glow-pulse">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
              <p className="text-gray-300 text-sm">{solution.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-200 text-lg italic opacity-80">
            São mais de 7 anos atendendo empresas em todo o Brasil, com um único objetivo: transformar estrutura em resultado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
