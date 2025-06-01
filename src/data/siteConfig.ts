
import { SiteConfig } from '@/types/content';

export const defaultSiteConfig: SiteConfig = {
  metadata: {
    title: "snazzybud - Building the Future, One Brick at a Time",
    description: "Professional construction services specializing in residential, commercial, and infrastructure projects across southern Poland",
  },
  theme: {
    primaryColor: "#2563eb",
    secondaryColor: "#64748b",
    fontFamily: "Inter, sans-serif",
    fontSize: {
      base: "16px",
      headings: "1.25rem",
    },
  },
  sections: [
    {
      id: "header",
      type: "header",
      name: "Section: Header",
      visible: true,
      content: {
        logo: {
          text: "snazzybud",
        },
        navigation: [
          { label: "Home", href: "#hero" },
          { label: "About Us", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Projects", href: "#recent-works" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "Contact", href: "#contact" },
        ],
        cta: {
          text: "Get Quote",
          href: "#contact",
        },
      },
    },
    {
      id: "hero",
      type: "hero",
      name: "Section: Hero",
      visible: true,
      style: {
        padding: "py-20 lg:py-32",
        backgroundColor: "bg-transparent",
        textColor: "text-white",
        alignment: "center",
      },
      content: {
        heading: "Building the Future, One Brick at a Time",
        subheading: "Professional construction services with over 21 years of excellence in residential, commercial, and infrastructure projects",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        cta: {
          text: "Explore Our Projects",
          href: "#recent-works",
        },
      },
    },
    {
      id: "about",
      type: "features",
      name: "Section: About Us",
      visible: true,
      style: {
        padding: "py-16 lg:py-24",
        backgroundColor: "bg-white",
        alignment: "left",
      },
      content: {
        heading: "About Our Company",
        subheading: "Building Excellence Since 2002",
        features: [
          {
            id: "company-overview",
            icon: "",
            title: "Our Mission",
            description: "We are a dynamic construction company with passion and experience, specializing in comprehensive construction services. Our mission is to create durable and aesthetically pleasing solutions tailored to the individual needs and expectations of our clients.",
          },
          {
            id: "core-values", 
            icon: "",
            title: "Core Values",
            description: "Quality, integrity, and innovation drive everything we do. We believe in building not just structures, but lasting relationships with our clients through transparent communication and exceptional craftsmanship.",
          },
          {
            id: "team-expertise",
            icon: "",
            title: "Expert Team",
            description: "Our team of qualified specialists, including architects, engineers, and skilled craftsmen, ensures high quality in every project we undertake. With over two decades of combined experience, we bring expertise to every build.",
          },
        ],
      },
    },
    {
      id: "stats",
      type: "features",
      name: "Section: Company Stats",
      visible: true,
      style: {
        padding: "py-16 lg:py-24",
        backgroundColor: "bg-blue-50",
        alignment: "center",
      },
      content: {
        heading: "Our Track Record",
        subheading: "Numbers That Speak",
        features: [
          {
            id: "stat1",
            icon: "",
            title: "21+",
            description: "Years of Excellence",
          },
          {
            id: "stat2",
            icon: "",
            title: "715+",
            description: "Completed Projects",
          },
          {
            id: "stat3",
            icon: "",
            title: "33,107m",
            description: "Installation Completed",
          },
          {
            id: "stat4",
            icon: "",
            title: "100%",
            description: "Client Satisfaction",
          },
        ],
      },
    },
    {
      id: "services",
      type: "features",
      name: "Section: Services",
      visible: true,
      style: {
        padding: "py-16 lg:py-24",
        backgroundColor: "bg-white",
        alignment: "left",
      },
      content: {
        heading: "Our Construction Services",
        subheading: "Comprehensive Solutions for Every Project",
        features: [
          {
            id: "residential",
            icon: "🏠",
            title: "Residential Construction",
            description: "Custom homes, multi-family residences, and residential complexes built to the highest standards with modern designs and energy-efficient features.",
          },
          {
            id: "commercial",
            icon: "🏢",
            title: "Commercial Projects",
            description: "Office buildings, retail spaces, warehouses, and industrial facilities designed for functionality and long-term value.",
          },
          {
            id: "renovation",
            icon: "🔨",
            title: "Renovation & Modernization",
            description: "Complete renovation services for existing buildings, including structural improvements, interior updates, and energy efficiency upgrades.",
          },
          {
            id: "infrastructure",
            icon: "🛣️",
            title: "Infrastructure Development",
            description: "Roads, bridges, utilities, and public works projects that support community development and economic growth.",
          },
          {
            id: "project-management",
            icon: "📋",
            title: "Project Management",
            description: "End-to-end project coordination from planning and permits to final delivery, ensuring timely completion within budget.",
          },
          {
            id: "consulting",
            icon: "💡",
            title: "Construction Consulting",
            description: "Expert advice on construction methods, materials, cost estimation, and regulatory compliance for your project needs.",
          },
        ],
      },
    },
    {
      id: "recent-works",
      type: "recent-works",
      name: "Section: Projects Portfolio",
      visible: true,
      style: {
        padding: "py-16 lg:py-24",
        backgroundColor: "bg-gray-900",
        textColor: "text-white",
        alignment: "left",
      },
      content: {
        heading: "Our Portfolio",
        subheading: "Showcase of Excellence",
        layout: "grid",
        works: [
          {
            id: "luxury-residence",
            title: "Luxury Family Residence - Krzycko",
            description: "A stunning 3-story modern home featuring sustainable materials, smart home technology, and contemporary architectural design.",
            image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Residential",
            link: "#portfolio",
          },
          {
            id: "hotel-reception",
            title: "WorkTravel Hotel Reception Renovation",
            description: "Complete renovation of hotel reception area focusing on modern aesthetics, improved guest flow, and enhanced customer experience.",
            image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Commercial",
            link: "#portfolio",
          },
          {
            id: "underground-garage",
            title: "Underground Parking Complex",
            description: "Multi-level underground parking facility with advanced ventilation systems, LED lighting, and automated entry systems.",
            image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Infrastructure",
            link: "#portfolio",
          },
          {
            id: "duplex-home",
            title: "Modern Duplex Development",
            description: "Twin family homes featuring energy-efficient design, shared amenities, and optimized space utilization for growing families.",
            image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Residential",
            link: "#portfolio",
          },
          {
            id: "office-complex",
            title: "Corporate Office Complex",
            description: "State-of-the-art office building with flexible workspace design, green building features, and modern technology infrastructure.",
            image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Commercial",
            link: "#portfolio",
          },
          {
            id: "bridge-construction",
            title: "Municipal Bridge Project",
            description: "Modern pedestrian and vehicle bridge designed for durability, safety, and aesthetic integration with the urban landscape.",
            image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Infrastructure",
            link: "#portfolio",
          },
        ],
      },
    },
    {
      id: "testimonials",
      type: "testimonials",
      name: "Section: Client Testimonials",
      visible: true,
      style: {
        padding: "py-16 lg:py-24",
        backgroundColor: "bg-gray-50",
        alignment: "left",
      },
      content: {
        heading: "What Our Clients Say",
        autoScroll: true,
        scrollSpeed: 5000,
        testimonials: [
          {
            id: "client1",
            quote: "Snazzybud Construction exceeded our expectations in every way. Their team's professionalism, attention to detail, and commitment to quality made our dream home a reality. The project was completed on time and within budget.",
            name: "Andrzej Kmiecic",
            position: "Homeowner - Luxury Residence Project",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
          },
          {
            id: "client2",
            quote: "Working with snazzybud on our hotel renovation was a seamless experience. Their innovative solutions and quality craftsmanship transformed our space into a modern, welcoming environment that our guests love.",
            name: "Maria Kowalski",
            position: "Hotel Manager - WorkTravel Hotel",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
          },
          {
            id: "client3",
            quote: "The infrastructure project was complex, but snazzybud handled every challenge with expertise and professionalism. Their project management kept everything on schedule and their quality is outstanding.",
            name: "Tomasz Nowak",
            position: "City Development Director",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
          },
        ],
      },
    },
    {
      id: "contact",
      type: "contact",
      name: "Section: Contact",
      visible: true,
      style: {
        padding: "py-16 lg:py-24",
        backgroundColor: "bg-blue-600",
        textColor: "text-white",
        alignment: "left",
      },
      content: {
        heading: "Ready to Start Your Project?",
        subheading: "Get in touch with our expert team today",
        form: {
          fields: [
            { name: "name", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "subject", type: "text", placeholder: "Project Type", required: true },
            { name: "message", type: "textarea", placeholder: "Tell us about your project, timeline, and requirements...", required: true },
          ],
          submitText: "Request Free Consultation",
        },
        contactInfo: {
          email: "info@snazzybud.com",
          phone: "+48 601 918 812",
          address: "Kraków, Southern Poland",
        },
        mapPlaceholder: "Interactive map showing our location in Kraków - Connect your preferred map service for directions",
      },
    },
    {
      id: "footer",
      type: "footer",
      name: "Section: Footer",
      visible: true,
      style: {
        padding: "py-12",
        backgroundColor: "bg-gray-900",
        textColor: "text-gray-300",
        alignment: "left",
      },
      content: {
        text: "© 2024 Snazzybud Construction. All rights reserved. Building excellence since 2002.",
        socialLinks: [
          { platform: "LinkedIn", url: "https://linkedin.com/company/snazzybud", icon: "Linkedin" },
          { platform: "Facebook", url: "https://facebook.com/snazzybud", icon: "Facebook" },
          { platform: "Instagram", url: "https://instagram.com/snazzybud", icon: "Instagram" },
        ],
        legalLinks: [
          { text: "About Us", href: "#about" },
          { text: "Services", href: "#services" },
          { text: "Projects", href: "#recent-works" },
          { text: "Contact", href: "#contact" },
          { text: "Privacy Policy", href: "#privacy" },
          { text: "Terms of Service", href: "#terms" },
        ],
      },
    },
  ],
};
