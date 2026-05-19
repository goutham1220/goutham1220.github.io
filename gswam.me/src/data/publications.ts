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
      "Sentiment Analysis on Twitter Data Regarding Dental Issues Associated with Opioid Consumption",
    authors: "G Swaminathan, Y Ouenniche, R Edara, M Kingsley",
    venue: "Goergen Institute for Data Science Senior Design Day",
    year: 2023,
    url: "https://www.hajim.rochester.edu/senior-design-day/sentiment-analysis-on-twitter-data-regarding-dental-issues-associated-with-opioid-consumption/",
  },
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
