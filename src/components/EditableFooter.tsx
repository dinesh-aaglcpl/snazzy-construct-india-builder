
import React from 'react';
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
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

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className={`${style?.padding || 'py-12'} ${style?.backgroundColor || 'bg-gray-900'} ${style?.textColor || 'text-gray-300'} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40 40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-2xl font-bold text-white">snazzybud</h3>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building excellence since 2002. We specialize in comprehensive construction services across southern Poland.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">+48 601 918 812</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">info@snazzybud.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Kraków, Southern Poland</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {content.socialLinks.map((social, index) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap] || Facebook;
                return (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={social.platform}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavClick('#hero')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Home</button></li>
              <li><button onClick={() => handleNavClick('#about')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">About Us</button></li>
              <li><button onClick={() => handleNavClick('#services')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Services</button></li>
              <li><button onClick={() => handleNavClick('#recent-works')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Projects</button></li>
              <li><button onClick={() => handleNavClick('#contact')} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Contact</button></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400 text-sm">Residential Construction</span></li>
              <li><span className="text-gray-400 text-sm">Commercial Projects</span></li>
              <li><span className="text-gray-400 text-sm">Renovation & Modernization</span></li>
              <li><span className="text-gray-400 text-sm">Infrastructure Development</span></li>
              <li><span className="text-gray-400 text-sm">Project Management</span></li>
            </ul>
          </div>
          
          {/* Newsletter & Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for construction tips and project updates.</p>
            
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <h5 className="font-medium text-white mb-3">Business Hours</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <div>Mon-Fri: 8:00 AM - 6:00 PM</div>
                <div>Sat: 9:00 AM - 4:00 PM</div>
                <div>Sun: Emergency Only</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {content.text}
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              {content.legalLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EditableFooter;
