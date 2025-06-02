
import React from 'react';
import { Star } from 'lucide-react';
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
      id="recent-works"
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
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 hover:rotate-1 cursor-pointer opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${400 + index * 200}ms`, 
                animationFillMode: 'forwards' 
              }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:rotate-2"
                />
                {/* Enhanced image overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Project Rating - shown on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-xs font-semibold text-gray-800 ml-1">5.0</span>
                  </div>
                </div>

                {/* Animated border around image */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-orange-400/60 transition-all duration-500 rounded-3xl transform scale-95 group-hover:scale-100"></div>
              </div>
              
              {/* Enhanced content overlay with project details */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block px-4 py-2 bg-orange-500/90 backdrop-blur-sm rounded-full text-xs font-medium transform scale-0 group-hover:scale-100 transition-all duration-300 delay-200 shadow-lg">
                    {work.category}
                  </div>
                  <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 transform translate-x-[-30px] group-hover:translate-x-0 transition-all duration-500 delay-100 drop-shadow-lg">
                  {work.title}
                </h3>
                
                <p className="text-gray-200 text-base opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400 transform translate-y-4 group-hover:translate-y-0 leading-relaxed">
                  {work.description}
                </p>

                {/* Project stats */}
                <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500">
                  <div className="text-sm text-gray-300">
                    <span className="font-semibold">Duration:</span> 6 months
                  </div>
                  <div className="text-sm text-gray-300">
                    <span className="font-semibold">Budget:</span> $2.5M
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-x-3 group-hover:translate-y-[-12px] group-hover:scale-150 shadow-lg"></div>
              <div className="absolute top-12 right-12 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform group-hover:translate-x-6 group-hover:translate-y-[-6px] shadow-lg"></div>
              <div className="absolute top-8 right-20 w-2 h-2 bg-orange-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 delay-300 transform group-hover:translate-x-2 group-hover:translate-y-[-8px]"></div>

              {/* Enhanced glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-600/5 to-orange-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl shadow-2xl"></div>
              
              {/* Pulse effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse bg-gradient-to-br from-orange-400/20 to-orange-600/20"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-8 w-40 h-40 bg-gradient-to-r from-orange-100/40 to-orange-200/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-8 w-48 h-48 bg-gradient-to-r from-orange-200/30 to-orange-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-orange-300/20 to-orange-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '5s' }}></div>
      </div>
    </section>
  );
};

export default EditableRecentWorks;
