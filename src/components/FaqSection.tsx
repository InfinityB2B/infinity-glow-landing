
import React from 'react';
import { Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FaqSection = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Em média, você começará a ver resultados nos primeiros 3 meses, com melhorias contínuas. Cada empresa tem seu próprio ritmo de adaptação e implementação, mas garantimos acompanhamento constante para maximizar os ganhos desde o início."
    },
    {
      question: "A consultoria é indicada para empresas de qualquer segmento?",
      answer: "Sim, trabalhamos com empresas de diversos segmentos e adaptamos a estratégia para a sua realidade. Nossa metodologia é flexível e se adequa tanto a empresas de serviços quanto produtos, B2B ou B2C."
    },
    {
      question: "Como funciona o acompanhamento pós-consultoria?",
      answer: "Após a implementação inicial, realizamos sessões de acompanhamento e ajustes periódicos. Estabelecemos um cronograma de reuniões de alinhamento, análise de métricas e otimizações contínuas para garantir que os resultados permaneçam consistentes."
    },
    {
      question: "Posso aplicar as estratégias sozinho?",
      answer: "Sim, mas sempre com o apoio da nossa equipe para garantir a execução correta e resultados consistentes. Fornecemos todo o material necessário e capacitação para que você e sua equipe possam implementar as estratégias com autonomia progressiva."
    },
    {
      question: "A consultoria é 100% personalizada?",
      answer: "Sim, todas as ações são adaptadas à sua empresa, sem soluções genéricas. Realizamos um diagnóstico detalhado para entender os desafios específicos do seu negócio e criamos um plano sob medida que atenda às suas necessidades particulares."
    },
    {
      question: "O que está incluso na consultoria da INFINITY?",
      answer: "Incluímos diagnóstico completo, plano estratégico personalizado, treinamentos específicos para sua equipe, implementação guiada e acompanhamento contínuo. Tudo feito diretamente com a sua equipe para garantir transferência de conhecimento e autonomia."
    },
    {
      question: "Como posso agendar uma reunião?",
      answer: "Ao preencher o formulário de contato, nossa equipe entrará em contato em até 24 horas para agendar uma reunião inicial no melhor horário para você. Esta primeira conversa é gratuita e sem compromisso, onde podemos entender melhor sua situação atual."
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background glow effects continuing from previous section */}
      <div className="absolute inset-0 flowing-bg z-0"></div>
      <div className="glow-circle w-[600px] h-[600px] top-[40%] left-[-200px] z-0"></div>
      <div className="glow-accent w-[200px] h-[200px] top-[20%] right-[10%] z-0"></div>
      
      <div className="infinity-container relative z-10">
        <h2 className="section-title text-center flex items-center justify-center gap-3">
          <Star className="w-8 h-8 text-infinity-500" />
          <span className="relative white-glow-text">
            PERGUNTAS FREQUENTES
            <span className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-none overflow-hidden shadow-glow-sm"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline rounded-t-xl backdrop-blur-md bg-gradient-to-r from-infinity-900/50 to-infinity-950/50 border border-infinity-800/40">
                  <span className="text-xl font-medium text-white">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 text-gray-300 rounded-b-xl bg-black/40 border-x border-b border-infinity-900/40">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto subtle-card p-10 text-center backdrop-blur-lg">
          <h3 className="text-2xl font-bold text-white mb-6">
            Ainda com dúvidas?
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            Preencha o formulário e nossa equipe entrará em contato para ajudar você a entender 
            como podemos transformar sua empresa com a INFINITY.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-infinity-600 hover:bg-infinity-700 hover:shadow-glow-md text-white font-semibold py-6 px-10 text-lg"
          >
            Quero falar com a equipe INFINITY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
