import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'colored';
  scale?: number;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'colored', scale = 1 }) => {
  // Cores baseadas na variante
  // colored: Texto Azul (Primary), Telhado Azul (Primary)
  // light: Texto Branco, Telhado Branco/Accent
  // dark: Texto Escuro (Secondary), Telhado Primary
  
  const styles = {
    colored: {
      textTop: 'text-primary',
      textBottom: 'text-primaryDark',
      icon: 'fill-primary',
      window: 'fill-white'
    },
    light: {
      textTop: 'text-white',
      textBottom: 'text-gray-200',
      icon: 'fill-white',
      window: 'fill-primary' // Janela colorida quando o logo é branco
    },
    dark: {
      textTop: 'text-secondary',
      textBottom: 'text-secondary',
      icon: 'fill-primary',
      window: 'fill-white'
    }
  };

  const current = styles[variant];

  return (
    <div 
      className="flex flex-col items-center justify-center select-none"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
    >
      {/* Icon Graphic: Roof + Chimney + Windows */}
      <div className="mb-[-5px] relative z-10 w-16 h-10 flex justify-center items-end">
        <svg viewBox="0 0 100 60" className="w-full h-full drop-shadow-sm">
            {/* Telhado Esquerdo */}
            <path d="M50 10 L10 40 L20 40 L50 18 Z" className={current.icon} />
            {/* Telhado Direito */}
            <path d="M50 10 L90 40 L80 40 L50 18 Z" className={current.icon} />
            {/* Chaminé */}
            <rect x="70" y="20" width="8" height="12" className={current.icon} />
            
            {/* Janela Central (4 painéis) */}
            <rect x="42" y="32" width="16" height="16" rx="1" className={current.icon} />
            <rect x="44" y="34" width="5" height="5" className={current.window} />
            <rect x="51" y="34" width="5" height="5" className={current.window} />
            <rect x="44" y="41" width="5" height="5" className={current.window} />
            <rect x="51" y="41" width="5" height="5" className={current.window} />
        </svg>
      </div>

      {/* Text Part */}
      <div className="text-center leading-none">
        <h1 className={`font-serif font-bold text-2xl tracking-tight ${current.textTop} ${variant === 'light' ? 'drop-shadow-md' : ''}`}>
          Pai & Filho
        </h1>
        <h2 className={`font-sans font-extrabold text-[0.65rem] uppercase tracking-[0.2em] mt-[2px] ${current.textBottom}`}>
          Construções
        </h2>
      </div>
    </div>
  );
};