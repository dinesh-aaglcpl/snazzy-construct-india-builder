
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ContactSection } from '@/types/content';

interface EditableContactProps {
  section: ContactSection;
  onSectionUpdate?: (section: ContactSection) => void;
}

const EditableContact: React.FC<EditableContactProps> = ({ section, onSectionUpdate }) => {
  const { content, style } = section;
  const [formData, setFormData] = useState<Record<string, string>>({});

  if (!section.visible) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      id={section.id}
      className={`${style?.padding || 'py-16'} ${style?.backgroundColor || 'bg-gray-500'} ${style?.textColor || 'text-white'} relative overflow-hidden`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Geometric Shapes */}
      <div className="absolute top-0 right-0 w-48 h-32 bg-orange-300 opacity-80" />
      <div className="absolute bottom-0 left-0 w-32 h-48 bg-teal-200 opacity-80" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-black opacity-80" />
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            {content.heading}
          </h2>
          
          {content.subheading && (
            <p className="text-xl mb-8 opacity-90">
              {content.subheading}
            </p>
          )}
          
          <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-none text-lg">
            {content.form.submitText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EditableContact;
