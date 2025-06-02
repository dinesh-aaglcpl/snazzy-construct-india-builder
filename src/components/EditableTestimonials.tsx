
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

  // Extended testimonials list with social media style design
  const allTestimonials = [
    ...content.testimonials,
    {
      id: 'extra-1',
      quote: 'BlueRock Construction delivered exceptional quality on our commercial project. Their attention to detail and professional approach exceeded our expectations.',
      name: 'Rajesh Kumar',
      position: 'CEO, TechCorp Industries',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 'extra-2',
      quote: 'From planning to execution, BlueRock made our dream home a reality. The team was professional, timely, and the quality of work is outstanding.',
      name: 'Priya Sharma',
      position: 'Homeowner, Mumbai',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b510?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 'extra-3',
      quote: 'Working with BlueRock on our infrastructure project was seamless. Their expertise in modern construction techniques is unmatched in the industry.',
      name: 'Amit Patel',
      position: 'Project Manager, InfraDev',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 'extra-4',
      quote: 'BlueRock Construction transformed our vision into reality with precision and care. Every detail was handled with professionalism.',
      name: 'Sneha Gupta',
      position: 'Architect, Design Studio',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 'extra-5',
      quote: 'The renovation project was completed on time and within budget. BlueRock\'s team maintained excellent communication throughout the process.',
      name: 'Vikram Singh',
      position: 'Business Owner, Delhi',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 'extra-6',
      quote: 'Outstanding craftsmanship and attention to detail. BlueRock Construction delivers premium quality that stands the test of time.',
      name: 'Kavya Reddy',
      position: 'Interior Designer, Bangalore',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section 
      id={section.id}
      className={`${style?.padding || 'py-16 lg:py-24'} ${style?.backgroundColor || 'bg-gradient-to-br from-gray-50 via-white to-orange-50'} relative overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 lg:w-96 lg:h-96 bg-orange-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 lg:w-80 lg:h-80 bg-orange-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 lg:mb-20 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-center'} animate-fade-in-up`}>
          <div className="inline-flex items-center justify-center bg-orange-100 text-orange-600 px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm font-medium mb-6 lg:mb-8 hover:scale-105 transition-transform duration-300 shadow-lg">
            <Quote className="w-4 h-4 mr-2" />
            Testimonials
          </div>
          <h2 className={`text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 ${style?.textColor || 'text-gray-900'} leading-tight`}>
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-orange-600 bg-clip-text text-transparent">
              {content.heading}
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            Discover why hundreds of clients trust us with their most important projects
          </p>
        </div>

        {/* Social Media Style Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up group cursor-pointer relative overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Social Media Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 border-2 border-orange-100"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-600 text-sm lg:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-xs lg:text-sm transition-colors duration-300 group-hover:text-orange-500">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <X className="w-4 h-4 text-gray-400 transition-all duration-300 group-hover:text-gray-600 group-hover:rotate-90" />
              </div>

              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <div className="text-gray-700 leading-relaxed text-sm lg:text-base transition-colors duration-300 group-hover:text-gray-800 relative">
                <Quote className="w-6 h-6 text-orange-500/30 float-left mr-2 -mt-1" />
                {testimonial.quote}
              </div>

              {/* Background Decoration */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-500/5 rounded-full transition-all duration-500 group-hover:scale-110"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to join our <span className="text-orange-600">satisfied clients?</span>
            </h3>
            <p className="text-gray-600 mb-6 lg:mb-8 text-base lg:text-lg">
              Experience the same quality and professionalism that made our clients happy.
            </p>
            <button className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-orange-500/25 relative overflow-hidden group">
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
