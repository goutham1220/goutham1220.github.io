export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Engineering",
    skills: [
      "SQL / PostgreSQL",
      "Apache Spark",
      "Apache Airflow",
      "dbt",
      "Snowflake",
      "AWS (S3, Redshift, Glue)",
      "ETL Pipeline Design",
      "Data Modeling",
    ],
  },
  {
    title: "Programming",
    skills: [
      "Python",
      "Java",
      "TypeScript / JavaScript",
      "R",
      "Scala",
      "Git / GitHub",
      "Docker",
      "REST APIs",
    ],
  },
  {
    title: "Misc",
    skills: [
      "Photography / Videography",
      "Adobe Lightroom & Premiere Pro",
      "YouTube Content Creation",
      "Spanish (Conversational)",
      "Leadership & Mentoring",
      "Public Speaking",
      "Technical Writing",
      "Project Management",
    ],
  },
];
