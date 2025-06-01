
import React from 'react';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/types/content';

interface EditableHeroProps {
  section: HeroSection;
  onSectionUpdate?: (section: HeroSection) => void;
}

const EditableHero: React.FC<EditableHeroProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;

  if (!section.visible) return null;

  return (
    <section 
      id={section.id}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${style?.padding || 'py-20'} ${style?.backgroundColor || 'bg-gray-900'}`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${content.image}')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-4 ${style?.textColor || 'text-white'}`}>
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'}`}>
          {content.heading}
        </h1>
        
        <p className={`text-xl md:text-2xl mb-8 opacity-90 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'}`}>
          {content.subheading}
        </p>
        
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
        >
          {content.cta.text}
        </Button>
      </div>
    </section>
  );
};

export default EditableHero;
