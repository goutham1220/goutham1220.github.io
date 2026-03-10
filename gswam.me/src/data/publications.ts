export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url: string;
}

export const publications: Publication[] = [
  {
    title: "Developing Autonomous Vehicle Testing Environments using Procedurally Generated 3D Worlds",
    authors: "Goutham Swaminathan et al.",
    venue: "IEEE MIT Undergraduate Research Technology Conference",
    year: 2019,
    url: "https://ieeexplore.ieee.org/document/9281282",
  },
  {
    title: "High School Student Research in Remote Sensing and Geoscience",
    authors: "Goutham Swaminathan et al.",
    venue: "AGU Fall Meeting",
    year: 2019,
    url: "https://ui.adsabs.harvard.edu/abs/2019AGUFMED23F..08S",
  },
  {
    title: "A Survey of Haptic Feedback in Various Environments",
    authors: "Goutham Swaminathan et al.",
    venue: "IEEE International Symposium on Haptic, Audio and Visual Environments and Games",
    year: 2019,
    url: "https://ieeexplore.ieee.org/document/8921163",
  },
];
