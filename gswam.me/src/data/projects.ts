export interface Project {
  id: string;
  title: string;
  tagline: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "refresh-bolivia",
    title: "Refresh Bolivia",
    tagline: "Clean water for Cochabamba communities",
    image: "/images/projects/refresh-bolivia-logo.webp",
  },
  {
    id: "gooth-youtube",
    title: "GOOTH YouTube",
    tagline: "250K+ views & brand collaborations",
    image: "/images/projects/gooth-photo.webp",
  },
  {
    id: "language-workouts",
    title: "Language Workouts",
    tagline: "AI-powered language learning platform",
    image: "/images/projects/language-workouts.webp",
  },
  {
    id: "photography",
    title: "Photography Journey",
    tagline: "Film & digital since 2018",
    image: "/images/projects/photography-sample.webp",
  },
];
