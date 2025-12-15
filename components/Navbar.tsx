import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { scrollToSection } from '../utils';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Component - Adjusted Alignment */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="hover:opacity-90 transition-opacity flex items-center"
        >
           <Logo variant={scrolled ? 'colored' : 'light'} scale={0.9} />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium hover:text-accent transition-colors ${scrolled ? 'text-gray-700' : 'text-white drop-shadow-sm'}`}
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="flex items-center gap-2 bg-accent text-secondary px-4 py-2 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors shadow-lg"
            onClick={(e) => scrollToSection(e, '#contact')}
          >
            <Phone size={16} className="text-secondary" />
            <span className="text-secondary">{CONTACT_INFO.phone1}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-secondary' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col p-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="py-3 px-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:text-primary font-medium"
              onClick={(e) => {
                setIsOpen(false);
                scrollToSection(e, link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};