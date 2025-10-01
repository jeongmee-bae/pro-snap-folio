export interface PortfolioData {
  about: AboutData;
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: Project[];
  awards: Award[];
  contact: ContactData;
}

export interface AboutData {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  kpis: KPI[];
}

export interface KPI {
  label: string;
  value: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  shortDescription: string;
  detailedDescription: string;
  techStack: string[];
  tags: string[];
  contributions: string[];
  results: string[];
  links: ProjectLink[];
  images: string[];
}

export interface ProjectLink {
  type: 'demo' | 'github' | 'other';
  url: string;
  label: string;
}

export interface Award {
  id: string;
  type: 'award' | 'certificate' | 'education';
  title: string;
  organization: string;
  date: string;
  description?: string;
}

export interface ContactData {
  email: string;
  phone: string;
  location: string;
  kakaoTalk?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}
