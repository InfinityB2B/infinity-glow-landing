
import React from 'react';
import { Search, Wrench, Target, DollarSign, TrendingDown } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      title: "Falta clareza sobre onde está o real gargalo.",
      icon: <Search className="h-8 w-8 text-infinity-500 mb-4" />
    },
    {
      title: "Estrutura desalinhada entre marketing, vendas e operação.",
      icon: <Wrench className="h-8 w-8 text-infinity-500 mb-4" />
    },
    {
      title: "Equipe executando, mas sem método.",
      icon: <Target className="h-8 w-8 text-infinity-500 mb-4" />
    },
    {
      title: "Desperdício de recursos e oportunidades.",
      icon: <DollarSign className="h-8 w-8 text-infinity-500 mb-4" />
    },
    {
      title: "Decisões baseadas em tentativa e erro.",
      icon: <TrendingDown className="h-8 w-8 text-infinity-500 mb-4" />
    }
  ];

  return (
    <section id="problem-section" className="py-20 bg-gradient-to-b from-[#1A0000] to-black">
      <div className="infinity-container">
        <h2 className="section-title text-center mb-6">
          <span className="relative">
            Sua empresa está operando, mas não está performando. Isso tem um custo.
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <p className="section-subtitle text-center max-w-3xl mx-auto mb-12">
          Boa parte dos empresários acredita que o problema está nas vendas. Mas o verdadeiro prejuízo está no que eles ainda não conseguem enxergar: falhas no funil, gargalos operacionais e decisões sem base estratégica.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-12">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="infinity-card flex flex-col items-center text-center group"
            >
              <div className="group-hover:animate-glow-pulse">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{problem.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto p-6 rounded-lg bg-infinity-900/30 backdrop-blur-sm">
          <p className="text-gray-200 text-lg md:text-xl text-center">
            O problema da sua empresa não é falta de esforço. É ausência de estrutura, estratégia e visão de funil ponta a ponta. E é exatamente isso que resolvemos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
