
import { SiteConfig } from '@/types/content';

export const defaultSiteConfig: SiteConfig = {
  metadata: {
    title: "Professional Construction Services",
    description: "Building dreams with precision, quality, and trust",
  },
  theme: {
    primaryColor: "#eb8c47",
    secondaryColor: "#617461",
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
          text: "BlueRock Construction",
        },
        navigation: [
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Portfolio", href: "#portfolio" },
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
        backgroundColor: "bg-gradient-to-r from-gray-900 to-gray-700",
        textColor: "text-white",
        alignment: "center",
      },
      content: {
        heading: "Professional Construction Services for Your Dreams",
        subheading: "Building excellence with over 20 years of experience in residential, commercial, and infrastructure construction",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        cta: {
          text: "Start Your Project",
          href: "#contact",
        },
      },
    },
    {
      id: "features",
      type: "features",
      name: "Section: Features",
      visible: true,
      style: {
        padding: "py-16 lg:py-24",
        backgroundColor: "bg-white",
        alignment: "center",
      },
      content: {
        heading: "Why Choose Us",
        subheading: "We deliver exceptional construction services with unmatched quality and reliability",
        features: [
          {
            id: "feature1",
            icon: "CheckCircle",
            title: "Quality Assurance",
            description: "We use only the finest materials and employ skilled craftsmen to ensure superior quality in every project.",
          },
          {
            id: "feature2",
            icon: "Clock",
            title: "Timely Delivery",
            description: "Our efficient project management ensures your construction project is completed on time, every time.",
          },
          {
            id: "feature3",
            icon: "Shield",
            title: "Safety First",
            description: "We prioritize safety with comprehensive protocols and certified safety measures on every job site.",
          },
          {
            id: "feature4",
            icon: "DollarSign",
            title: "Cost Effective",
            description: "Competitive pricing without compromising on quality. We deliver value for your investment.",
          },
        ],
      },
    },
    {
      id: "testimonials",
      type: "testimonials",
      name: "Section: Testimonials",
      visible: true,
      style: {
        padding: "py-16 lg:py-24",
        backgroundColor: "bg-gray-50",
        alignment: "center",
      },
      content: {
        heading: "What Our Clients Say",
        autoScroll: true,
        scrollSpeed: 5000,
        testimonials: [
          {
            id: "test1",
            quote: "BlueRock Construction exceeded our expectations. Their attention to detail and professionalism made our dream home a reality.",
            name: "Sarah Johnson",
            position: "Homeowner",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
          },
          {
            id: "test2",
            quote: "Outstanding work on our commercial project. They delivered on time and within budget while maintaining the highest quality standards.",
            name: "Michael Chen",
            position: "Business Owner",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
          },
          {
            id: "test3",
            quote: "Professional, reliable, and skilled. BlueRock Construction transformed our office space beautifully. Highly recommended!",
            name: "Emily Rodriguez",
            position: "Office Manager",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
          },
        ],
      },
    },
    {
      id: "recent-works",
      type: "recent-works",
      name: "Section: Recent Works",
      visible: true,
      style: {
        padding: "py-16 lg:py-24",
        backgroundColor: "bg-white",
        alignment: "center",
      },
      content: {
        heading: "Our Recent Projects",
        subheading: "Showcasing our commitment to excellence in every project we complete",
        layout: "grid",
        works: [
          {
            id: "work1",
            title: "Modern Family Home",
            description: "Contemporary 4-bedroom home with sustainable design features",
            image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Residential",
            link: "#portfolio",
          },
          {
            id: "work2",
            title: "Corporate Office Complex",
            description: "State-of-the-art office building with modern amenities",
            image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Commercial",
            link: "#portfolio",
          },
          {
            id: "work3",
            title: "Luxury Villa",
            description: "Premium villa with custom architectural details",
            image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Residential",
            link: "#portfolio",
          },
          {
            id: "work4",
            title: "Shopping Center",
            description: "Modern retail complex with innovative design",
            image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Commercial",
            link: "#portfolio",
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
        backgroundColor: "bg-gray-900",
        textColor: "text-white",
        alignment: "left",
      },
      content: {
        heading: "Let's Build Your Dream Together",
        subheading: "Ready to start your construction project? Get in touch with our expert team today.",
        form: {
          fields: [
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "project", type: "text", placeholder: "Project Type", required: false },
            { name: "message", type: "textarea", placeholder: "Tell us about your project...", required: true },
          ],
          submitText: "Send Message",
        },
        contactInfo: {
          email: "info@bluerockconstruction.com",
          phone: "+91 98765 43210",
          address: "Mumbai, Maharashtra, India",
        },
        mapPlaceholder: "Interactive map placeholder - Connect your preferred map service",
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
        alignment: "center",
      },
      content: {
        text: "© 2024 BlueRock Construction. All rights reserved. Building dreams with precision and excellence.",
        socialLinks: [
          { platform: "LinkedIn", url: "#", icon: "Linkedin" },
          { platform: "Instagram", url: "#", icon: "Instagram" },
          { platform: "Facebook", url: "#", icon: "Facebook" },
        ],
        legalLinks: [
          { text: "Privacy Policy", href: "#privacy" },
          { text: "Terms of Service", href: "#terms" },
          { text: "Sitemap", href: "#sitemap" },
        ],
      },
    },
  ],
};
