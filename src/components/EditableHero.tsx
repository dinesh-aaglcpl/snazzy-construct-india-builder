
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${content.image}')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Geometric Shapes */}
      <div className="absolute left-0 bottom-0 w-40 h-40 bg-orange-200 opacity-80" />
      <div className="absolute right-0 top-1/3 w-32 h-64 bg-teal-200 opacity-80" />
      <div className="absolute right-0 bottom-0 w-48 h-32 bg-black opacity-80" />
      <div className="absolute left-0 top-1/4 w-24 h-96 bg-orange-300 opacity-80" />
      
      {/* Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-4 ${style?.textColor || 'text-white'}`}>
        <h1 className={`text-5xl md:text-7xl font-bold mb-8 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'}`}>
          {content.heading}
        </h1>
        
        {content.subheading && (
          <p className={`text-xl md:text-2xl mb-8 opacity-90 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'}`}>
            {content.subheading}
          </p>
        )}
        
        <Button 
          size="lg" 
          className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-8 py-6 text-lg rounded-none"
        >
          {content.cta.text}
        </Button>
      </div>
    </section>
  );
};

export default EditableHero;
