
import React from 'react';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/types/content';
import { ArrowDown } from 'lucide-react';

interface EditableHeroProps {
  section: HeroSection;
  onSectionUpdate?: (section: HeroSection) => void;
}

const EditableHero: React.FC<EditableHeroProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;

  if (!section.visible) return null;

  const handleCTAClick = () => {
    if (content.cta.href.startsWith('#')) {
      const element = document.querySelector(content.cta.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id={section.id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${content.image}')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      {/* Geometric Shapes */}
      <div className="absolute left-0 bottom-0 w-40 h-40 bg-blue-500 opacity-20 rounded-tr-3xl" />
      <div className="absolute right-0 top-1/3 w-32 h-64 bg-blue-400 opacity-15 rounded-l-3xl" />
      <div className="absolute right-0 bottom-0 w-48 h-32 bg-gray-900 opacity-60 rounded-tl-3xl" />
      <div className="absolute left-0 top-1/4 w-24 h-96 bg-blue-600 opacity-25 rounded-r-3xl" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
          {content.heading}
        </h1>
        
        {content.subheading && (
          <p className="text-lg md:text-xl lg:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed text-white">
            {content.subheading}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            onClick={handleCTAClick}
            className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 rounded-xl"
          >
            {content.cta.text}
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-white/50 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-10 py-6 text-lg backdrop-blur-sm rounded-xl"
          >
            Get Free Quote
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default EditableHero;
