import { Project } from '../types';
import { colors } from './colors';

export const projects: Project[] = [
  {
    title: 'Motiv Sport',
    description: 'Projet collaboratif pour faciliter les rencontres sportives, démontrant des compétences en travail d\'équipe et en développement d\'applications.',
    img: '/data/Logo 2.png',
    video: '/data/motiv_sport.mp4',
    tags: ['Collaboration', 'Développement', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    color: colors.primary,
  },
  {
    title: 'A.Bee',
    description: 'Application de gestion du personnel, réalisée en méthode Agile pour optimiser les workflows internes.',
    img: '/data/Logo_1.png',
      video: '/data/A_bee.mp4',
    tags: ['Développement', 'Agile', 'Bun', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    color: colors.secondary,
  },
];
