
import React from 'react';
import { Brain, RefreshCcw, Puzzle, TrendingUp, Handshake } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Brain className="h-14 w-14 text-infinity-500" />,
      title: "Diagnóstico individual e preciso",
      description: "Análise completa das áreas críticas do seu negócio."
    },
    {
      icon: <RefreshCcw className="h-14 w-14 text-infinity-500" />,
      title: "Funil completo, da atração ao pós-venda",
      description: "Visão integrada de todo o processo comercial."
    },
    {
      icon: <Puzzle className="h-14 w-14 text-infinity-500" />,
      title: "Integração entre áreas",
      description: "Alinhamento total entre marketing, vendas e operação."
    },
    {
      icon: <TrendingUp className="h-14 w-14 text-infinity-500" />,
      title: "Plano estratégico sob medida",
      description: "Estratégias personalizadas para seu negócio."
    },
    {
      icon: <Handshake className="h-14 w-14 text-infinity-500" />,
      title: "Acompanhamento verdadeiro",
      description: "Suporte contínuo e ajustes estratégicos."
    }
  ];

  return (
    <section id="solucao" className="relative py-24 overflow-hidden">
      {/* Background glow effects continuing from previous section */}
      <div className="absolute inset-0 flowing-bg z-0"></div>
      <div className="glow-circle w-[800px] h-[800px] top-[10%] left-[-300px] z-0"></div>
      <div className="glow-accent w-[250px] h-[250px] bottom-[20%] right-[15%] z-0"></div>
      
      <div className="infinity-container relative z-10">
        <h2 className="section-title text-center mb-6">
          <span className="relative">
            Consultoria personalizada, prática e estratégica para quem quer escalar de forma sólida.
            <span className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <p className="section-subtitle text-center">
          A INFINITY atua onde a maioria não sabe nem olhar: no alinhamento real entre marketing, vendas, operação e crescimento. 
          Aqui, nada é genérico. Cada empresa recebe um diagnóstico único, um plano estratégico exclusivo e acompanhamento direto da nossa equipe.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-16">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="subtle-card p-8 flex flex-col items-center text-center group h-full"
            >
              <div className="mb-6 group-hover:animate-glow-pulse">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-300">{solution.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-200 text-xl italic opacity-90">
            São mais de 7 anos atendendo empresas em todo o Brasil, com um único objetivo: transformar estrutura em resultado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
