import { LucideIcon } from 'lucide-react';

export interface ContactForm {
  email: string;
  fullName: string;
  organization: string;
  message: string;
  website: string;
}

export interface SkillGroup {
  category: string;
  items: {
    name: string;
    logo?: string;
  }[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: LucideIcon;
  img?: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  icon?: LucideIcon;
  img?: string;
  video?: string;
  tags: string[];
  color: string;
}
