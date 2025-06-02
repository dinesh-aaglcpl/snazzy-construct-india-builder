
import React from 'react';
import { BaseSection } from '@/types/content';

interface AboutSection extends BaseSection {
  type: 'about';
  content: {
    heading: string;
    subheading: string;
    description: string;
    aboutUsCard: {
      title: string;
      content: string;
    };
    statistics: {
      projects: {
        number: string;
        label: string;
      };
      clients: {
        number: string;
        label: string;
      };
      awards: {
        number: string;
        label: string;
      };
    };
  };
}

interface EditableAboutProps {
  section: AboutSection;
  onSectionUpdate?: (section: AboutSection) => void;
}

const EditableAbout: React.FC<EditableAboutProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;

  if (!section.visible) return null;

  return (
    <section 
      id={section.id}
      className={`${style?.padding || 'py-20 lg:py-32'} ${style?.backgroundColor || 'bg-gray-50'} relative overflow-hidden`}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {content.heading}
              </h2>
              <p className="text-gray-600 text-xl lg:text-2xl leading-relaxed">
                {content.subheading}
              </p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="order-first lg:order-last">
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern architectural spiral"
                className="w-full h-80 lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Content and Card Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20 lg:mb-28">
          {/* Quote and Image Section */}
          <div className="space-y-8">
            <div className="relative">
              <div className="text-7xl lg:text-9xl text-orange-200 font-serif absolute -top-6 -left-6 leading-none">"</div>
              <div className="relative z-10 pl-8 lg:pl-12">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-light">
                  {content.description}
                </p>
              </div>
            </div>
            
            {/* Decorative Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Abstract architecture"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* About Us Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10 space-y-6 lg:space-y-8">
                <div className="flex items-center space-x-6">
                  <h3 className="text-white font-bold text-xl lg:text-2xl">{content.aboutUsCard.title}</h3>
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-white/95 leading-relaxed text-base lg:text-lg font-light">
                  {content.aboutUsCard.content}
                </p>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 lg:w-48 lg:h-48 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 lg:w-40 lg:h-40 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-orange-600 mb-4 transition-all duration-300 group-hover:scale-110">
                {content.statistics.projects.number}
              </div>
              <div className="text-gray-600 font-semibold text-lg lg:text-xl uppercase tracking-wide">
                {content.statistics.projects.label}
              </div>
            </div>
            
            <div className="text-center group md:border-l md:border-r border-gray-200">
              <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-orange-600 mb-4 transition-all duration-300 group-hover:scale-110">
                {content.statistics.clients.number}
              </div>
              <div className="text-gray-600 font-semibold text-lg lg:text-xl uppercase tracking-wide">
                {content.statistics.clients.label}
              </div>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-orange-600 mb-4 transition-all duration-300 group-hover:scale-110">
                {content.statistics.awards.number}
              </div>
              <div className="text-gray-600 font-semibold text-lg lg:text-xl uppercase tracking-wide">
                {content.statistics.awards.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditableAbout;
