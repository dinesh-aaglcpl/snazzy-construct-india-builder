
import React, { useState, useEffect } from 'react';
import { defaultSiteConfig } from '@/data/siteConfig';
import EditablePage from '@/components/EditablePage';
import { SiteConfig } from '@/types/content';

const Index = () => {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>({
    ...defaultSiteConfig,
    loading: true,
    editMode: false
  });

  useEffect(() => {
    // Simulate loading configuration from API/database
    const loadConfig = async () => {
      try {
        // This could be replaced with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSiteConfig(prev => ({
          ...prev,
          loading: false
        }));
      } catch (error) {
        console.error('Failed to load site configuration:', error);
        setSiteConfig(prev => ({
          ...prev,
          loading: false
        }));
      }
    };

    loadConfig();
  }, []);

  const handleConfigUpdate = (newConfig: SiteConfig) => {
    setSiteConfig(newConfig);
    
    // Here you could save to localStorage, database, etc.
    console.log('Site config updated:', newConfig);
    
    // Example: Save to localStorage
    try {
      localStorage.setItem('siteConfig', JSON.stringify(newConfig));
    } catch (error) {
      console.error('Failed to save config to localStorage:', error);
    }
  };

  return (
    <EditablePage 
      config={siteConfig}
      onConfigUpdate={handleConfigUpdate}
    />
  );
};

export default Index;
