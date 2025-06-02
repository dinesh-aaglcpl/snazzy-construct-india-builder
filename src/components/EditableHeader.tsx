
import React from 'react';
import { Button } from '@/components/ui/button';
import { HeaderSection } from '@/types/content';

interface EditableHeaderProps {
  section: HeaderSection;
  onSectionUpdate?: (section: HeaderSection) => void;
}

const EditableHeader: React.FC<EditableHeaderProps> = ({ section, onSectionUpdate }) => {
  const { content } = section;

  if (!section.visible) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
              <span className="text-white font-bold text-xl">
                {content.logo.text.charAt(0)}
              </span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {content.logo.text}
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {content.navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-orange-50 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <Button className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-6 py-3 rounded-xl font-semibold relative overflow-hidden group">
            <span className="relative z-10">{content.cta.text}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default EditableHeader;
