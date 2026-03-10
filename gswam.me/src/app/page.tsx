import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { PublicationsSection } from "@/components/home/PublicationsSection";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <PublicationsSection />
      <SectionDivider />
      <ProjectsPreview />
    </>
  );
}
