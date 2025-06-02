import React from 'react';

const testimonials = [
  {
    quote: "BlueRock Construction transformed our vision into reality. Their attention to detail and commitment to quality is unmatched. Our new office building has exceeded all expectations.",
    name: "Rajesh Kumar",
    role: "CEO, TechVision India",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Working with BlueRock was an absolute pleasure. They delivered our residential complex on time and within budget, maintaining the highest standards throughout the project.",
    name: "Priya Sharma",
    role: "Property Developer, Mumbai",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The professionalism and expertise of BlueRock Construction is remarkable. They handled our infrastructure project with precision and delivered exceptional results.",
    name: "Dr. Amit Patel",
    role: "Municipal Commissioner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const TestimonialsGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Client Testimonials</h2>
        <p className="text-gray-600 mb-12">Discover why hundreds of clients trust us with their most important projects.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-gray-800 italic mb-4">“{t.quote}”</p>
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-orange-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
