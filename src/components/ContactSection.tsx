
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    segment: '',
    location: '',
    revenue: '',
    challenge: '',
    whatsapp: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      // Here we would typically send data to Supabase
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Solicitação enviada!",
        description: "Em breve, nossa equipe entrará em contato.",
        duration: 5000,
      });
      
      // Clear form
      setFormData({
        fullName: '',
        companyName: '',
        segment: '',
        location: '',
        revenue: '',
        challenge: '',
        whatsapp: '',
        email: '',
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Por favor, tente novamente.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-black to-infinity-950">
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="infinity-container relative z-10">
        <h2 className="section-title text-center">
          <span className="relative">
            HORA DA DECISÃO
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Vamos fazer um diagnóstico gratuito da sua empresa?
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Preencha o formulário e nossa equipe entrará em contato para entender suas necessidades.
          </p>
        </div>
        
        <div className="mt-8 max-w-3xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="infinity-card bg-black/80 backdrop-blur-md shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white text-sm" htmlFor="fullName">Nome completo</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-infinity-900/30 border border-infinity-800/50 text-white focus:ring-2 focus:ring-infinity-500 focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm" htmlFor="companyName">Nome da empresa</label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-infinity-900/30 border border-infinity-800/50 text-white focus:ring-2 focus:ring-infinity-500 focus:border-transparent transition-all"
                  placeholder="Nome da sua empresa"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm" htmlFor="segment">Segmento</label>
                <input
                  id="segment"
                  name="segment"
                  type="text"
                  value={formData.segment}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-infinity-900/30 border border-infinity-800/50 text-white focus:ring-2 focus:ring-infinity-500 focus:border-transparent transition-all"
                  placeholder="Ex: Tecnologia, Varejo, Serviços"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm" htmlFor="location">Cidade/Estado</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-infinity-900/30 border border-infinity-800/50 text-white focus:ring-2 focus:ring-infinity-500 focus:border-transparent transition-all"
                  placeholder="Ex: São Paulo/SP"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm" htmlFor="revenue">Faturamento médio mensal</label>
                <select
                  id="revenue"
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-infinity-900/30 border border-infinity-800/50 text-white focus:ring-2 focus:ring-infinity-500 focus:border-transparent transition-all"
                >
                  <option value="" disabled>Selecione uma opção</option>
                  <option value="Até R$ 50 mil">Até R$ 50 mil</option>
                  <option value="R$ 50 mil a R$ 200 mil">R$ 50 mil a R$ 200 mil</option>
                  <option value="R$ 200 mil a R$ 500 mil">R$ 200 mil a R$ 500 mil</option>
                  <option value="R$ 500 mil a R$ 1 milhão">R$ 500 mil a R$ 1 milhão</option>
                  <option value="Acima de R$ 1 milhão">Acima de R$ 1 milhão</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm" htmlFor="challenge">Maior desafio hoje</label>
                <select
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-infinity-900/30 border border-infinity-800/50 text-white focus:ring-2 focus:ring-infinity-500 focus:border-transparent transition-all"
                >
                  <option value="" disabled>Selecione uma opção</option>
                  <option value="Aumentar vendas">Aumentar vendas</option>
                  <option value="Melhorar processos">Melhorar processos</option>
                  <option value="Capacitar equipe">Capacitar equipe</option>
                  <option value="Reduzir custos">Reduzir custos</option>
                  <option value="Fidelizar clientes">Fidelizar clientes</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm" htmlFor="whatsapp">WhatsApp</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-infinity-900/30 border border-infinity-800/50 text-white focus:ring-2 focus:ring-infinity-500 focus:border-transparent transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm" htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-infinity-900/30 border border-infinity-800/50 text-white focus:ring-2 focus:ring-infinity-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full infinity-btn-primary text-lg font-bold disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <>
                    Solicitar diagnóstico empresarial gratuito
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </>
                )}
              </button>
            </div>
            
            <div className="mt-4 text-center text-sm text-gray-400">
              Respeitamos sua privacidade. Seus dados não serão compartilhados.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
