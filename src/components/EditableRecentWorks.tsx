
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
        <div className={`text-center mb-16 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'}`}>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${style?.textColor || 'text-gray-900'}`}>
            {content.heading}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${style?.textColor || 'text-gray-600'}`}>
            {content.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {content.works.map((work) => (
            <div
              key={work.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-block px-3 py-1 bg-orange-500 rounded-full text-xs font-medium mb-3">
                  {work.category}
                </div>
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditableRecentWorks;
