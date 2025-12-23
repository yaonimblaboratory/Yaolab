
export interface SiteConfig {
  name: string;
  institution: string;
  location: string;
  description: string;
  logo?: string; // Optional custom logo image
  // New Hero Section Config
  hero: {
    titleHeadline: string;
    titleHighlight: string;
    description: string;
    image: string;
  };
  navLinks: Array<{ label: string; href: string }>;
  footer: {
    email: string;
    phone: string;
    address: string;
    socials: Array<{ platform: string; url: string }>;
  };
}

export interface ResearchArea {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  collaborators?: string;
  funding?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  links: Array<{ label: string; url: string }>;
  thumbnail?: string;
  tags?: string[];
  isSelected?: boolean;
}

export type Role = 'PI' | 'Postdoc' | 'PhD Student' | 'MPhil Student' | 'Staff' | 'Undergrad' | 'Alumni';

export interface Person {
  id: string;
  name: string;
  role: Role;
  bio: string;
  image: string;
  email?: string;
  website?: string;
  education?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // Markdown supported conceptually
  tags: string[];
  image?: string;
  additionalImages?: string[];
}

export interface ResourceItem {
  title: string;
  description?: string;
  link: string;
  citation?: string;
}

export interface ResourceSection {
  title: string;
  items: ResourceItem[];
}
