
import React, { useState, useEffect } from 'react';
import { TestimonialsSection } from '@/types/content';

interface EditableTestimonialsProps {
  section: TestimonialsSection;
  onSectionUpdate?: (section: TestimonialsSection) => void;
}

const EditableTestimonials: React.FC<EditableTestimonialsProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (content.autoScroll) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.testimonials.length);
      }, content.scrollSpeed);

      return () => clearInterval(timer);
    }
  }, [content.autoScroll, content.scrollSpeed, content.testimonials.length]);

  if (!section.visible) return null;

  return (
    <section 
      id={section.id}
      className={`${style?.padding || 'py-16 lg:py-24'} ${style?.backgroundColor || 'bg-gray-50'} relative overflow-hidden`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-16 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'}`}>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${style?.textColor || 'text-gray-900'}`}>
            {content.heading}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {content.testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute inset-0 translate-x-8'
                }`}
              >
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
                  <div className="text-center">
                    <div className="text-6xl text-orange-500 mb-6">"</div>
                    <blockquote className={`text-xl lg:text-2xl leading-relaxed mb-8 italic ${style?.textColor || 'text-gray-700'}`}>
                      {testimonial.quote}
                    </blockquote>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                      />
                      <div className="text-left">
                        <div className={`font-semibold text-lg ${style?.textColor || 'text-gray-900'}`}>
                          {testimonial.name}
                        </div>
                        <div className={`${style?.textColor || 'text-gray-600'}`}>
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {content.testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-orange-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditableTestimonials;
