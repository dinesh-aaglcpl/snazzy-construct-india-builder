
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RecentWorksSection } from '@/types/content';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface EditableRecentWorksProps {
  section: RecentWorksSection;
  onSectionUpdate?: (section: RecentWorksSection) => void;
}

const EditableRecentWorks: React.FC<EditableRecentWorksProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!section.visible) return null;

  const categories = ['All', ...Array.from(new Set(content.works.map(work => work.category)))];
  
  const filteredWorks = selectedCategory === 'All' 
    ? content.works 
    : content.works.filter(work => work.category === selectedCategory);

  return (
    <section 
      id={section.id}
      className="py-20 lg:py-24 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40 40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 rounded-bl-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-48 bg-blue-400 opacity-15 rounded-tr-3xl" />
      <div className="absolute top-1/3 right-0 w-48 h-32 bg-blue-300 opacity-10 rounded-l-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm text-blue-400 mb-4 font-semibold uppercase tracking-wider">{content.subheading}</p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 leading-tight">
            {content.heading}
          </h2>
          
          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-xl border text-sm lg:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'border-blue-500 bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10'
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-75">
                  ({category === 'All' ? content.works.length : content.works.filter(w => w.category === category).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Works Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {filteredWorks.map((work, index) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-8 bg-gray-800">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with Project Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-blue-500 text-white px-3 py-2 rounded-lg font-medium">
                        {work.category}
                      </span>
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <span className="text-sm text-blue-400 font-medium">{work.category}</span>
                <h3 className="text-xl lg:text-2xl font-semibold group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                  {work.title}
                </h3>
                <p className="text-gray-400 leading-relaxed line-clamp-3">
                  {work.description}
                </p>
                <div className="pt-4">
                  <button className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-3 group-hover:gap-4 transition-all">
                    View Project Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg text-lg"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EditableRecentWorks;
