
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { HeaderSection } from '@/types/content';
import { Menu, X } from 'lucide-react';

interface EditableHeaderProps {
  section: HeaderSection;
  onSectionUpdate?: (section: HeaderSection) => void;
}

const EditableHeader: React.FC<EditableHeaderProps> = ({ section, onSectionUpdate }) => {
  const { content } = section;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!section.visible) return null;

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-colors duration-300 ${
              isScrolled ? 'bg-blue-600' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              {content.logo.text}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {content.navigation.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className={`transition-colors duration-300 hover:opacity-75 font-medium text-base ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => handleNavClick(content.cta.href)}
              className={`transition-all duration-300 px-8 py-3 rounded-xl font-semibold ${
                isScrolled 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-white/20 border border-white/50 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm'
              }`}
            >
              {content.cta.text}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors duration-300 p-2 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t">
            <div className="px-6 py-6 space-y-6">
              {content.navigation.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick(content.cta.href)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
              >
                {content.cta.text}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default EditableHeader;
