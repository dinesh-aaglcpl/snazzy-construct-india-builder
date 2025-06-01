
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
      className="py-20 lg:py-24 bg-gray-50 text-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm text-gray-600 mb-4 font-medium uppercase tracking-wider">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            {content.heading}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Testimonial Content */}
          <div className="space-y-8">
            <div className="space-y-8">
              <blockquote className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-700">
                "{currentTestimonial.quote}"
              </blockquote>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-lg lg:text-xl text-gray-900">
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
                className="w-14 h-14 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors rounded-xl"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-14 h-14 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors rounded-xl"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Customer Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              {/* Geometric overlays */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-200 opacity-80 rounded-bl-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-16 bg-orange-300 opacity-80 rounded-tr-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditableTestimonials;
