
import React from 'react';

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-20 bg-gradient-to-b from-black to-infinity-950">
      <div className="infinity-container">
        <h2 className="section-title text-center">
          <span className="relative">
            A SOLUÇÃO COM NOME E SOBRENOME
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <div className="mt-12 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              A INFINITY nasceu com a missão de transformar empresas de dentro para fora. Com mais de 7 anos no mercado, 
              já ajudamos centenas de negócios a destravar seu potencial de vendas e estrutura.
            </p>
            
            <div className="glow-line"></div>
            
            <p className="text-white text-xl font-medium italic">
              "Não somos uma consultoria de prateleira. Cada cliente é tratado como um projeto único e exclusivo."
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 gap-6">
            <div className="infinity-card transform transition-transform hover:scale-[1.02] hover:shadow-glow-md">
              <div className="flex items-center">
                <div className="mr-6 p-3 bg-infinity-900 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-infinity-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">INFINITY ACADEMY</h3>
                  <p className="text-gray-300">Consultoria e Treinamentos</p>
                </div>
              </div>
            </div>
            
            <div className="infinity-card transform transition-transform hover:scale-[1.02] hover:shadow-glow-md">
              <div className="flex items-center">
                <div className="mr-6 p-3 bg-infinity-900 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-infinity-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">INFINITY B2B</h3>
                  <p className="text-gray-300">Assessoria e Serviços</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
