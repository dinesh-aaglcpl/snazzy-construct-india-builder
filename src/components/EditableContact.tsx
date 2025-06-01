
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ContactSection } from '@/types/content';

interface EditableContactProps {
  section: ContactSection;
  onSectionUpdate?: (section: ContactSection) => void;
}

const EditableContact: React.FC<EditableContactProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;

  if (!section.visible) return null;

  return (
    <section 
      id={section.id}
      className={`${style?.padding || 'py-16 lg:py-24'} ${style?.backgroundColor || 'bg-gray-900'} relative overflow-hidden`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div className={`${style?.textColor || 'text-white'}`}>
            <h2 className={`text-4xl lg:text-6xl font-bold mb-6 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-left'}`}>
              {content.heading}
            </h2>
            
            <p className={`text-xl mb-8 leading-relaxed opacity-90 ${style?.alignment === 'left' ? 'text-left' : style?.alignment === 'right' ? 'text-right' : 'text-left'}`}>
              {content.subheading}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Call Us</div>
                  <div className="text-lg font-semibold">{content.contactInfo.phone}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email Us</div>
                  <div className="text-lg font-semibold">{content.contactInfo.email}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Visit Us</div>
                  <div className="text-lg font-semibold">{content.contactInfo.address}</div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 p-6 bg-gray-800 rounded-xl text-center">
              <p className="text-gray-400">{content.mapPlaceholder}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-10">
            <h3 className={`text-2xl font-bold mb-6 ${style?.textColor || 'text-white'}`}>
              {content.form.submitText.replace('Send', 'Get a Free Quote')}
            </h3>
            
            <form className="space-y-6">
              {content.form.fields.map((field, index) => (
                <div key={index}>
                  {field.type === 'textarea' ? (
                    <Textarea
                      placeholder={field.placeholder}
                      rows={4}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                      required={field.required}
                    />
                  ) : (
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                      required={field.required}
                    />
                  )}
                </div>
              ))}
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:scale-105 transition-all duration-300"
              >
                {content.form.submitText}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditableContact;
