
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
        <div className={`text-center mb-16 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'}`}>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${style?.textColor || 'text-gray-900'}`}>
            {content.heading}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${style?.textColor || 'text-gray-600'}`}>
            {content.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || CheckCircle;
            
            return (
              <div key={feature.id} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${style?.textColor || 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`${style?.textColor || 'text-gray-600'} leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EditableFeatures;
