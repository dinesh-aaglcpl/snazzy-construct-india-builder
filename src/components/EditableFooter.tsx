
import React, { useState } from 'react';
import { Linkedin, Instagram, Facebook, Mail, ArrowRight } from 'lucide-react';
import { FooterSection } from '@/types/content';
import { Button } from '@/components/ui/button';

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
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  if (!section.visible) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className={`${style?.padding || 'pt-20 pb-8'} ${style?.backgroundColor || 'bg-black'} ${style?.textColor || 'text-white'} relative overflow-hidden`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="animate-float absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full blur-xl"></div>
          <div className="animate-float absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-xl" style={{ animationDelay: '2s' }}></div>
          <div className="animate-float absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full blur-xl" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/30">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Building Dreams Together
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of satisfied clients who have transformed their visions into reality with BlueRock Construction.
            </p>
            <Button 
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Quick Links */}
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Projects', 'Blog', 'Contact'].map((link, index) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative">
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Contact & Legal
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:info@bluerockconstruction.com" 
                className="text-gray-300 hover:text-orange-400 transition-all duration-300 block group"
              >
                <Mail className="inline w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                info@bluerockconstruction.com
              </a>
              <div className="space-y-3 pt-4">
                {content.legalLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-all duration-300 block hover:translate-x-2"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Join the Conversation
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </h3>
            <p className="text-gray-300 mb-6">Let's Connect!</p>
            <div className="flex space-x-4">
              {content.socialLinks.map((social, index) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap] || Linkedin;
                return (
                  <a 
                    key={index}
                    href={social.url}
                    className="group relative"
                    aria-label={social.platform}
                  >
                    <div className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12 group-hover:shadow-lg">
                      <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 animate-fade-in-right" style={{ animationDelay: '600ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Never Miss an Update
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </h3>
            <p className="text-gray-300 mb-6">Join Our Community!</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <Button
                type="submit"
                disabled={isSubscribed}
                className={`w-full py-3 rounded-lg font-semibold text-black transition-all duration-300 transform hover:scale-105 ${
                  isSubscribed 
                    ? 'bg-green-400 hover:bg-green-400' 
                    : 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600'
                }`}
              >
                {isSubscribed ? '✓ Subscribed!' : 'Subscribe for Free'}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              {content.text}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EditableFooter;
