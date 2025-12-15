import React from 'react';
import { ShieldCheck, HardHat, Clock, Award } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { FOUNDED_YEAR, COMPANY_NAME, IMAGES } from '../constants';

export const About: React.FC = () => {
  const yearsExperience = new Date().getFullYear() - FOUNDED_YEAR;

  const features = [
    {
      icon: <ShieldCheck size={32} className="text-primary" />,
      title: "Confiança e Transparência",
      description: "Trabalhamos com total clareza em cada etapa da obra, garantindo sua tranquilidade."
    },
    {
      icon: <HardHat size={32} className="text-primary" />,
      title: "Equipe Treinada",
      description: "Profissionais qualificados e em constante atualização para o melhor acabamento."
    },
    {
      icon: <Clock size={32} className="text-primary" />,
      title: `Desde ${FOUNDED_YEAR}`,
      description: `Mais de ${yearsExperience} anos de história construindo lares e realizando sonhos.`
    },
    {
      icon: <Award size={32} className="text-primary" />,
      title: "Alto Padrão",
      description: "Especialistas em acabamentos finos e construções residenciais complexas."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <div>
            <SectionTitle 
              title="Sobre a Construtora" 
              subtitle={`${COMPANY_NAME}: A união da experiência com a inovação.`}
              alignment="left"
            />
            <p className="text-gray-600 mb-6 leading-relaxed">
              A <strong>{COMPANY_NAME}</strong> nasceu em {FOUNDED_YEAR} com um propósito claro: entregar obras de qualidade superior, respeitando prazos e o investimento de cada cliente. 
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Como uma empresa de raízes familiares, valorizamos o relacionamento próximo com nossos clientes. Atuamos fortemente na região de Bauru, focados exclusivamente em <strong>construções residenciais de alto padrão</strong>. Nossa equipe é rigorosamente selecionada e treinada para garantir que cada detalhe, desde a fundação até o acabamento final, seja executado com maestria.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-gray-50">
                  <div className="shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Images collage */}
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
               <img 
                 src={IMAGES.project1} 
                 alt="Obra em andamento" 
                 loading="lazy"
                 className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8 bg-gray-200"
               />
               <img 
                 src={IMAGES.project2} 
                 alt="Fundação Sólida" 
                 loading="lazy"
                 className="rounded-2xl shadow-xl w-full h-64 object-cover bg-gray-200"
               />
             </div>
             {/* Badge Overlay */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-6 rounded-full shadow-2xl border-4 border-white text-center w-40 h-40 flex flex-col justify-center items-center z-10">
               <span className="text-4xl font-bold block">{yearsExperience}+</span>
               <span className="text-xs uppercase tracking-wide">Anos de <br/>Experiência</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};