
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const services = [
  {
    title: 'Residential Construction',
    description: 'Custom homes, apartments, and residential complexes built with modern techniques and traditional craftsmanship.',
    details: 'From luxury villas to affordable housing, we create living spaces that reflect your lifestyle and aspirations.'
  },
  {
    title: 'Commercial Construction',
    description: 'Office buildings, retail spaces, and commercial complexes designed for functionality and aesthetic appeal.',
    details: 'We understand the unique requirements of commercial spaces and deliver projects that enhance business productivity.'
  },
  {
    title: 'Infrastructure Development',
    description: 'Roads, bridges, and public infrastructure projects that serve communities for generations.',
    details: 'Our infrastructure projects are built to withstand time and weather, ensuring long-term value for communities.'
  },
  {
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces with our comprehensive renovation and remodeling services.',
    details: 'Whether it\'s a complete makeover or targeted improvements, we breathe new life into existing structures.'
  },
  {
    title: 'Project Management',
    description: 'End-to-end project management ensuring timely delivery and quality assurance.',
    details: 'Our experienced project managers coordinate all aspects of construction to deliver exceptional results.'
  }
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 gradient-sandstone rounded-full opacity-5 translate-x-48 -translate-y-48" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Construction <span className="text-gradient">Services</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We offer comprehensive construction services across residential, commercial, and infrastructure sectors. 
              Our expert team ensures quality, safety, and timely delivery for every project.
            </p>

            {/* Services Accordion */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                      <ChevronDown 
                        className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-6 pt-0 bg-gray-50">
                      <p className="text-gray-600">{service.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Construction worker"
              className="rounded-2xl w-full h-[600px] object-cover shadow-2xl"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 gradient-terracotta rounded-2xl opacity-80 animate-float" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-sage rounded-2xl opacity-60 animate-float" style={{animationDelay: '2s'}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
