
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ContactSection } from '@/types/content';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface EditableContactProps {
  section: ContactSection;
  onSectionUpdate?: (section: ContactSection) => void;
}

const EditableContact: React.FC<EditableContactProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!section.visible) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you within 24 hours.');
    setFormData({});
    setIsSubmitting(false);
  };

  return (
    <section 
      id={section.id}
      className={`${style?.padding || 'py-16'} ${style?.backgroundColor || 'bg-blue-600'} ${style?.textColor || 'text-white'} relative overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {content.heading}
            </h2>
            
            {content.subheading && (
              <p className="text-xl mb-8 opacity-90">
                {content.subheading}
              </p>
            )}

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="opacity-90">{content.contactInfo.phone}</p>
                  <p className="text-sm opacity-75">Mon-Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="opacity-90">{content.contactInfo.email}</p>
                  <p className="text-sm opacity-75">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Visit Us</h4>
                  <p className="opacity-90">{content.contactInfo.address}</p>
                  <p className="text-sm opacity-75">Schedule an appointment</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-sm opacity-75 mb-2">Location</p>
              <p className="text-white">{content.mapPlaceholder}</p>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Request Free Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name || ''}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email || ''}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone || ''}
                    onChange={handleInputChange}
                    placeholder="+48 123 456 789"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type *</label>
                  <select
                    name="subject"
                    required
                    value={formData.subject || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  >
                    <option value="">Select Project Type</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="renovation">Renovation</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Details *</label>
                <textarea
                  name="message"
                  required
                  value={formData.message || ''}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your project, timeline, budget range, and any specific requirements..."
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                size="lg" 
                className="w-full bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 py-4 text-lg font-semibold disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : content.form.submitText}
              </Button>

              <p className="text-sm text-white/75 text-center">
                We'll respond within 24 hours with a detailed consultation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditableContact;
