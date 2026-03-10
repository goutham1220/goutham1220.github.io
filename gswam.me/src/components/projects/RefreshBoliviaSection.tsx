"use client";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export function RefreshBoliviaSection() {
  return (
    <section id="refresh-bolivia" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>Refresh Bolivia</SectionTitle>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <AnimatedSection>
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/projects/refresh-bolivia-logo.webp"
                alt="Refresh Bolivia Logo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-text-light">
                Refresh Bolivia is a nonprofit organization I co-founded dedicated to
                providing clean and accessible drinking water to underserved communities
                in Cochabamba, Bolivia.
              </p>
              <p className="text-lg leading-relaxed text-text-light">
                Through fundraising campaigns, social media outreach, and community
                partnerships, we&apos;ve raised over <strong>$15,000+</strong> and reached
                over <strong>100,000+ people</strong> through our content and awareness
                campaigns.
              </p>
              <p className="text-lg leading-relaxed text-text-light">
                Our work has been featured across multiple platforms, and we continue to
                expand our impact by collaborating with local organizations in Bolivia.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button
                  href="https://www.refreshbolivia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Button>
                <Button
                  href="https://www.instagram.com/refreshbolivia"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  Instagram
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
