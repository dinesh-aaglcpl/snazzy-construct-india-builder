
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

  if (!section.visible) return null;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              {content.logo.text}
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {content.navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`transition-colors duration-300 hover:opacity-75 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className={`border border-current bg-transparent hover:bg-current hover:text-white transition-all duration-300 ${
            isScrolled ? 'text-gray-900 border-gray-900' : 'text-white border-white'
          }`}>
            {content.cta.text}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default EditableHeader;
