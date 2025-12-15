import React from 'react';
import { ArrowRight, Hammer } from 'lucide-react';
import { Button } from './Button';
import { IMAGES } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.heroBg} 
          alt="Casa de Alto Padrão" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
             <Hammer size={16} className="text-accent" />
             <span className="text-sm font-medium text-accent">Desde 2007 em Bauru e Região</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Construímos o seu sonho com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Excelência</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Especialistas em construções residenciais de alto padrão. Unimos tradição familiar, competência técnica e uma equipe altamente treinada para entregar sua obra com perfeição.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" className="w-full sm:w-auto text-lg" href="#contact">
              Solicitar Orçamento
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-lg !text-white !border-white hover:!bg-white/10" href="#portfolio">
              Ver Nossas Obras
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};