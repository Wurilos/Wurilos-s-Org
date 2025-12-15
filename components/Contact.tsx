import React from 'react';
import { Phone, MapPin, Mail, MessageSquare } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';
import { CONTACT_INFO } from '../constants';
import { Logo } from './Logo';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Entre em Contato" 
          subtitle="Estamos prontos para tirar seu projeto do papel. Fale com a gente."
          light={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Logo Area */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center mb-8 flex flex-col items-center justify-center">
               <div className="transform scale-110 mb-2">
                 <Logo variant="light" />
               </div>
               <p className="text-gray-400 text-xs mt-4">Construindo qualidade desde 2007</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex items-start gap-4">
              <div className="bg-primary p-3 rounded-full text-white">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Telefones</h4>
                <p className="text-gray-300 block">{CONTACT_INFO.phone1}</p>
                <p className="text-gray-300 block">{CONTACT_INFO.phone2}</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex items-start gap-4">
              <div className="bg-primary p-3 rounded-full text-white">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Localização</h4>
                <p className="text-gray-300">{CONTACT_INFO.location}</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex items-start gap-4">
              <div className="bg-primary p-3 rounded-full text-white">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                <p className="text-gray-300 text-sm">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <MessageSquare className="text-primary" />
              Solicite um Orçamento
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone / WhatsApp</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="(00) 00000-0000" />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Tipo de Serviço</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                  <option>Construção Residencial Completa</option>
                  <option>Reforma Alto Padrão</option>
                  <option>Fundação e Estrutura</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Conte um pouco sobre seu projeto..."></textarea>
              </div>

              <Button type="submit" variant="primary" fullWidth className="text-lg">
                Enviar Mensagem
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};