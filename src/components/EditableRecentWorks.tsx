
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RecentWorksSection } from '@/types/content';
import { ArrowRight } from 'lucide-react';

interface EditableRecentWorksProps {
  section: RecentWorksSection;
  onSectionUpdate?: (section: RecentWorksSection) => void;
}

const EditableRecentWorks: React.FC<EditableRecentWorksProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!section.visible) return null;

  const categories = ['All', 'Houses', 'Blocks of flats', 'Garages', 'Hotels'];
  
  const filteredWorks = selectedCategory === 'All' 
    ? content.works 
    : content.works.filter(work => work.category === selectedCategory);

  return (
    <section 
      id={section.id}
      className={`${style?.padding || 'py-16'} ${style?.backgroundColor || 'bg-gray-900'} ${style?.textColor || 'text-white'} relative overflow-hidden`}
    >
      {/* Geometric Shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-300 opacity-80" />
      <div className="absolute bottom-0 left-0 w-24 h-48 bg-orange-400 opacity-80" />
      <div className="absolute top-1/3 right-0 w-48 h-32 bg-teal-200 opacity-80" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`mb-12 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'}`}>
          <p className="text-sm text-gray-400 mb-2">{content.subheading}</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            {content.heading}
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-start mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 border text-sm transition-colors ${
                  selectedCategory === category
                    ? 'border-white bg-white text-gray-900'
                    : 'border-gray-500 text-gray-300 hover:border-white hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredWorks.map((work, index) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Arrow overlay */}
                {index === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white rounded-none flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-black" />
                    </div>
                  </div>
                )}
              </div>
              
              <p className="text-sm text-orange-400 mb-2">{work.category}</p>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                {work.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditableRecentWorks;
