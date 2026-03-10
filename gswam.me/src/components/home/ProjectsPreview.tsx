"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { projects } from "@/data/projects";

export function ProjectsPreview() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>Projects</SectionTitle>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <Link href={`/projects/#${project.id}`}>
                <Card>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg font-semibold">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-light">
                      {project.tagline}
                    </p>
                  </div>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects/"
            className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-6 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-text-inverse"
          >
            View All Projects
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
