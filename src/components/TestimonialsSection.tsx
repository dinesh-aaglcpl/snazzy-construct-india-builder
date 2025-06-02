import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "BlueRock Construction transformed our vision into reality. Their attention to detail and commitment to quality is unmatched. Our new office building has exceeded all expectations.",
    name: "Rajesh Kumar",
    position: "CEO, TechVision India",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    quote: "Working with BlueRock was an absolute pleasure. They delivered our residential complex on time and within budget, maintaining the highest standards throughout the project.",
    name: "Priya Sharma",
    position: "Property Developer, Mumbai",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    quote: "The professionalism and expertise of BlueRock Construction is remarkable. They handled our infrastructure project with precision and delivered exceptional results.",
    name: "Dr. Amit Patel",
    position: "Municipal Commissioner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-sandstone-50 to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300 rounded-full opacity-10 -translate-x-36 -translate-y-36" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full opacity-10 translate-x-48 translate-y-48" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Customers' <span className="text-orange-500">Opinions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with BlueRock Construction.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-xl transition hover:shadow-2xl">
              <div className="text-center">
                {/* Quote */}
                <div className="text-5xl text-orange-400 mb-6 leading-none">“</div>
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
