import type { Metadata } from "next";
import { RefreshBoliviaSection } from "@/components/projects/RefreshBoliviaSection";
import { GoothYouTubeSection } from "@/components/projects/GoothYouTubeSection";
import { LanguageWorkoutsSection } from "@/components/projects/LanguageWorkoutsSection";
import { PhotographySection } from "@/components/projects/PhotographySection";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Goutham Swaminathan — Refresh Bolivia, GOOTH YouTube, Language Workouts, and Photography.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="bg-primary py-20 text-center">
        <h1 className="font-heading text-4xl font-bold text-text-inverse md:text-5xl">
          Projects
        </h1>
        <p className="mt-4 text-text-inverse/70">
          Things I&apos;ve built, created, and contributed to
        </p>
      </div>
      <RefreshBoliviaSection />
      <SectionDivider />
      <GoothYouTubeSection />
      <SectionDivider />
      <LanguageWorkoutsSection />
      <SectionDivider />
      <PhotographySection />
    </>
  );
}
