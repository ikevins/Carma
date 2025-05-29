import React from 'react';
import { useFadeInSection } from '../../utils/animations';

interface SectionProps {
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark';
}

export default function Section({
  id,
  className = '',
  title,
  subtitle,
  children,
  background = 'white'
}: SectionProps) {
  const { isVisible, domRef } = useFadeInSection();
  
  const bgClasses = {
    'white': 'bg-white',
    'light': 'bg-neutral-50',
    'dark': 'bg-neutral-900 text-white'
  };
  
  return (
    <section 
      id={id} 
      className={`section ${bgClasses[background]} ${className}`}
      ref={domRef}
    >
      <div className={`container ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}>
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}