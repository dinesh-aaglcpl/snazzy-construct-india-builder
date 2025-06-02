
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const HeaderSkeleton = () => (
  <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex items-center justify-between h-16 lg:h-20">
        <div className="flex items-center space-x-3">
          <Skeleton className="w-12 h-12 rounded-xl" />
          <Skeleton className="h-6 w-48" />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-16" />
          ))}
        </div>
        <Skeleton className="h-10 w-24 rounded-xl" />
      </div>
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <section className="relative min-h-screen flex items-center justify-center">
    <Skeleton className="absolute inset-0" />
    <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
      <Skeleton className="h-4 w-64 mx-auto mb-8 rounded-full" />
      <Skeleton className="h-16 w-full mb-8" />
      <Skeleton className="h-6 w-3/4 mx-auto mb-12" />
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Skeleton className="h-14 w-48 rounded-xl" />
        <Skeleton className="h-14 w-48 rounded-xl" />
      </div>
    </div>
  </section>
);

export const AboutSkeleton = () => (
  <section className="py-16 lg:py-24 bg-gray-50">
    <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
        <div>
          <Skeleton className="h-12 w-full mb-6" />
          <Skeleton className="h-6 w-3/4" />
        </div>
        <Skeleton className="aspect-[4/3] rounded-3xl" />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 lg:mb-20">
        <div>
          <Skeleton className="h-32 w-full mb-8" />
          <Skeleton className="aspect-[4/3] rounded-2xl" />
        </div>
        <Skeleton className="h-80 rounded-3xl" />
      </div>
      <Skeleton className="h-32 rounded-3xl" />
    </div>
  </section>
);

export const FeaturesSkeleton = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <Skeleton className="h-10 w-64 mx-auto mb-6" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center">
            <Skeleton className="w-16 h-16 rounded-2xl mx-auto mb-6" />
            <Skeleton className="h-6 w-32 mx-auto mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const TestimonialsSkeleton = () => (
  <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16 lg:mb-20">
        <Skeleton className="h-8 w-48 mx-auto mb-6 rounded-full" />
        <Skeleton className="h-12 w-80 mx-auto mb-6" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, j) => (
                <Skeleton key={j} className="w-4 h-4 mr-1" />
              ))}
            </div>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const RecentWorksSkeleton = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16 lg:mb-20">
        <Skeleton className="h-8 w-48 mx-auto mb-6 rounded-full" />
        <Skeleton className="h-12 w-80 mx-auto mb-6" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-3xl shadow-xl border border-gray-100">
            <Skeleton className="aspect-[16/10] rounded-t-3xl" />
            <div className="p-6 lg:p-8">
              <Skeleton className="h-6 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6 mb-6" />
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[...Array(4)].map((_, j) => (
                  <Skeleton key={j} className="h-4 w-20" />
                ))}
              </div>
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ContactSkeleton = () => (
  <section className="py-16 lg:py-24 bg-gray-900">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <Skeleton className="h-10 w-80 mb-6 bg-gray-800" />
          <Skeleton className="h-4 w-full mb-12 bg-gray-800" />
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-12 w-full bg-gray-800" />
            ))}
            <Skeleton className="h-12 w-32 bg-orange-600" />
          </div>
        </div>
        <div className="space-y-6">
          <Skeleton className="h-6 w-48 bg-gray-800" />
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-full bg-gray-800" />
          ))}
          <Skeleton className="h-64 w-full rounded-xl bg-gray-800" />
        </div>
      </div>
    </div>
  </section>
);

export const FooterSkeleton = () => (
  <footer className="pt-20 pb-8 bg-black">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <Skeleton className="h-64 w-full max-w-4xl mx-auto rounded-3xl bg-gray-900" />
      </div>
      <div className="grid lg:grid-cols-4 gap-12 mb-16">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-6">
            <Skeleton className="h-6 w-32 bg-gray-800" />
            <div className="space-y-4">
              {[...Array(6)].map((_, j) => (
                <Skeleton key={j} className="h-4 w-24 bg-gray-800" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800 pt-8">
        <Skeleton className="h-4 w-80 mx-auto bg-gray-800" />
      </div>
    </div>
  </footer>
);
