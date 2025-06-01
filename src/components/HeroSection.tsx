
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          transform: `translateY(${offsetY * 0.5}px)`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 gradient-terracotta rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-32 left-16 w-16 h-16 gradient-sage rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 gradient-sandstone rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Professional construction
          <span className="block text-gradient">services for your needs</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Building dreams with precision, quality, and trust across India
        </p>
        
        <Button 
          size="lg" 
          className="gradient-terracotta text-white hover:scale-105 transition-all duration-300 animate-fade-in-up px-8 py-6 text-lg"
          style={{animationDelay: '0.4s'}}
        >
          See Our Services
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
