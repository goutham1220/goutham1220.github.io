"use client";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

const features = [
  { name: "Reps", description: "Practice vocab with spaced repetition" },
  { name: "Dissect", description: "Break down sentences word by word" },
  { name: "Chat", description: "Converse with an AI language partner" },
];

export function LanguageWorkoutsSection() {
  return (
    <section id="language-workouts" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>Language Workouts</SectionTitle>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <AnimatedSection>
            <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/projects/language-workouts.webp"
                alt="Language Workouts Screenshot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 512px"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-text-light">
                Language Workouts is an AI-powered language learning platform built to make
                practicing a new language feel like going to the gym — structured, consistent,
                and effective.
              </p>
              <div className="space-y-3 py-2">
                {features.map((feature) => (
                  <div key={feature.name} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <div>
                      <p className="font-semibold text-primary">{feature.name}</p>
                      <p className="text-sm text-text-light">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button
                  href="https://languageworkouts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try It Out
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
