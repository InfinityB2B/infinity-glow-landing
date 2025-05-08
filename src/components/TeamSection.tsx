
import React from 'react';
import { Users } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Alessandro Martins",
      position: "CEO & Consultor Principal",
      expertise: "Estratégia de Negócios, Vendas B2B",
      bio: "Mais de 15 anos liderando equipes comerciais de alto desempenho."
    },
    {
      name: "Marina Oliveira",
      position: "Diretora de Metodologia",
      expertise: "Processos Comerciais, CRM, Automação",
      bio: "Especialista em implementação de sistemas e otimização de processos."
    },
    {
      name: "Ricardo Almeida",
      position: "Consultor Sênior",
      expertise: "Treinamento de Vendas, Negociação",
      bio: "Ex-diretor comercial de multinacional com vasta experiência em equipes complexas."
    }
  ];

  const pillars = [
    {
      title: "Consultores especialistas",
      description: "Profissionais com experiência real em operações complexas"
    },
    {
      title: "Analistas de funil e estrutura",
      description: "Especialistas em identificar e resolver gargalos estratégicos"
    },
    {
      title: "Equipe de suporte estratégico",
      description: "Apoio contínuo durante toda a implementação"
    }
  ];

  return (
    <section id="team" className="relative py-24 overflow-hidden">
      {/* Background glow effects continuing from previous section */}
      <div className="absolute inset-0 flowing-bg z-0"></div>
      <div className="glow-circle w-[800px] h-[800px] bottom-[-200px] right-[-200px] z-0"></div>
      <div className="glow-accent w-[300px] h-[300px] top-[20%] left-[15%] z-0"></div>
      
      <div className="infinity-container relative z-10">
        <h2 className="section-title text-center">
          <span className="relative white-glow-text">
            Não é sobre planilhas e teorias. É sobre entender sua empresa de dentro pra fora.
            <span className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <p className="section-subtitle text-center">
          Por trás da INFINITY existe uma equipe estratégica com experiência real em operação, marketing e vendas — que já passou 
          pelos desafios que você vive hoje e sabe exatamente como corrigir a rota.
        </p>
        
        <div className="mt-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div 
              className="h-full rounded-xl overflow-hidden relative subtle-card min-h-[400px]"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-infinity-950 via-infinity-950/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">INFINITY Team</h3>
                <p className="text-gray-300">7+ anos transformando empresas em todo o Brasil</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-gray-200 text-xl leading-relaxed mb-8">
              Acreditamos que cada empresa é como um corpo: só funciona bem se marketing, operação e 
              vendas estiverem saudáveis e integrados. Nossa equipe multidisciplinar trabalha para 
              garantir que todas essas áreas funcionem em harmonia.
            </p>
            
            <div className="glow-line"></div>
            
            <div className="space-y-6 mt-8">
              {team.map((member, index) => (
                <div key={index} className="subtle-card p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-infinity-300">{member.position}</p>
                  <div className="flex items-center mt-2 text-sm">
                    <span className="text-gray-400">Especialidades:</span>
                    <span className="ml-2 text-white">{member.expertise}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="subtle-card p-8 flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-infinity-900/70 mb-6 backdrop-blur-sm">
                <Users className="h-8 w-8 text-infinity-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-gray-300">{pillar.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-infinity-600 rounded-xl shadow-glow-md">
          <p className="text-white text-xl text-center italic">
            "Vemos cada empresa como um corpo humano. Não adianta ter alcance e visibilidade se os órgãos internos 
            estão falhando. Nosso papel é reorganizar esse organismo — e fazer ele crescer com saúde e inteligência."
          </p>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="p-4 subtle-card text-center">
            <h4 className="text-white font-bold mb-2">7+ anos</h4>
            <p className="text-gray-300 text-sm">de experiência com empresas reais</p>
          </div>
          
          <div className="p-4 subtle-card text-center">
            <h4 className="text-white font-bold mb-2">INFINITY ACADEMY + INFINITY B2B</h4>
            <p className="text-gray-300 text-sm">consultoria + execução</p>
          </div>
          
          <div className="p-4 subtle-card text-center">
            <h4 className="text-white font-bold mb-2">100% focados em resultado</h4>
            <p className="text-gray-300 text-sm">não em promessas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
