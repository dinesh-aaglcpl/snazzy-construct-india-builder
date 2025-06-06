
import React, { useState, useEffect } from 'react';
import { SiteConfig } from '@/types/content';
import EditableHeader from './EditableHeader';
import EditableHero from './EditableHero';
import EditableAbout from './EditableAbout';
import EditableFeatures from './EditableFeatures';
import EditableTestimonials from './EditableTestimonials';
import EditableRecentWorks from './EditableRecentWorks';
import EditableContact from './EditableContact';
import EditableFooter from './EditableFooter';
import LoadingSkeleton from './LoadingSkeleton';

interface EditablePageProps {
  config: SiteConfig;
  onConfigUpdate?: (config: SiteConfig) => void;
}

const EditablePage: React.FC<EditablePageProps> = ({ config, onConfigUpdate }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionUpdate = (updatedSection: any) => {
    if (onConfigUpdate) {
      const updatedConfig = {
        ...config,
        sections: config.sections.map(section => 
          section.id === updatedSection.id ? updatedSection : section
        )
      };
      onConfigUpdate(updatedConfig);
    }
  };

  // Show loading skeleton if loading or config indicates loading
  if (isLoading || config.loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div 
      className="min-h-screen"
      style={{
        fontFamily: config.theme.fontFamily,
        fontSize: config.theme.fontSize.base,
        '--primary-color': config.theme.primaryColor,
        '--secondary-color': config.theme.secondaryColor,
        '--border-radius': config.theme.borderRadius || '8px',
        '--max-width': config.theme.maxWidth || '1200px',
      } as React.CSSProperties}
    >
      {config.sections.map((section) => {
        switch (section.type) {
          case 'header':
            return (
              <EditableHeader 
                key={section.id}
                section={section}
                onSectionUpdate={handleSectionUpdate}
              />
            );
          case 'hero':
            return (
              <EditableHero 
                key={section.id}
                section={section}
                onSectionUpdate={handleSectionUpdate}
              />
            );
          case 'about':
            return (
              <EditableAbout 
                key={section.id}
                section={section}
                onSectionUpdate={handleSectionUpdate}
              />
            );
          case 'features':
            return (
              <EditableFeatures 
                key={section.id}
                section={section}
                onSectionUpdate={handleSectionUpdate}
              />
            );
          case 'testimonials':
            return (
              <EditableTestimonials 
                key={section.id}
                section={section}
                onSectionUpdate={handleSectionUpdate}
              />
            );
          case 'recent-works':
            return (
              <EditableRecentWorks 
                key={section.id}
                section={section}
                onSectionUpdate={handleSectionUpdate}
              />
            );
          case 'contact':
            return (
              <EditableContact 
                key={section.id}
                section={section}
                onSectionUpdate={handleSectionUpdate}
              />
            );
          case 'footer':
            return (
              <EditableFooter 
                key={section.id}
                section={section}
                onSectionUpdate={handleSectionUpdate}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default EditablePage;
