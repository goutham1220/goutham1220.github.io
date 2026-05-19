"use client";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

const interests = [
  "Photography",
  "Cinematography",
  "Graphic Design",
  "Video Editing",
  "Film Photography",
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
                I am a graduate of the University of Rochester, with a BA in data
                science and minors in computer science and epidemiology. I hope to
                learn more about the disparities that underlie our health systems
                and how to best help the communities affected by them. I am a
                passionate and hard-working data science professional and am
                excited to use what I learn on my journey to make a positive
                impact through data-driven research.
              </p>
              <p className="text-lg leading-relaxed text-text-light">
                This website is a collection of my work and personal projects
                covering a variety of my interests over the years.
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
