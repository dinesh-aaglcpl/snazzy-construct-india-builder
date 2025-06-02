
import React, { useState, useEffect } from 'react';
import { TestimonialsSection } from '@/types/content';
import { Quote, Star, X } from 'lucide-react';

interface EditableTestimonialsProps {
  section: TestimonialsSection;
  onSectionUpdate?: (section: TestimonialsSection) => void;
}

const EditableTestimonials: React.FC<EditableTestimonialsProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;

  if (!section.visible) return null;

  return (
    <section 
      id="testimonials"
      className={`${style?.padding || 'py-20 lg:py-32'} ${style?.backgroundColor || 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50'} relative overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center bg-gray-100 text-gray-600 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Quote className="w-4 h-4 mr-2" />
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Public Cheers for Us!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find out how our users are spreading the word!
          </p>
        </div>

        {/* Twitter-style Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* X Icon (Twitter style) */}
                <div className="absolute top-4 right-4">
                  <X className="w-5 h-5 text-gray-400" />
                </div>

                {/* Profile Section */}
                <div className="flex items-start space-x-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-gray-900 text-base truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm truncate">
                      @{testimonial.position.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="text-gray-700 text-base leading-relaxed mb-4">
                  {testimonial.quote}
                </div>

                {/* Engagement Stats (Twitter-style) */}
                <div className="flex items-center justify-between text-gray-400 text-sm border-t border-gray-100 pt-3">
                  <div className="flex items-center space-x-4">
                    <span className="hover:text-blue-500 cursor-pointer transition-colors">
                      💬 {Math.floor(Math.random() * 50) + 10}
                    </span>
                    <span className="hover:text-green-500 cursor-pointer transition-colors">
                      🔄 {Math.floor(Math.random() * 100) + 20}
                    </span>
                    <span className="hover:text-red-500 cursor-pointer transition-colors">
                      ❤️ {Math.floor(Math.random() * 200) + 50}
                    </span>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to join our <span className="text-orange-600">satisfied clients?</span>
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Experience the same quality and professionalism that made our clients happy.
            </p>
            <button className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-orange-500/25 relative overflow-hidden group">
              <span className="relative z-10">Start Your Project Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditableTestimonials;
