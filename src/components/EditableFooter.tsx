
import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import { FooterSection } from '@/types/content';

interface EditableFooterProps {
  section: FooterSection;
  onSectionUpdate?: (section: FooterSection) => void;
}

const iconMap = {
  Linkedin,
  Instagram,
  Facebook,
};

const EditableFooter: React.FC<EditableFooterProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;

  if (!section.visible) return null;

  return (
    <footer className={`${style?.padding || 'py-12'} ${style?.backgroundColor || 'bg-gray-900'} ${style?.textColor || 'text-gray-300'} relative overflow-hidden`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'}`}>
          <div className="text-sm">
            {content.text}
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {content.socialLinks.map((social, index) => {
              const IconComponent = iconMap[social.icon as keyof typeof iconMap] || Linkedin;
              return (
                <a 
                  key={index}
                  href={social.url} 
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  aria-label={social.platform}
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm">
            {content.legalLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EditableFooter;
