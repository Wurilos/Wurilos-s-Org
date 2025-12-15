import React from 'react';
import { ContactInfo, ProjectImage } from './types';

export const COMPANY_NAME = "Pai & Filho Construções";
export const FOUNDED_YEAR = 2007;

export const CONTACT_INFO: ContactInfo = {
  phone1: "(14) 99759-6201",
  phone2: "(14) 99803-4070",
  location: "Bauru - SP e Região",
  email: "contato@paiefilhoconstrucoes.com.br"
};

// Imagens novas e testadas de construção civil e arquitetura
export const IMAGES = {
  // O logo será gerado via CSS/Tipografia
  logoPlaceholder: "", 
  
  // Hero background - Casa moderna ampla
  heroBg: "https://images.unsplash.com/photo-1600596542815-3ad196bb4a7f?auto=format&fit=crop&w=2000&q=80",
  
  // Imagem 1: Obra / Estrutura / Construção
  project1: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80", 
  
  // Imagem 2: Detalhe Alvenaria / Mão na massa
  project2: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=800&q=80",
  
  // Imagem 3: Planejamento / Planta / Capacete (Gestão)
  project3: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",

  // Casa Finalizada Exemplo (Moderna com piscina)
  finishedHouse: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
};

export const PORTFOLIO_ITEMS: ProjectImage[] = [
  {
    src: IMAGES.project1,
    alt: "Estruturas de Concreto",
    category: "Estrutura"
  },
  {
    src: IMAGES.project2,
    alt: "Alvenaria de Precisão",
    category: "Alvenaria"
  },
  {
    src: IMAGES.project3,
    alt: "Gerenciamento de Obra",
    category: "Execução"
  },
  {
    src: IMAGES.finishedHouse,
    alt: "Residência Alto Padrão",
    category: "Concluído"
  }
];