
import React from 'react';
import { cn } from '@/lib/utils';

const ResultsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CEO",
      company: "Tech Solutions",
      text: "A consultoria da INFINITY transformou completamente nossa abordagem de vendas. Em apenas 3 meses, aumentamos nossa conversão em 40%."
    },
    {
      name: "Ana Ribeiro",
      position: "Diretora Comercial",
      company: "Mega Empreendimentos",
      text: "A metodologia aplicada pela equipe da INFINITY nos deu clareza sobre os gargalos que impediam nosso crescimento. Hoje temos processos bem definidos e equipe alinhada."
    },
    {
      name: "Roberto Mendes",
      position: "Fundador",
      company: "RM Consultoria",
      text: "Antes da INFINITY, nosso funil de vendas era confuso e ineficiente. Agora temos um processo claro que gera resultados previsíveis mês após mês."
    }
  ];
  
  const caseStudies = [
    {
      title: "E-commerce de Moda",
      before: [
        "Equipe desmotivada",
        "Taxa de conversão de 1.2%",
        "Alto custo de aquisição"
      ],
      after: [
        "Time alinhado e proativo",
        "Taxa de conversão de 3.8%",
        "Redução de 35% no CAC"
      ]
    },
    {
      title: "Indústria Metalúrgica",
      before: [
        "Processos manuais e ineficientes",
        "Ciclo de vendas de 45 dias",
        "Dependência de poucos clientes"
      ],
      after: [
        "Automação de processos-chave",
        "Ciclo de vendas reduzido para 28 dias",
        "Diversificação da carteira de clientes"
      ]
    }
  ];

  return (
    <section id="resultados" className="py-20 bg-gradient-to-b from-infinity-950 to-black">
      <div className="infinity-container">
        <h2 className="section-title text-center">
          <span className="relative">
            RESULTADOS CONCRETOS
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        {/* Testimonials */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="infinity-card relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-10 h-10 opacity-30 text-infinity-500 transform translate-x-3 -translate-y-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.904-2.934 1.05-1.267 2.107-1.932 3.17-1.996.138-.008.256-.015.256-.015.78-.036 1.203-.353 1.203-.754 0-.4-.412-.71-1.192-.71C12.11 6.293 11.488 6 11.012 6c-.459 0-.945.22-1.15.307-.76.323-1.293.766-1.58 1.33-.32.615-.493 1.256-.514 1.897-.02.56.13 1.126.445 1.607.216.332.517.595.905.83-.4.047-.076.094-.11.146-.22.29-.328.57-.323.847.01.46.174.848.492 1.17.338.34.83.544 1.464.612.243.02.474.034.695.034 1.567 0 2.744-.67 3.5-1.992.6-.96.9-2.006.9-3.027zM22 15.757c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.705-1.327-.832-.56-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.904-2.934 1.05-1.267 2.107-1.932 3.17-1.996.268-.02.27-.238.274-.47.003-.072.007-.146.023-.22.024-.36-.493-.688-1.237-.7-.79-.012-1.413-.306-1.888-.306-.46 0-.945.217-1.15.307-.76.323-1.293.766-1.58 1.33-.32.615-.493 1.256-.514 1.897-.02.56.13 1.126.445 1.607.216.332.517.595.905.83-.4.047-.076.094-.11.146-.22.29-.328.57-.323.843.01.46.174.848.492 1.17.338.34.83.544 1.464.612.243.02.474.034.695.034 1.567 0 2.744-.67 3.5-1.992.6-.96.9-2.006.9-3.027z" />
                </svg>
              </div>
              
              <p className="text-gray-300 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-infinity-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Case Studies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Estudos de Caso</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="infinity-card"
              >
                <h4 className="text-xl font-bold text-white mb-4">{study.title}</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black/50 rounded-lg">
                    <h5 className="text-infinity-500 font-bold mb-2">Antes da INFINITY</h5>
                    <ul className="text-gray-300 space-y-2">
                      {study.before.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="h-4 w-4 mr-2 text-infinity-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-infinity-900/30 rounded-lg">
                    <h5 className="text-infinity-400 font-bold mb-2">Depois da INFINITY</h5>
                    <ul className="text-gray-200 space-y-2">
                      {study.after.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="h-4 w-4 mr-2 text-infinity-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className={cn(
            "px-8 py-4 rounded-lg",
            "bg-gradient-to-r from-infinity-950/50 to-infinity-900/50",
            "border border-infinity-700/30 backdrop-blur-sm"
          )}>
            <div className="text-3xl font-bold text-white">+100</div>
            <div className="text-gray-300">empresas atendidas</div>
          </div>
          
          <div className={cn(
            "px-8 py-4 rounded-lg",
            "bg-gradient-to-r from-infinity-950/50 to-infinity-900/50",
            "border border-infinity-700/30 backdrop-blur-sm"
          )}>
            <div className="text-3xl font-bold text-white">+1.000</div>
            <div className="text-gray-300">horas de diagnósticos aplicados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
