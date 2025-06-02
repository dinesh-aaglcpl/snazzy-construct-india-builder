
import React from 'react';
import { RecentWorksSection } from '@/types/content';
import { ArrowUpRight, Calendar, MapPin, Users } from 'lucide-react';

interface EditableRecentWorksProps {
  section: RecentWorksSection;
  onSectionUpdate?: (section: RecentWorksSection) => void;
}

const EditableRecentWorks: React.FC<EditableRecentWorksProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;

  if (!section.visible) return null;

  // Enhanced project data with more details
  const enhancedWorks = content.works.map((work, index) => ({
    ...work,
    duration: ['6 months', '8 months', '4 months', '12 months'][index % 4],
    location: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'][index % 4],
    teamSize: ['15 people', '20 people', '12 people', '25 people'][index % 4],
    completedYear: ['2024', '2023', '2024', '2023'][index % 4]
  }));

  return (
    <section 
      id={section.id}
      className={`${style?.padding || 'py-16 lg:py-24'} ${style?.backgroundColor || 'bg-white'} relative overflow-hidden`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 lg:mb-20 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'} animate-fade-in-up`}>
          <div className="inline-flex items-center justify-center bg-orange-100 text-orange-600 px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm font-medium mb-6 lg:mb-8 hover:scale-105 transition-transform duration-300 shadow-lg">
            Recent Projects
          </div>
          <h2 className={`text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 ${style?.textColor || 'text-gray-900'} transform transition-all duration-700 hover:scale-105`}>
            {content.heading}
          </h2>
          <p className={`text-lg lg:text-xl max-w-3xl mx-auto ${style?.textColor || 'text-gray-600'} opacity-0 animate-fade-in-up leading-relaxed`} style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            {content.subheading}
          </p>
        </div>

        {/* Modern Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {enhancedWorks.map((work, index) => (
            <div
              key={work.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer opacity-0 animate-fade-in-up border border-gray-100"
              style={{ 
                animationDelay: `${400 + index * 200}ms`, 
                animationFillMode: 'forwards' 
              }}
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {work.category}
                </div>

                {/* External Link Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform rotate-45 group-hover:rotate-0 hover:bg-white/30">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {work.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base mb-6 leading-relaxed">
                  {work.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>{work.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>{work.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span>{work.teamSize}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Completed {work.completedYear}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full bg-gray-50 hover:bg-orange-50 text-gray-700 hover:text-orange-700 py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 border border-gray-200 hover:border-orange-200 group-hover:shadow-lg">
                  View Project Details
                  <ArrowUpRight className="w-4 h-4 inline-block ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12 lg:mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
          <button className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-orange-500/25 relative overflow-hidden group">
            <span className="relative z-10 flex items-center">
              View All Projects
              <ArrowUpRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-8 w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-r from-orange-100/40 to-orange-200/40 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-8 w-40 h-40 lg:w-56 lg:h-56 bg-gradient-to-r from-orange-200/30 to-orange-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default EditableRecentWorks;
