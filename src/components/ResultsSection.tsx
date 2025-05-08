
import React from 'react';
import { cn } from '@/lib/utils';
import { BarChart3, LineChart, ArrowUpRight, TrendingUp } from 'lucide-react';

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
  
  const metrics = [
    {
      label: "Taxa de conversão em vendas",
      before: "0.8%",
      after: "4.2%",
      icon: <TrendingUp className="h-5 w-5 text-infinity-500" />
    },
    {
      label: "Tempo médio de fechamento",
      before: "23 dias",
      after: "9 dias",
      icon: <TrendingUp className="h-5 w-5 text-infinity-500" />
    },
    {
      label: "CAC (Custo de Aquisição por Cliente)",
      before: "Alto e descontrolado",
      after: "Reduzido e previsível",
      icon: <TrendingUp className="h-5 w-5 text-infinity-500" />
    },
    {
      label: "LTV (Valor do Cliente ao Longo do Tempo)",
      before: "Baixo e não explorado",
      after: "Elevado e recorrente",
      icon: <TrendingUp className="h-5 w-5 text-infinity-500" />
    },
    {
      label: "Receita recorrente",
      before: "Inexistente",
      after: "Em crescimento",
      icon: <TrendingUp className="h-5 w-5 text-infinity-500" />
    }
  ];
  
  const marketData = [
    "92% das micro e pequenas empresas no Brasil não possuem uma estrutura de vendas padronizada.",
    "Mais de 70% não monitoram dados como LTV, CAC ou taxa de conversão.",
    "Empresas que aplicam uma estrutura completa de funil aumentam o faturamento entre 38% e 71% em até 6 meses."
  ];

  return (
    <section id="resultados" className="relative py-24 overflow-hidden">
      {/* Background glow effects continuing from previous section */}
      <div className="absolute inset-0 flowing-bg z-0"></div>
      <div className="glow-circle w-[700px] h-[700px] top-[20%] left-[-200px] z-0"></div>
      <div className="glow-circle w-[500px] h-[500px] bottom-[10%] right-[-100px] z-0"></div>
      <div className="glow-accent w-[350px] h-[350px] top-[40%] right-[20%] z-0"></div>
      
      <div className="infinity-container relative z-10">
        <h2 className="section-title text-center">
          <span className="relative white-glow-text">
            As empresas que crescem de verdade não têm mais sorte — têm estrutura.
            <span className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <p className="section-subtitle text-center">
          A maioria das empresas trava o crescimento por motivos internos e silenciosos. Com dados, estratégia e ação, 
          mostramos onde está o desperdício — e como revertê-lo.
        </p>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="subtle-card p-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <BarChart3 className="h-6 w-6 text-infinity-500 mr-3" />
              Métricas de Transformação
            </h3>
            
            <div className="space-y-8">
              {metrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{metric.label}</span>
                    {metric.icon}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="h-2 w-full bg-gray-700 rounded overflow-hidden">
                        <div className="h-full w-[30%] bg-gray-500"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-sm text-gray-400">Antes</span>
                        <span className="text-sm text-gray-400">{metric.before}</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="h-2 w-full bg-gray-700 rounded overflow-hidden">
                        <div className="h-full w-[80%] bg-infinity-500"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-sm text-gray-400">Depois</span>
                        <span className="text-sm text-infinity-400">{metric.after}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="subtle-card p-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <LineChart className="h-6 w-6 text-infinity-500 mr-3" />
              Ciclo de Crescimento
            </h3>
            
            <div className="space-y-8">
              <div className="relative h-[200px] px-4 mb-6">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-700"></div>
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-700"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-700"></div>
                
                {/* Before INFINITY line */}
                <div className="absolute top-[30%] left-[10%] right-[10%] h-[2px]">
                  <svg height="100" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,50 Q25,30 50,60 T100,30" stroke="#888888" fill="transparent" strokeWidth="2"/>
                  </svg>
                </div>
                
                {/* After INFINITY line */}
                <div className="absolute top-0 left-[10%] right-[10%] h-[2px]">
                  <svg height="100" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,80 Q25,70 50,50 T100,20" stroke="#ff0000" fill="transparent" strokeWidth="2"/>
                  </svg>
                </div>
                
                <div className="absolute top-[85%] left-[5%]">
                  <span className="text-gray-400 text-sm">Antes</span>
                </div>
                
                <div className="absolute top-[15%] right-[5%]">
                  <span className="text-infinity-400 text-sm">Depois</span>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                {marketData.map((data, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3">
                      <ArrowUpRight className="h-5 w-5 text-infinity-500" />
                    </div>
                    <p className="text-gray-300">{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            O que nossos clientes dizem
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="subtle-card p-8 relative overflow-hidden group"
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
                  <div className="w-12 h-12 bg-infinity-800/70 rounded-full flex items-center justify-center backdrop-blur-sm">
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
        </div>
        
        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className={cn(
            "px-8 py-6 rounded-lg",
            "bg-gradient-to-r from-infinity-950/50 to-infinity-900/50",
            "border border-infinity-700/30 backdrop-blur-lg"
          )}>
            <div className="text-3xl font-bold text-white">+100</div>
            <div className="text-gray-300">empresas atendidas</div>
          </div>
          
          <div className={cn(
            "px-8 py-6 rounded-lg",
            "bg-gradient-to-r from-infinity-950/50 to-infinity-900/50",
            "border border-infinity-700/30 backdrop-blur-lg"
          )}>
            <div className="text-3xl font-bold text-white">+1.000</div>
            <div className="text-gray-300">horas de diagnósticos aplicados</div>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-2xl font-bold text-infinity-500">
            A diferença entre empresas que sobrevivem e as que escalam está na visão de estrutura. Com a INFINITY, você passa 
            a ter clareza, controle e crescimento estratégico real.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
