
import React from 'react';

const ProblemSection = () => {
  const problems = [
    {
      title: "Sua equipe vende, mas não performa?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-infinity-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Seu funil parece furado, mas você não sabe onde está o vazamento?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-infinity-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "Você sente que está deixando dinheiro na mesa?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-infinity-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="problem-section" className="bg-black py-20">
      <div className="infinity-container">
        <h2 className="section-title text-center">
          <span className="relative">
            VOCÊ NÃO ESTÁ SOZINHO
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="infinity-card flex flex-col items-center text-center group"
            >
              <div className="group-hover:animate-glow-pulse">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{problem.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto p-6 rounded-lg bg-infinity-900/50 backdrop-blur-sm border border-infinity-800/30">
          <p className="text-gray-200 text-lg md:text-xl text-center">
            Essas dores fazem parte da rotina de muitos empresários que nos procuram — e nós sabemos exatamente como resolver.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
