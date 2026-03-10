"use client";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { publications } from "@/data/publications";

export function PublicationsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>Publications</SectionTitle>
        <div className="mt-12 space-y-6">
          {publications.map((pub, i) => (
            <AnimatedSection key={pub.title} delay={i * 0.1}>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-surface-dark p-6 transition-all hover:border-accent/30 hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-semibold text-primary">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm text-text-light">{pub.authors}</p>
                <p className="mt-1 text-sm text-text-light">
                  {pub.venue}, {pub.year}
                </p>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
