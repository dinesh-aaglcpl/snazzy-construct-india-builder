
import React from 'react';
import { Button } from '@/components/ui/button';
import { FeaturesSection } from '@/types/content';
import { CheckCircle, Clock, Shield, DollarSign, Star, Users, Award, Zap } from 'lucide-react';

interface EditableFeaturesProps {
  section: FeaturesSection;
  onSectionUpdate?: (section: FeaturesSection) => void;
}

const iconMap = {
  CheckCircle,
  Clock,
  Shield,
  DollarSign,
  Star,
  Users,
  Award,
  Zap,
};

const EditableFeatures: React.FC<EditableFeaturesProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;

  if (!section.visible) return null;

  // Check if this is the about section
  const isAboutSection = section.id === 'about';
  // Check if this is the stats section
  const isStatsSection = section.id === 'stats';
  // Check if this is the services section
  const isServicesSection = section.id === 'services';

  if (isAboutSection) {
    return (
      <section 
        id={section.id}
        className={`${style?.padding || 'py-16'} ${style?.backgroundColor || 'bg-white'} ${style?.textColor || 'text-gray-900'}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Construction worker"
                className="w-full h-96 object-cover"
              />
              {/* Geometric overlay */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-black"></div>
            </div>
            
            {/* Content */}
            <div>
              <p className="text-sm text-gray-600 mb-2">{content.subheading}</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
                {content.heading}
              </h2>
              
              <div className="space-y-6">
                {content.features.map((feature) => (
                  <p key={feature.id} className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                ))}
              </div>
              
              <Button className="mt-8 bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-none">
                Get to know us better
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isStatsSection) {
    return (
      <section 
        id={section.id}
        className={`${style?.padding || 'py-16'} ${style?.backgroundColor || 'bg-gray-100'} ${style?.textColor || 'text-gray-900'} relative`}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Geometric Shapes */}
        <div className="absolute left-0 top-0 w-40 h-full bg-teal-200 opacity-80" />
        <div className="absolute right-0 top-0 w-32 h-2/3 bg-orange-200 opacity-80" />
        <div className="absolute right-32 bottom-0 w-48 h-1/3 bg-orange-300 opacity-80" />
        
        {/* Video Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-20 h-20 bg-white rounded-none flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
            <div className="w-0 h-0 border-l-8 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="relative z-20 container mx-auto px-4 lg:px-8">
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {content.features.map((feature) => (
              <div key={feature.id} className="text-center">
                <h3 className="text-4xl lg:text-5xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-lg opacity-90">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isServicesSection) {
    return (
      <section 
        id={section.id}
        className={`${style?.padding || 'py-16'} ${style?.backgroundColor || 'bg-white'} ${style?.textColor || 'text-gray-900'}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <p className="text-sm text-gray-600 mb-2">{content.subheading}</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
                {content.heading}
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                We offer a wide range of construction services, including house construction, attic conversions, and many others. Trust our experience and professionalism to execute your construction projects with excellent quality and attention to detail.
              </p>
              
              <Button className="bg-transparent border border-gray-400 text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-none">
                Go to pricing
              </Button>
              
              {/* Worker Image */}
              <div className="mt-12 relative">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Construction worker"
                  className="w-full h-64 object-cover"
                />
                {/* Geometric overlays */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-200"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-300"></div>
              </div>
            </div>
            
            {/* Right Content - Services List */}
            <div className="space-y-4">
              {content.features.map((feature, index) => (
                <div key={feature.id} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between cursor-pointer group">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                      {feature.title}
                    </h3>
                    <div className="text-gray-400 group-hover:text-orange-500 transition-colors">
                      {index === 0 ? '⌄' : '⌃'}
                    </div>
                  </div>
                  {index === 0 && (
                    <div className="mt-4 space-y-3">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                          Construction of single-family houses
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                          Construction of multi-family houses
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                          Construction of energy-saving houses
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                          Construction of wooden houses
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                          Construction of modular houses
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Geometric shape */}
        <div className="absolute bottom-0 right-0 w-48 h-32 bg-orange-200 opacity-50"></div>
      </section>
    );
  }

  // Default features layout
  return (
    <section 
      id={section.id}
      className={`${style?.padding || 'py-16'} ${style?.backgroundColor || 'bg-white'} ${style?.textColor || 'text-gray-900'}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {content.heading && (
          <div className={`text-center mb-16 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {content.heading}
            </h2>
            {content.subheading && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {content.subheading}
              </p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={feature.id} 
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                {IconComponent && (
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-orange-600" />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
