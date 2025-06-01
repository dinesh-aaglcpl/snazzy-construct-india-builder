
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {content.logo.text.charAt(0)}
              </span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              {content.logo.text}
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {content.navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:scale-105 transition-all duration-300">
            {content.cta.text}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default EditableHeader;
