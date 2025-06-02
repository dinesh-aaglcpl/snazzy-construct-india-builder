
import React from 'react';
import { CheckCircle, Clock, Shield, DollarSign } from 'lucide-react';
import { FeaturesSection } from '@/types/content';

interface EditableFeaturesProps {
  section: FeaturesSection;
  onSectionUpdate?: (section: FeaturesSection) => void;
}

const iconMap = {
  CheckCircle,
  Clock,
  Shield,
  DollarSign,
};

const EditableFeatures: React.FC<EditableFeaturesProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;

  if (!section.visible) return null;

  return (
    <section 
      id={section.id}
      className={`${style?.padding || 'py-16 lg:py-24'} ${style?.backgroundColor || 'bg-white'} relative overflow-hidden`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-16 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'} animate-fade-in-up`}>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${style?.textColor || 'text-gray-900'} transform transition-all duration-700 hover:scale-105`}>
            {content.heading}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${style?.textColor || 'text-gray-600'} opacity-0 animate-fade-in-up`} style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            {content.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || CheckCircle;
            
            return (
              <div 
                key={feature.id} 
                className="text-center group cursor-pointer opacity-0 animate-fade-in-up transform transition-all duration-500 hover:-translate-y-3"
                style={{ 
                  animationDelay: `${400 + index * 150}ms`, 
                  animationFillMode: 'forwards' 
                }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                    <IconComponent className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  {/* Glowing effect */}
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-150"></div>
                  {/* Floating particles */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-[-10px] group-hover:translate-x-[10px]"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-orange-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-y-[10px] group-hover:translate-x-[-10px]"></div>
                </div>
                
                <h3 className={`text-xl font-semibold mb-4 ${style?.textColor || 'text-gray-900'} transition-all duration-300 group-hover:text-orange-600 transform group-hover:scale-105`}>
                  {feature.title}
                </h3>
                
                <p className={`${style?.textColor || 'text-gray-600'} leading-relaxed transition-all duration-300 group-hover:text-gray-800`}>
                  {feature.description}
                </p>

                {/* Interactive border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-orange-200/50 transition-all duration-300 pointer-events-none transform scale-105 opacity-0 group-hover:opacity-100"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-100 rounded-full blur-xl animate-float opacity-30"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-orange-200 rounded-full blur-lg animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-150 rounded-full blur-md animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default EditableFeatures;
