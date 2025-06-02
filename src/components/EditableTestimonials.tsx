
import React, { useState, useEffect } from 'react';
import { TestimonialsSection } from '@/types/content';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface EditableTestimonialsProps {
  section: TestimonialsSection;
  onSectionUpdate?: (section: TestimonialsSection) => void;
}

const EditableTestimonials: React.FC<EditableTestimonialsProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'masonry' | 'carousel'>('masonry');

  useEffect(() => {
    if (viewMode === 'carousel') {
      const timer = setInterval(() => {
        setCurrentTestimonialIndex((prevIndex) => 
          (prevIndex + 1) % content.testimonials.length
        );
      }, 4000);

      return () => clearInterval(timer);
    }
  }, [viewMode, content.testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      (prevIndex + 1) % content.testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? content.testimonials.length - 1 : prevIndex - 1
    );
  };

  if (!section.visible) return null;

  return (
    <section 
      id={section.id}
      className={`${style?.padding || 'py-16 lg:py-24'} ${style?.backgroundColor || 'bg-gradient-to-br from-orange-50 via-white to-orange-50'} relative overflow-hidden`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'} animate-fade-in-up`}>
          <div className="inline-flex items-center justify-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
            Testimonials
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${style?.textColor || 'text-gray-900'} transform transition-all duration-700 hover:scale-105`}>
            {content.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Find out how our clients are spreading the word!
          </p>

          {/* View Mode Toggle */}
          <div className="flex justify-center mt-8">
            <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
              <button
                onClick={() => setViewMode('masonry')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  viewMode === 'masonry'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  viewMode === 'carousel'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                Carousel
              </button>
            </div>
          </div>
        </div>

        {/* Masonry Grid View */}
        {viewMode === 'masonry' && (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {content.testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="break-inside-avoid bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 opacity-0 animate-fade-in-up group cursor-pointer"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Header with avatar and close icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm transition-colors duration-300 group-hover:text-orange-600">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-sm transition-colors duration-300 group-hover:text-orange-500">
                        @{testimonial.name.toLowerCase().replace(' ', '')}
                      </div>
                    </div>
                  </div>
                  <X className="w-4 h-4 text-gray-400 transition-all duration-300 group-hover:text-gray-600 group-hover:rotate-90" />
                </div>

                {/* Testimonial Content */}
                <div className="text-gray-700 leading-relaxed mb-4 transition-colors duration-300 group-hover:text-gray-800">
                  {testimonial.quote}
                </div>

                {/* Position/Company */}
                <div className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-orange-500">
                  {testimonial.position}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        )}

        {/* Carousel View */}
        {viewMode === 'carousel' && (
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
              >
                {content.testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mx-4">
                      <div className="text-center">
                        {/* Quote Mark */}
                        <div className="text-6xl text-orange-500 mb-6 opacity-20">"</div>
                        
                        {/* Testimonial Content */}
                        <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                          {testimonial.quote}
                        </blockquote>
                        
                        {/* Client Info */}
                        <div className="flex items-center justify-center space-x-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-orange-100 transition-transform duration-300 hover:scale-110"
                          />
                          <div className="text-left">
                            <div className="font-semibold text-gray-900 text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-gray-600">
                              {testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-orange-50 text-orange-500 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
            >
              <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-orange-50 text-orange-500 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
            >
              <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {content.testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex
                      ? 'bg-orange-500 scale-125'
                      : 'bg-gray-300 hover:bg-orange-300'
                  }`}
                  onClick={() => setCurrentTestimonialIndex(index)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <p className="text-gray-600 mb-6 transform transition-all duration-500 hover:scale-105">
            Ready to join our satisfied clients?
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl relative overflow-hidden group">
            <span className="relative z-10">Start Your Project Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-orange-400 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default EditableTestimonials;
