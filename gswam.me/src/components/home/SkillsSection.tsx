"use client";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>Skills</SectionTitle>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.15}>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-heading text-xl font-bold text-primary">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-text-light"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
