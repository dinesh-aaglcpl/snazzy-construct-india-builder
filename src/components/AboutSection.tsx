
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gradient-to-br from-gray-50 to-sandstone-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 gradient-sage rounded-full opacity-5 -translate-x-36 -translate-y-36" />
      <div className="absolute bottom-0 right-0 w-96 h-96 gradient-terracotta rounded-full opacity-5 translate-x-48 translate-y-48" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-30px]'
          }`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Construction professional"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl glass-morphism">
                <div className="text-3xl font-bold text-terracotta-600">21+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[30px]'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Our <span className="text-gradient">Company</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              BlueRock Construction has been a trusted name in the Indian construction industry for over two decades. 
              We specialize in residential, commercial, and infrastructure projects, delivering excellence through 
              innovation and traditional craftsmanship.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, safety, and timely delivery has earned us the trust of thousands of clients 
              across India. From modern homes to commercial complexes, we build with passion and precision.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                'Quality Materials',
                'Expert Craftsmen',
                'Timely Delivery',
                'Cost Effective'
              ].map((feature, index) => (
                <div key={feature} className="flex items-center space-x-3">
                  <div className="w-5 h-5 gradient-terracotta rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="gradient-sage text-white hover:scale-105 transition-all duration-300"
            >
              Get to Know Us Better
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
