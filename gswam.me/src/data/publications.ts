export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url: string;
}

export const publications: Publication[] = [
  {
    title:
      "Prevalence of Gestational Diabetes in India by Individual Socioeconomic, Demographic, and Clinical Factors",
    authors: "G Swaminathan, A Swaminathan, DJ Corsi",
    venue: "JAMA Network Open",
    year: 2020,
    url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2772684",
  },
  {
    title:
      "Parliamentary Constituency Factsheet for Indicators of Nutrition, Health and Development in India",
    authors:
      "R Kim, A Swaminathan, G Swaminathan, R Kumar, S Rajpal, J Blossom, et al.",
    venue: "HCPDS Working Paper Series",
    year: 2019,
    url: "https://geographicinsights.iq.harvard.edu/publications?page=3",
  },
];
