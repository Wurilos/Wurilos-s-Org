import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ProjectImage {
  src: string;
  alt: string;
  category: string;
}

export interface ContactInfo {
  phone1: string;
  phone2: string;
  location: string;
  email: string;
}