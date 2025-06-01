
import React, { useState } from 'react';
import { defaultSiteConfig } from '@/data/siteConfig';
import EditablePage from '@/components/EditablePage';
import { SiteConfig } from '@/types/content';

const Index = () => {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(defaultSiteConfig);

  const handleConfigUpdate = (newConfig: SiteConfig) => {
    setSiteConfig(newConfig);
    // Here you could save to localStorage, database, etc.
    console.log('Site config updated:', newConfig);
  };

  return (
    <EditablePage 
      config={siteConfig}
      onConfigUpdate={handleConfigUpdate}
    />
  );
};

export default Index;
