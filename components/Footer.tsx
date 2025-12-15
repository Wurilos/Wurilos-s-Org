import React from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <Logo variant="light" scale={1} />
          <p className="text-gray-400 text-sm mt-4 max-w-xs text-center md:text-left">
            Construindo sonhos com qualidade e confiança desde 2007.
          </p>
        </div>
        
        <div className="text-center md:text-right space-y-2">
            <div>
                <p className="font-bold text-white mb-1">Contato</p>
                <p className="text-gray-400 text-sm">{CONTACT_INFO.phone1}</p>
                <p className="text-gray-400 text-sm">{CONTACT_INFO.phone2}</p>
            </div>
            <div className="pt-4 border-t border-slate-700 mt-4">
                <p className="text-gray-500 text-xs">
                    &copy; {new Date().getFullYear()} Pai & Filho Construções.
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};