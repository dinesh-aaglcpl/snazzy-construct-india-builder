
import React from 'react';
import { SiteConfig } from '@/types/content';
import EditableHeader from './EditableHeader';
import EditableHero from './EditableHero';
import EditableFeatures from './EditableFeatures';
import EditableTestimonials from './EditableTestimonials';
import EditableRecentWorks from './EditableRecentWorks';
import EditableContact from './EditableContact';
import EditableFooter from './EditableFooter';

interface EditablePageProps {
  config: SiteConfig;
  onConfigUpdate?: (config: SiteConfig) => void;
}

const EditablePage: React.FC<EditablePageProps> = ({ config, onConfigUpdate }) => {
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

  return (
    <div 
      className="min-h-screen"
      style={{
        fontFamily: config.theme.fontFamily,
        fontSize: config.theme.fontSize.base,
        '--primary-color': config.theme.primaryColor,
        '--secondary-color': config.theme.secondaryColor,
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
