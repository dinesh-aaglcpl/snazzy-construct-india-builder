
import { SiteConfig } from '@/types/content';

export const defaultSiteConfig: SiteConfig = {
  metadata: {
    title: "snazzybud - Professional Construction Services",
    description: "A comprehensive construction service provider in southern Poland",
  },
  theme: {
    primaryColor: "#eb8c47",
    secondaryColor: "#8B8B8B",
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
          { label: "About us", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Company in numbers", href: "#stats" },
          { label: "Testimonials", href: "#testimonials" },
        ],
        cta: {
          text: "Contact us",
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
        heading: "Professional construction services for your needs",
        subheading: "",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        cta: {
          text: "See our services",
          href: "#services",
        },
      },
    },
    {
      id: "about",
      type: "features",
      name: "Section: About",
      visible: true,
      style: {
        padding: "py-16 lg:py-24",
        backgroundColor: "bg-white",
        alignment: "left",
      },
      content: {
        heading: "About our company",
        subheading: "Who we are?",
        features: [
          {
            id: "about1",
            icon: "",
            title: "",
            description: "We are a dynamic construction company with passion and experience, specializing in comprehensive construction services. Our team of qualified specialists, including architects and engineers, ensures high quality in the projects we undertake.",
          },
          {
            id: "about2", 
            icon: "",
            title: "",
            description: "We engage in both the construction of new facilities and the renovation and modernization of existing buildings. Our mission is to create durable and aesthetically pleasing solutions tailored to the individual needs and expectations of our clients.",
          },
        ],
      },
    },
    {
      id: "stats",
      type: "features",
      name: "Section: Stats",
      visible: true,
      style: {
        padding: "py-16 lg:py-24",
        backgroundColor: "bg-gray-100",
        alignment: "center",
      },
      content: {
        heading: "",
        subheading: "",
        features: [
          {
            id: "stat1",
            icon: "",
            title: "+21",
            description: "years on the market",
          },
          {
            id: "stat2",
            icon: "",
            title: "+33,107",
            description: "meters of installed installation",
          },
          {
            id: "stat3",
            icon: "",
            title: "+715",
            description: "completed construction works",
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
        heading: "Our construction services",
        subheading: "What we offer?",
        features: [
          {
            id: "service1",
            icon: "",
            title: "Construction of all kinds of houses",
            description: "We specialize in building various types of houses tailored to the individual needs and preferences of our clients. No matter what you dream of, our construction company will provide you with a solid structure and high-quality execution.",
          },
          {
            id: "service2",
            icon: "",
            title: "Renovation and modernization",
            description: "Professional renovation and modernization services for existing buildings.",
          },
          {
            id: "service3",
            icon: "",
            title: "Attic adaptations",
            description: "Transform your attic space into functional living areas.",
          },
          {
            id: "service4",
            icon: "",
            title: "Construction of garages",
            description: "Custom garage construction to meet your specific needs.",
          },
          {
            id: "service5",
            icon: "",
            title: "Construction of public utility facilities",
            description: "Specialized in constructing public and commercial buildings.",
          },
          {
            id: "service6",
            icon: "",
            title: "Finishes and installations",
            description: "Complete finishing work and installation services.",
          },
        ],
      },
    },
    {
      id: "recent-works",
      type: "recent-works",
      name: "Section: Gallery",
      visible: true,
      style: {
        padding: "py-16 lg:py-24",
        backgroundColor: "bg-gray-900",
        textColor: "text-white",
        alignment: "left",
      },
      content: {
        heading: "Our Realizations",
        subheading: "Gallery",
        layout: "grid",
        works: [
          {
            id: "work1",
            title: "Single-family house Krzycko",
            description: "To połączenie elegancji i funkcjonalności, stworzone z myślą o komforcie rodziny, oferujące przestronne wnętrza i piękny ogród.",
            image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Houses",
            link: "#portfolio",
          },
          {
            id: "work2",
            title: "WorkTravel Hotel reception",
            description: "With a focus on creating a welcoming and efficient space, the reception seamlessly blends modern aesthetics with a warm ambiance.",
            image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Hotels",
            link: "#portfolio",
          },
          {
            id: "work3",
            title: "Underground garage for a block of flats",
            description: "Innovative construction solutions and meticulous planning enabled the optimal utilization of the underground space.",
            image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Garages",
            link: "#portfolio",
          },
          {
            id: "work4",
            title: "Two-family house",
            description: "The two-family house stands as an example of thoughtful design and functional architecture.",
            image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            category: "Houses",
            link: "#portfolio",
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
        alignment: "left",
      },
      content: {
        heading: "Our customers' opinions",
        autoScroll: false,
        scrollSpeed: 5000,
        testimonials: [
          {
            id: "test1",
            quote: "Snazzybud Construction Company is a reliable partner in the execution of construction projects. Their team consists of qualified professionals who are professional and precise in their work. Quality of execution and timeliness are their priorities, and communication with the client is excellent.",
            name: "Andrzej Kmiecic",
            position: "Happy new home resident",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
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
        backgroundColor: "bg-gray-500",
        textColor: "text-white",
        alignment: "left",
      },
      content: {
        heading: "Don't wait for your dreams! Make them with us now!",
        subheading: "",
        form: {
          fields: [
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "message", type: "textarea", placeholder: "Tell us about your project...", required: true },
          ],
          submitText: "Contact us",
        },
        contactInfo: {
          email: "contact@snazzystudio.com",
          phone: "+48 601 918 812",
          address: "Southern Poland",
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
        backgroundColor: "bg-gray-50",
        textColor: "text-gray-700",
        alignment: "left",
      },
      content: {
        text: "© 2023 Snazzybud. All rights reserved",
        socialLinks: [
          { platform: "Facebook", url: "#", icon: "Facebook" },
          { platform: "LinkedIn", url: "#", icon: "Linkedin" },
        ],
        legalLinks: [
          { text: "About us", href: "#about" },
          { text: "Realizations", href: "#realizations" },
          { text: "News", href: "#news" },
          { text: "Careers", href: "#careers" },
          { text: "Contact", href: "#contact" },
        ],
      },
    },
  ],
};
