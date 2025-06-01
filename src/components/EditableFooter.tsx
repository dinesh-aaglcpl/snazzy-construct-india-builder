import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
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
    <footer className={`${style?.padding || 'py-12'} ${style?.backgroundColor || 'bg-gray-50'} ${style?.textColor || 'text-gray-700'} relative overflow-hidden`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">snazzystudio</h3>
              <p className="text-gray-600 mb-6 max-w-md">
                A comprehensive construction service provider in southern Poland.
              </p>
            </div>
            
            <div className="space-y-2 mb-8">
              <div className="text-gray-900 font-semibold underline">contact@snazzystudio.com</div>
              <div className="text-gray-900 font-semibold">+48 601 918 812</div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {content.socialLinks.map((social, index) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap] || Facebook;
                return (
                  <a 
                    key={index}
                    href={social.url} 
                    className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                    aria-label={social.platform}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About us</a></li>
              <li><a href="#realizations" className="text-gray-600 hover:text-gray-900 transition-colors">Realizations</a></li>
              <li><a href="#news" className="text-gray-600 hover:text-gray-900 transition-colors">News</a></li>
              <li><a href="#careers" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-600">General contracting</span></li>
              <li><span className="text-gray-600">Design & implementation</span></li>
              <li><span className="text-gray-600">Renovation & modernization</span></li>
            </ul>
          </div>
          
          {/* Other Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Other</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-600">Tenders</span></li>
              <li><span className="text-gray-600">EU projects</span></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <div className="text-gray-600 text-sm">
            {content.text}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EditableFooter;
