
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
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {content.heading}
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {content.subheading}
            </p>
            {/* Download/Action Button */}
            <div className="flex items-center justify-end">
              <button className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Spiral Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern architectural spiral"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Quote Section */}
          <div className="relative">
            <div className="text-6xl text-gray-300 font-serif mb-4">"</div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {content.description}
            </p>
            
            {/* Decorative Image */}
            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Abstract architecture"
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* About Us Card */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <h3 className="text-green-400 font-semibold text-lg mr-4">{content.aboutUsCard.title}</h3>
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                {content.aboutUsCard.content}
              </p>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                {content.statistics.projects.number}
              </div>
              <div className="text-gray-600 font-medium">
                {content.statistics.projects.label}
              </div>
            </div>
            
            <div className="text-center md:text-left md:border-l md:border-r border-gray-200 md:pl-8 md:pr-8">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                {content.statistics.clients.number}
              </div>
              <div className="text-gray-600 font-medium">
                {content.statistics.clients.label}
              </div>
            </div>
            
            <div className="text-center md:text-left md:pl-8">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                {content.statistics.awards.number}
              </div>
              <div className="text-gray-600 font-medium">
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
