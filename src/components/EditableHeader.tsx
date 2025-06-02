
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { HeaderSection } from '@/types/content';

interface EditableHeaderProps {
  section: HeaderSection;
  onSectionUpdate?: (section: HeaderSection) => void;
}

const EditableHeader: React.FC<EditableHeaderProps> = ({ section, onSectionUpdate }) => {
  const { content } = section;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  if (!section.visible) return null;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
              <span className="text-white font-bold text-xl">
                {content.logo.text.charAt(0)}
              </span>
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent' 
                : 'text-white text-shadow'
            }`}>
              {content.logo.text}
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {content.navigation.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-medium py-2 px-3 rounded-lg transition-all duration-300 group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <Button 
            onClick={() => scrollToSection('#contact')}
            className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-6 py-3 rounded-xl font-semibold relative overflow-hidden group"
          >
            <span className="relative z-10">{content.cta.text}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default EditableHeader;
