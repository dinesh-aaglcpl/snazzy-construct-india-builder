
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Luxury Villa Complex',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Modern luxury villas with sustainable design'
  },
  {
    id: 2,
    title: 'Corporate Office Tower',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'State-of-the-art commercial complex'
  },
  {
    id: 3,
    title: 'Shopping Mall',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Modern retail and entertainment hub'
  },
  {
    id: 4,
    title: 'Residential Apartments',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Affordable housing with premium amenities'
  },
  {
    id: 5,
    title: 'Infrastructure Bridge',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Engineering excellence in infrastructure'
  },
  {
    id: 6,
    title: 'Heritage Restoration',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Preserving history with modern techniques'
  }
];

const categories = ['All', 'Residential', 'Commercial', 'Infrastructure', 'Renovation'];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-terracotta-400">Realizations</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of completed projects that showcase our commitment to excellence and innovation in construction.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`px-6 py-2 transition-all duration-300 ${
                activeCategory === category
                  ? 'gradient-terracotta text-white'
                  : 'border-gray-600 text-gray-300 hover:border-terracotta-400 hover:text-terracotta-400'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 hover-lift"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-block px-3 py-1 bg-terracotta-500 rounded-full text-xs font-medium mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
              </div>
              
              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform rotate-45 group-hover:rotate-0">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setVisibleProjects(prev => prev + 3)}
              className="gradient-sage text-white hover:scale-105 transition-all duration-300"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
