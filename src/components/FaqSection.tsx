
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Embora cada empresa possua seus próprios desafios e particularidades, normalmente nossos clientes começam a perceber resultados preliminares dentro de 30 a 60 dias após o início do trabalho. Resultados mais significativos costumam aparecer entre 3 a 6 meses de implementação contínua."
    },
    {
      question: "Qual o investimento necessário?",
      answer: "O investimento varia de acordo com o porte da empresa, desafios específicos e escopo do trabalho. Trabalhamos com planos personalizados que se adequam à realidade de cada negócio, sempre com foco no retorno sobre o investimento. O diagnóstico inicial é gratuito e permite uma avaliação precisa das necessidades."
    },
    {
      question: "Como vocês se diferenciam de outras consultorias?",
      answer: "Nossa abordagem integra operação, marketing e vendas como partes interconectadas do mesmo sistema. Não oferecemos soluções genéricas - cada plano é customizado baseado em diagnóstico aprofundado. Além disso, nossa metodologia inclui não apenas consultoria, mas também implementação e acompanhamento contínuo dos resultados."
    },
    {
      question: "Vocês atendem qualquer segmento ou porte de empresa?",
      answer: "Atendemos empresas de diversos segmentos, com foco especial em B2B, serviços, tecnologia e indústria. Quanto ao porte, trabalhamos principalmente com pequenas e médias empresas que já possuam alguma estrutura comercial e faturamento mínimo que justifique o investimento em consultoria especializada."
    },
    {
      question: "O que é necessário para começar?",
      answer: "O primeiro passo é agendar o diagnóstico gratuito através do formulário nesta página. Durante esta etapa, realizamos uma análise preliminar da situação atual da empresa, identificamos os principais desafios e oportunidades, e apresentamos um plano de ação personalizado com cronograma e investimento."
    },
    {
      question: "A consultoria é presencial ou remota?",
      answer: "Trabalhamos em formato híbrido. A etapa de diagnóstico e algumas sessões estratégicas são realizadas presencialmente (quando possível geograficamente) ou por videoconferência. O acompanhamento contínuo, treinamentos e implementações podem ser conduzidos remotamente, garantindo eficiência e praticidade."
    },
    {
      question: "Vocês garantem resultados?",
      answer: "Nosso trabalho é baseado em metodologias comprovadas que geraram resultados para centenas de empresas. No entanto, os resultados dependem também do comprometimento da empresa na implementação das estratégias e mudanças recomendadas. Trabalhamos com metas e indicadores claros, e nossos contratos geralmente incluem cláusulas de performance."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="infinity-container">
        <h2 className="section-title text-center">
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
      </div>
    </section>
  );
};

export default FaqSection;
