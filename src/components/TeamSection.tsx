
import React from 'react';

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

  return (
    <section id="team" className="py-20 bg-black">
      <div className="infinity-container">
        <h2 className="section-title text-center">
          <span className="relative">
            QUEM ESTÁ POR TRÁS
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-infinity-500 to-transparent"></span>
          </span>
        </h2>
        
        <div className="mt-12 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div 
              className="h-full rounded-lg overflow-hidden relative"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '320px'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              Acreditamos que cada empresa é como um corpo: só funciona bem se marketing, operação e 
              vendas estiverem saudáveis e integrados. Nossa equipe multidisciplinar trabalha para 
              garantir que todas essas áreas funcionem em harmonia.
            </p>
            
            <div className="glow-line"></div>
            
            <div className="space-y-6 mt-8">
              {team.map((member, index) => (
                <div key={index} className="infinity-card">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
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
      </div>
    </section>
  );
};

export default TeamSection;
