"use client";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export function GoothYouTubeSection() {
  return (
    <section id="gooth-youtube" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>GOOTH YouTube</SectionTitle>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <AnimatedSection delay={0.2} className="order-2 md:order-1">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-text-light">
                GOOTH is my YouTube channel where I create content about tech, photography,
                college life, and creative projects. With over <strong>250,000+ views</strong>,
                the channel has become a platform for sharing my passions with a growing community.
              </p>
              <p className="text-lg leading-relaxed text-text-light">
                I&apos;ve collaborated with multiple brands and worked on freelance video
                production projects. The channel features a mix of vlogs, tutorials,
                reviews, and cinematic content.
              </p>
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center">
                  <p className="font-heading text-2xl font-bold text-accent">250K+</p>
                  <p className="text-xs text-text-light">Total Views</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-2xl font-bold text-accent">5+</p>
                  <p className="text-xs text-text-light">Brand Collabs</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-2xl font-bold text-accent">100+</p>
                  <p className="text-xs text-text-light">Videos</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  href="https://www.youtube.com/gooth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube
                </Button>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="order-1 md:order-2">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/projects/gooth-photo.webp"
                alt="GOOTH YouTube"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
