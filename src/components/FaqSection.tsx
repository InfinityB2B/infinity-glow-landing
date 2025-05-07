
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
    <section id="faq" className="py-20 bg-gradient-to-b from-infinity-950/80 to-black">
      <div className="infinity-container">
        <h2 className="section-title text-center flex items-center justify-center gap-3">
          <Star className="w-6 h-6 text-infinity-500" />
          <span className="relative">
            PERGUNTAS FREQUENTES
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-infinity-950/50 rounded-lg border border-infinity-900/50 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-infinity-900/30">
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-infinity-950/50 rounded-lg border border-infinity-900/50 p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">
            Ainda com dúvidas?
          </h3>
          <p className="text-gray-300 mb-6">
            Preencha o formulário e nossa equipe entrará em contato para ajudar você a entender 
            como podemos transformar sua empresa com a INFINITY.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-infinity-600 hover:bg-infinity-700 text-white font-semibold py-6 px-8 text-lg"
          >
            Quero falar com a equipe INFINITY
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
