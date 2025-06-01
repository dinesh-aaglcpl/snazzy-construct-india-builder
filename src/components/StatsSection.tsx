
import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-bold text-white">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="section-padding relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video/Image Preview */}
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Construction project"
              className="rounded-2xl w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
              Our <span className="text-terracotta-400">Achievements</span>
            </h2>
            
            <div className="space-y-8">
              <div>
                <CountUp end={21} duration={2000} prefix="+" />
                <p className="text-lg text-gray-300 mt-2">Years of Experience</p>
              </div>
              
              <div>
                <CountUp end={33107} duration={2500} prefix="+" />
                <p className="text-lg text-gray-300 mt-2">Houses Modernized</p>
              </div>
              
              <div>
                <CountUp end={715} duration={2200} prefix="+" />
                <p className="text-lg text-gray-300 mt-2">Construction Supervision Experts</p>
              </div>
              
              <div>
                <CountUp end={150} duration={1800} prefix="+" />
                <p className="text-lg text-gray-300 mt-2">Active Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
