
import projectsData from '@/data/projects.json';
import tagsData from '@/data/tags.json';

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  aiHint: string;
};

export const projects: Project[] = projectsData;

export const allTags: string[] = tagsData;
