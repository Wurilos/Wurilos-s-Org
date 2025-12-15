import React from 'react';
import { SectionTitle } from './SectionTitle';
import { PORTFOLIO_ITEMS } from '../constants';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Acompanhe Nossas Obras" 
          subtitle="A qualidade do nosso trabalho fala por si. Confira algumas etapas de nossas construções em Bauru e região."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-80 bg-gray-100">
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent text-sm font-bold uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-white text-lg font-bold">{item.alt}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-500 italic">
                *Imagens ilustrativas das etapas de construção realizadas pela nossa equipe.
            </p>
        </div>
      </div>
    </section>
  );
};