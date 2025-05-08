
import React from 'react';
import { Search, Wrench, Target, DollarSign, TrendingDown } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      title: "Falta clareza sobre onde está o real gargalo.",
      icon: <Search className="h-10 w-10 text-infinity-500 mb-5" />
    },
    {
      title: "Estrutura desalinhada entre marketing, vendas e operação.",
      icon: <Wrench className="h-10 w-10 text-infinity-500 mb-5" />
    },
    {
      title: "Equipe executando, mas sem método.",
      icon: <Target className="h-10 w-10 text-infinity-500 mb-5" />
    },
    {
      title: "Desperdício de recursos e oportunidades.",
      icon: <DollarSign className="h-10 w-10 text-infinity-500 mb-5" />
    },
    {
      title: "Decisões baseadas em tentativa e erro.",
      icon: <TrendingDown className="h-10 w-10 text-infinity-500 mb-5" />
    }
  ];

  return (
    <section id="problem-section" className="relative py-24 overflow-hidden">
      {/* Background glow effects continuing from hero */}
      <div className="absolute inset-0 flowing-bg z-0"></div>
      <div className="glow-circle w-[700px] h-[700px] top-[30%] right-[-200px] z-0"></div>
      <div className="glow-accent w-[200px] h-[200px] bottom-[10%] left-[20%] z-0"></div>
      
      <div className="infinity-container relative z-10">
        <h2 className="section-title text-center mb-6">
          <span className="relative">
            Sua empresa está operando, mas não está performando. Isso tem um custo.
            <span className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <p className="section-subtitle text-center">
          Boa parte dos empresários acredita que o problema está nas vendas. Mas o verdadeiro prejuízo está no que eles ainda não conseguem enxergar: falhas no funil, gargalos operacionais e decisões sem base estratégica.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-16">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="subtle-card p-8 flex flex-col items-center text-center group"
            >
              <div className="group-hover:animate-glow-pulse">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{problem.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto p-8 rounded-xl backdrop-blur-lg bg-infinity-900/20 border border-infinity-800/30">
          <p className="text-gray-200 text-xl md:text-2xl text-center leading-relaxed">
            O problema da sua empresa não é falta de esforço. É ausência de estrutura, estratégia e visão de funil ponta a ponta. E é exatamente isso que resolvemos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
