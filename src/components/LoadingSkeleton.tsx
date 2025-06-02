
import React from 'react';
import { 
  HeaderSkeleton, 
  HeroSkeleton, 
  AboutSkeleton, 
  FeaturesSkeleton, 
  TestimonialsSkeleton, 
  RecentWorksSkeleton, 
  ContactSkeleton, 
  FooterSkeleton 
} from '@/components/ui/skeleton-loader';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeaderSkeleton />
      <HeroSkeleton />
      <AboutSkeleton />
      <FeaturesSkeleton />
      <TestimonialsSkeleton />
      <RecentWorksSkeleton />
      <ContactSkeleton />
      <FooterSkeleton />
    </div>
  );
};

export default LoadingSkeleton;
