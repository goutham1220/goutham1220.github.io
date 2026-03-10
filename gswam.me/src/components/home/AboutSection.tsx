"use client";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

const interests = [
  "Data Engineering",
  "Film Photography",
  "YouTube",
  "Language Learning",
  "Travel",
  "Open Source",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>About Me</SectionTitle>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <AnimatedSection>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/about/portrait.webp"
                alt="Goutham Swaminathan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
                priority
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-text-light">
                Hi! I&apos;m Goutham — a data engineer with a passion for photography,
                content creation, and building things that matter. I graduated from
                Rutgers University and currently work in data engineering, building
                scalable pipelines and data infrastructure.
              </p>
              <p className="text-lg leading-relaxed text-text-light">
                Outside of work, I run a YouTube channel called GOOTH with over 250K+
                views, shoot film and digital photography, and co-founded Refresh Bolivia
                — a nonprofit that has raised $15K+ for clean water access.
              </p>
              <div className="pt-4">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-light">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-text-light"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
