
import React, { useState, useEffect } from 'react';
import { TestimonialsSection } from '@/types/content';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface EditableTestimonialsProps {
  section: TestimonialsSection;
  onSectionUpdate?: (section: TestimonialsSection) => void;
}

const EditableTestimonials: React.FC<EditableTestimonialsProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        (prevIndex + 1) % content.testimonials.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [content.testimonials.length]);

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
      id="testimonials"
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

        {/* Unified Grid Layout with Embedded Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
            >
              {content.testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl mx-6 border border-gray-100 relative overflow-hidden">
                    {/* Clean design without heavy shading */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                    
                    <div className="text-center relative z-10">
                      {/* Star Rating */}
                      <div className="flex justify-center mb-8">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                        ))}
                      </div>

                      {/* Quote Mark */}
                      <Quote className="w-12 h-12 text-orange-500/30 mx-auto mb-8" />
                      
                      {/* Testimonial Content */}
                      <blockquote className="text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-12 font-light">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      {/* Client Info */}
                      <div className="flex items-center justify-center space-x-6">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-orange-100 transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-gray-900 text-xl mb-1">
                            {testimonial.name}
                          </div>
                          <div className="text-orange-600 font-medium">
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

          {/* Grid Preview of All Testimonials */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {content.testimonials.map((testimonial, index) => (
              <div
                key={`preview-${testimonial.id}`}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden border-2 ${
                  index === currentTestimonialIndex 
                    ? 'border-orange-500 scale-105 shadow-lg' 
                    : 'border-gray-200 hover:border-orange-300 hover:scale-102'
                }`}
              >
                <div className="bg-white p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                    "{testimonial.quote.substring(0, 80)}..."
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Carousel Controls */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/3 -translate-y-1/2 z-10 bg-white hover:bg-orange-50 text-orange-500 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl group border border-orange-100"
          >
            <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/3 -translate-y-1/2 z-10 bg-white hover:bg-orange-50 text-orange-500 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl group border border-orange-100"
          >
            <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </button>

          {/* Enhanced Carousel Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {content.testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonialIndex
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 scale-125 shadow-lg'
                    : 'bg-gray-300 hover:bg-orange-300'
                }`}
                onClick={() => setCurrentTestimonialIndex(index)}
              />
            ))}
          </div>
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
                <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
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
