
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';
import { HeroSection } from '@/types/content';

interface EditableHeroProps {
  section: HeroSection;
  onSectionUpdate?: (section: HeroSection) => void;
}

const EditableHero: React.FC<EditableHeroProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;
  
  // Enhanced background images for carousel
  const backgroundImages = [
    content.image,
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  if (!section.visible) return null;

  return (
    <section 
      id={section.id}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${style?.padding || 'py-20'} ${style?.backgroundColor || 'bg-gray-900'}`}
    >
      {/* Enhanced Background Image Carousel with Ken Burns Effect */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              transform: index === currentImageIndex ? 'scale(1.1)' : 'scale(1)',
            }}
          />
        ))}
      </div>
      
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Enhanced Carousel Controls */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 group border border-white/20"
      >
        <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 group border border-white/20"
      >
        <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
      </button>

      {/* Enhanced Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white shadow-lg'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
      
      {/* Enhanced Content with Better Typography */}
      <div className={`relative z-10 text-center max-w-5xl mx-auto px-6 ${style?.textColor || 'text-white'}`}>
        {/* Badge */}
        <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
          Premium Construction Services
        </div>

        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'}`}>
          <span className="block mb-2">{content.heading.split(' ').slice(0, 2).join(' ')}</span>
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            {content.heading.split(' ').slice(2).join(' ')}
          </span>
        </h1>
        
        <p className={`text-xl md:text-2xl lg:text-3xl mb-12 opacity-90 leading-relaxed font-light animate-fade-in-up ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'}`} style={{ animationDelay: '300ms' }}>
          {content.subheading}
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-orange-500/25 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              {content.cta.text}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>
          
          <Button 
            variant="outline"
            size="lg" 
            className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-semibold rounded-xl group"
          >
            <Play className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            Watch Our Work
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-sm">Projects Completed</div>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">15+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
        <div className="text-white/70 text-xs mt-2 text-center">Scroll</div>
      </div>

      {/* Floating Decoration Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-orange-300/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default EditableHero;
