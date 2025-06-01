
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
    <footer className="py-16 lg:py-20 bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40 40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">snazzybud</h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Building excellence since 2002. We specialize in comprehensive construction services across southern Poland.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>+48 601 918 812</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>info@snazzybud.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Kraków, Southern Poland</span>
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
                    className="w-12 h-12 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110"
                    aria-label={social.platform}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => handleNavClick('#hero')} className="text-gray-400 hover:text-blue-400 transition-colors">Home</button></li>
              <li><button onClick={() => handleNavClick('#about')} className="text-gray-400 hover:text-blue-400 transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavClick('#services')} className="text-gray-400 hover:text-blue-400 transition-colors">Services</button></li>
              <li><button onClick={() => handleNavClick('#recent-works')} className="text-gray-400 hover:text-blue-400 transition-colors">Projects</button></li>
              <li><button onClick={() => handleNavClick('#contact')} className="text-gray-400 hover:text-blue-400 transition-colors">Contact</button></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white text-lg">Our Services</h4>
            <ul className="space-y-4">
              <li><span className="text-gray-400">Residential Construction</span></li>
              <li><span className="text-gray-400">Commercial Projects</span></li>
              <li><span className="text-gray-400">Renovation & Modernization</span></li>
              <li><span className="text-gray-400">Infrastructure Development</span></li>
              <li><span className="text-gray-400">Project Management</span></li>
            </ul>
          </div>
          
          {/* Newsletter & Contact */}
          <div className="space-y-8">
            <h4 className="font-semibold text-white text-lg">Stay Updated</h4>
            <p className="text-gray-400">Subscribe to our newsletter for construction tips and project updates.</p>
            
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-colors font-medium">
                Subscribe
              </button>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <h5 className="font-medium text-white mb-4">Business Hours</h5>
              <div className="text-gray-400 space-y-2">
                <div>Mon-Fri: 8:00 AM - 6:00 PM</div>
                <div>Sat: 9:00 AM - 4:00 PM</div>
                <div>Sun: Emergency Only</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              {content.text}
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-8">
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
