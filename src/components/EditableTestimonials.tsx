
import React from 'react';
import { TestimonialsSection } from '@/types/content';
import { X } from 'lucide-react';

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
      className={`${style?.padding || 'py-16 lg:py-24'} ${style?.backgroundColor || 'bg-gradient-to-br from-orange-50 via-white to-orange-50'} relative overflow-hidden`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'}`}>
          <div className="inline-flex items-center justify-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Testimonials
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${style?.textColor || 'text-gray-900'}`}>
            {content.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find out how our clients are spreading the word!
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {content.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="break-inside-avoid bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Header with avatar and close icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      @{testimonial.name.toLowerCase().replace(' ', '')}
                    </div>
                  </div>
                </div>
                <X className="w-4 h-4 text-gray-400" />
              </div>

              {/* Testimonial Content */}
              <div className="text-gray-700 leading-relaxed mb-4">
                {testimonial.quote}
              </div>

              {/* Position/Company */}
              <div className="text-sm text-gray-500">
                {testimonial.position}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to join our satisfied clients?
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Project Today
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default EditableTestimonials;
