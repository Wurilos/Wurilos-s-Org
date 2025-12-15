import React from 'react';
import { Home, Ruler, Users, BrickWall } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Home size={40} className="text-white" />,
      title: "Construção Residencial",
      description: "Execução completa da sua casa, do alicerce ao telhado, seguindo rigorosamente o projeto arquitetônico."
    },
    {
      icon: <Ruler size={40} className="text-white" />,
      title: "Obras de Alto Padrão",
      description: "Expertise em materiais nobres, acabamentos finos e estruturas complexas que exigem precisão."
    },
    {
      icon: <BrickWall size={40} className="text-white" />,
      title: "Fundações e Estruturas",
      description: "Garantia de solidez e segurança para sua família. Trabalho estrutural executado com perfeição técnica."
    },
    {
      icon: <Users size={40} className="text-white" />,
      title: "Gestão de Obra",
      description: "Acompanhamento profissional com equipe própria e treinada, garantindo limpeza, organização e prazo."
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nossos Serviços" 
          subtitle="Especialização focada na qualidade da sua residência."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border-b-4 border-primary"
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-800 transition-colors shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};