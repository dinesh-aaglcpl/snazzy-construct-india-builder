
import React from 'react';
import { TestimonialsSection } from '@/types/content';
import { X, Quote, Star } from 'lucide-react';

interface EditableTestimonialsProps {
  section: TestimonialsSection;
  onSectionUpdate?: (section: TestimonialsSection) => void;
}

const EditableTestimonials: React.FC<EditableTestimonialsProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;

  if (!section.visible) return null;

  return (
    <section 
      id={section.id}
      className={`${style?.padding || 'py-20 lg:py-32'} ${style?.backgroundColor || 'bg-gradient-to-br from-gray-50 via-white to-orange-50'} relative overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'} animate-fade-in-up`}>
          <div className="inline-flex items-center justify-center bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-medium mb-8 hover:scale-105 transition-transform duration-300 shadow-lg">
            <Quote className="w-4 h-4 mr-2" />
            What Our Clients Say
          </div>
          <h2 className={`text-5xl lg:text-6xl font-bold mb-8 ${style?.textColor || 'text-gray-900'} leading-tight`}>
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-orange-600 bg-clip-text text-transparent">
              {content.heading}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            Discover why hundreds of clients trust us with their most important projects
          </p>
        </div>

        {/* Grid View */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {content.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="break-inside-avoid bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 opacity-0 animate-fade-in-up group cursor-pointer relative overflow-hidden"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Decorative Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 border-2 border-orange-100"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-600">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm transition-colors duration-300 group-hover:text-orange-500">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <X className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-gray-600 group-hover:rotate-90" />
              </div>

              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <div className="text-gray-700 leading-relaxed mb-4 transition-colors duration-300 group-hover:text-gray-800 relative">
                <Quote className="w-8 h-8 text-orange-500/30 float-left mr-2 -mt-1" />
                {testimonial.quote}
              </div>

              {/* Background Decoration */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500/5 rounded-full transition-all duration-500 group-hover:scale-110"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to join our <span className="text-orange-600">satisfied clients?</span>
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Experience the same quality and professionalism that made our clients happy.
            </p>
            <button className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-orange-500/25 relative overflow-hidden group">
              <span className="relative z-10 flex items-center">
                Start Your Project Today
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditableTestimonials;
