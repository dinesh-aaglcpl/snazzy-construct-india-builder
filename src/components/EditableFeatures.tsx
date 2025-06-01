
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

  const isAboutSection = section.id === 'about';
  const isStatsSection = section.id === 'stats';
  const isServicesSection = section.id === 'services';

  if (isAboutSection) {
    return (
      <section 
        id={section.id}
        className="py-20 lg:py-24 bg-white text-gray-900"
      >
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Construction worker"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                {/* Geometric overlay */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-black rounded-bl-3xl"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-600 mb-4 font-medium uppercase tracking-wider">{content.subheading}</p>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                  {content.heading}
                </h2>
              </div>
              
              <div className="space-y-6">
                {content.features.map((feature) => (
                  <p key={feature.id} className="text-gray-700 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                ))}
              </div>
              
              <Button className="mt-8 bg-orange-400 hover:bg-orange-500 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg">
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
        className="py-20 lg:py-24 bg-gray-100 text-gray-900 relative overflow-hidden"
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
        <div className="absolute left-0 top-0 w-40 h-full bg-teal-200 opacity-80 rounded-r-3xl" />
        <div className="absolute right-0 top-0 w-32 h-2/3 bg-orange-200 opacity-80 rounded-bl-3xl" />
        <div className="absolute right-32 bottom-0 w-48 h-1/3 bg-orange-300 opacity-80 rounded-tl-3xl" />
        
        {/* Video Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors shadow-lg">
            <div className="w-0 h-0 border-l-8 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="relative z-20 container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {content.features.map((feature) => (
              <div key={feature.id} className="text-center space-y-4">
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-lg lg:text-xl opacity-90">
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
        className="py-20 lg:py-24 bg-white text-gray-900 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-600 mb-4 font-medium uppercase tracking-wider">{content.subheading}</p>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                  {content.heading}
                </h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg mb-12">
                We offer a wide range of construction services, including house construction, attic conversions, and many others. Trust our experience and professionalism to execute your construction projects with excellent quality and attention to detail.
              </p>
              
              <Button className="bg-transparent border-2 border-gray-400 text-gray-900 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
                Go to pricing
              </Button>
              
              {/* Worker Image */}
              <div className="mt-16 relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Construction worker"
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  {/* Geometric overlays */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-200 rounded-br-2xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-300 rounded-tl-2xl"></div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Services List */}
            <div className="space-y-6">
              {content.features.map((feature, index) => (
                <div key={feature.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-center justify-between cursor-pointer group">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
                      {feature.title}
                    </h3>
                    <div className="text-gray-400 group-hover:text-orange-500 transition-colors text-xl">
                      {index === 0 ? '⌄' : '⌃'}
                    </div>
                  </div>
                  {index === 0 && (
                    <div className="mt-6 space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-4 flex-shrink-0"></span>
                          Construction of single-family houses
                        </li>
                        <li className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-4 flex-shrink-0"></span>
                          Construction of multi-family houses
                        </li>
                        <li className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-4 flex-shrink-0"></span>
                          Construction of energy-saving houses
                        </li>
                        <li className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-4 flex-shrink-0"></span>
                          Construction of wooden houses
                        </li>
                        <li className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-4 flex-shrink-0"></span>
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
        <div className="absolute bottom-0 right-0 w-48 h-32 bg-orange-200 opacity-50 rounded-tl-3xl"></div>
      </section>
    );
  }

  // Default features layout
  return (
    <section 
      id={section.id}
      className="py-20 lg:py-24 bg-white text-gray-900"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {content.heading && (
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
              {content.heading}
            </h2>
            {content.subheading && (
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {content.subheading}
              </p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {content.features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={feature.id} 
                className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 bg-white border border-gray-100"
              >
                {IconComponent && (
                  <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-orange-600" />
                  </div>
                )}
                <h3 className="text-xl lg:text-2xl font-semibold mb-4">
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
