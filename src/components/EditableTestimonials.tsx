
import React, { useState } from 'react';
import { TestimonialsSection } from '@/types/content';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface EditableTestimonialsProps {
  section: TestimonialsSection;
  onSectionUpdate?: (section: TestimonialsSection) => void;
}

const EditableTestimonials: React.FC<EditableTestimonialsProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!section.visible) return null;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? content.testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = content.testimonials[currentIndex];

  return (
    <section 
      id={section.id}
      className={`${style?.padding || 'py-16'} ${style?.backgroundColor || 'bg-gray-50'} ${style?.textColor || 'text-gray-900'} relative overflow-hidden`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-2">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            {content.heading}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Testimonial Content */}
          <div className="relative">
            <div className="mb-8">
              <blockquote className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-8">
                "{currentTestimonial.quote}"
              </blockquote>
              
              <div className="mb-8">
                <h4 className="font-semibold text-lg text-gray-900">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-600">
                  {currentTestimonial.position}
                </p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Customer Image */}
          <div className="relative">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-full h-96 object-cover"
            />
            {/* Geometric overlays */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-200 opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-16 bg-orange-300 opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditableTestimonials;
