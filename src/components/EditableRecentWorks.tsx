
import React from 'react';
import { RecentWorksSection } from '@/types/content';

interface EditableRecentWorksProps {
  section: RecentWorksSection;
  onSectionUpdate?: (section: RecentWorksSection) => void;
}

const EditableRecentWorks: React.FC<EditableRecentWorksProps> = ({ section, onSectionUpdate }) => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {content.works.map((work, index) => (
            <div
              key={work.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 cursor-pointer opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${400 + index * 200}ms`, 
                animationFillMode: 'forwards' 
              }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Image overlay with animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                {/* Animated border around image */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-orange-400/50 transition-all duration-500 rounded-2xl transform scale-95 group-hover:scale-100"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="inline-block px-3 py-1 bg-orange-500 rounded-full text-xs font-medium mb-3 transform scale-0 group-hover:scale-100 transition-all duration-300 delay-200 shadow-lg">
                  {work.category}
                </div>
                <h3 className="text-xl font-semibold mb-2 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500 delay-100">
                  {work.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 transform translate-y-4 group-hover:translate-y-0">
                  {work.description}
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-x-2 group-hover:translate-y-[-8px] group-hover:scale-150"></div>
              <div className="absolute top-8 right-8 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform group-hover:translate-x-4 group-hover:translate-y-[-4px]"></div>

              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-8 w-32 h-32 bg-gradient-to-r from-orange-100/30 to-orange-200/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-8 w-40 h-40 bg-gradient-to-r from-orange-200/20 to-orange-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default EditableRecentWorks;
