import { PortfolioData } from '@/types/portfolio';

export const initialPortfolioData: PortfolioData = {
  about: {
    name: 'Alex Johnson',
    tagline: 'Full-Stack Developer & Creative Problem Solver',
    description: 'Passionate about building elegant solutions that make a difference. With expertise in modern web technologies and a keen eye for design, I create digital experiences that users love.',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    kpis: [
      { label: 'Years of Experience', value: '5+' },
      { label: 'Projects Completed', value: '30+' },
      { label: 'Happy Clients', value: '50+' },
      { label: 'Code Commits', value: '10k+' }
    ]
  },
  experience: [
    {
      id: '1',
      company: 'Tech Innovators Inc.',
      position: 'Senior Full-Stack Developer',
      startDate: '2022-01',
      endDate: 'Present',
      responsibilities: [
        'Lead development of core product features using React and Node.js',
        'Mentor junior developers and conduct code reviews',
        'Architect scalable solutions for high-traffic applications'
      ],
      achievements: [
        'Reduced page load time by 40% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Led team of 4 developers to successful product launch'
      ]
    },
    {
      id: '2',
      company: 'Creative Digital Agency',
      position: 'Frontend Developer',
      startDate: '2020-06',
      endDate: '2021-12',
      responsibilities: [
        'Developed responsive web applications using React and TypeScript',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Optimized web performance and accessibility'
      ],
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Improved website performance scores to 95+ on Lighthouse',
        'Established component library used across all projects'
      ]
    },
    {
      id: '3',
      company: 'StartupXYZ',
      position: 'Junior Developer',
      startDate: '2019-01',
      endDate: '2020-05',
      responsibilities: [
        'Built features for SaaS platform using JavaScript and Vue.js',
        'Fixed bugs and improved code quality',
        'Participated in agile development process'
      ],
      achievements: [
        'Contributed to 20% increase in user engagement',
        'Reduced bug count by 30% through systematic testing',
        'Earned "Most Improved Developer" award'
      ]
    }
  ],
  skills: [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', proficiency: 95 },
        { name: 'TypeScript', proficiency: 90 },
        { name: 'Next.js', proficiency: 85 },
        { name: 'Tailwind CSS', proficiency: 90 },
        { name: 'Vue.js', proficiency: 75 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', proficiency: 85 },
        { name: 'Python', proficiency: 80 },
        { name: 'PostgreSQL', proficiency: 85 },
        { name: 'MongoDB', proficiency: 75 },
        { name: 'REST APIs', proficiency: 90 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', proficiency: 95 },
        { name: 'Docker', proficiency: 80 },
        { name: 'AWS', proficiency: 75 },
        { name: 'Figma', proficiency: 85 },
        { name: 'Agile/Scrum', proficiency: 90 }
      ]
    }
  ],
  projects: [
    {
      id: '1',
      title: 'E-Commerce Platform',
      thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      shortDescription: 'A modern e-commerce platform with advanced features',
      detailedDescription: 'Built a comprehensive e-commerce solution featuring real-time inventory management, secure payment processing, and personalized recommendations. The platform handles thousands of daily transactions with 99.9% uptime.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      tags: ['Full-Stack', 'E-Commerce', 'Payment Integration'],
      contributions: [
        'Architected the entire frontend using React and TypeScript',
        'Implemented secure payment gateway integration',
        'Built admin dashboard for inventory management',
        'Developed recommendation engine using collaborative filtering'
      ],
      results: [
        '10,000+ active users within first 3 months',
        '40% increase in conversion rate',
        '99.9% uptime maintained',
        '$500K+ in processed transactions'
      ],
      links: [
        { type: 'demo', url: 'https://demo.example.com', label: 'Live Demo' },
        { type: 'github', url: 'https://github.com', label: 'Source Code' }
      ],
      images: ['https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop']
    },
    {
      id: '2',
      title: 'Task Management App',
      thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      shortDescription: 'Collaborative task management with real-time updates',
      detailedDescription: 'A powerful task management application enabling teams to collaborate effectively with real-time synchronization, kanban boards, and advanced filtering.',
      techStack: ['Next.js', 'Supabase', 'TailwindCSS', 'WebSockets'],
      tags: ['SaaS', 'Real-time', 'Collaboration'],
      contributions: [
        'Designed and implemented the entire UI/UX',
        'Built real-time collaboration features using WebSockets',
        'Integrated authentication and authorization',
        'Optimized performance for large datasets'
      ],
      results: [
        '2,000+ registered users',
        '30% improvement in team productivity reported',
        'Featured on ProductHunt',
        '4.8/5 star rating'
      ],
      links: [
        { type: 'demo', url: 'https://tasks.example.com', label: 'Live Demo' }
      ],
      images: ['https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop']
    },
    {
      id: '3',
      title: 'Analytics Dashboard',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      shortDescription: 'Real-time analytics dashboard for business insights',
      detailedDescription: 'Comprehensive analytics platform providing real-time insights into business metrics with interactive visualizations and customizable reports.',
      techStack: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      tags: ['Data Visualization', 'Analytics', 'Real-time'],
      contributions: [
        'Created interactive data visualizations using D3.js',
        'Built backend API for data aggregation',
        'Implemented caching layer for performance',
        'Designed responsive dashboard layout'
      ],
      results: [
        'Processing 1M+ data points daily',
        'Response time under 200ms',
        'Adopted by 50+ enterprise clients',
        '95% customer satisfaction rate'
      ],
      links: [
        { type: 'demo', url: 'https://analytics.example.com', label: 'Live Demo' },
        { type: 'github', url: 'https://github.com', label: 'Source Code' }
      ],
      images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop']
    }
  ],
  awards: [
    {
      id: '1',
      type: 'award',
      title: 'Best Developer Award 2023',
      organization: 'Tech Innovators Inc.',
      date: '2023-12',
      description: 'Recognized for outstanding contributions and technical excellence'
    },
    {
      id: '2',
      type: 'certificate',
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: '2023-06',
      description: 'Professional level certification'
    },
    {
      id: '3',
      type: 'certificate',
      title: 'React Advanced Patterns',
      organization: 'Frontend Masters',
      date: '2022-11'
    },
    {
      id: '4',
      type: 'education',
      title: 'B.S. Computer Science',
      organization: 'University of Technology',
      date: '2019-05',
      description: 'Graduated with Honors, GPA: 3.8/4.0'
    }
  ],
  contact: {
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    kakaoTalk: 'alexjohnson',
    github: 'https://github.com/alexjohnson',
    linkedin: 'https://linkedin.com/in/alexjohnson',
    website: 'https://alexjohnson.dev'
  }
};
