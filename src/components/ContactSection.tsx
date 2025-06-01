
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Don't wait for your dreams!
              <span className="block text-terracotta-400 mt-2">
                Make them with us now!
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Ready to start your construction project? Get in touch with our expert team today 
              and let's bring your vision to life with quality, precision, and care.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-terracotta rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Call Us</div>
                  <div className="text-lg font-semibold">+91 98765 43210</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-sage rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email Us</div>
                  <div className="text-lg font-semibold">info@bluerockconstruction.in</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-sandstone rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Visit Us</div>
                  <div className="text-lg font-semibold">Mumbai, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-10 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl font-bold text-white mb-6">Get a Free Quote</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              
              <Input
                placeholder="Phone Number"
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
              
              <Input
                placeholder="Project Type"
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
              
              <Textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
              
              <Button 
                size="lg" 
                className="w-full gradient-terracotta text-white hover:scale-105 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
