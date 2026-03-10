"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export function PhotographySection() {
  return (
    <section id="photography" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>Photography Journey</SectionTitle>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <AnimatedSection delay={0.2} className="order-2 md:order-1">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-text-light">
                I&apos;ve been shooting since 2018, starting with digital and eventually
                falling in love with film photography. My work spans street, landscape,
                portrait, and documentary styles.
              </p>
              <p className="text-lg leading-relaxed text-text-light">
                I shoot on a mix of cameras including the Sony A6000, Nikon FE, and various
                point-and-shoot film cameras. My film of choice is usually Kodak Portra 400
                or Kodak Gold 200.
              </p>
              <p className="text-lg leading-relaxed text-text-light">
                You can view my full portfolio in the gallery or purchase prints through my
                Darkroom store.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Link href="/gallery/">
                  <Button>View Gallery</Button>
                </Link>
                <Button
                  href="https://gswam.darkroom.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  Buy Prints
                </Button>
                <Button
                  href="https://www.instagram.com/gswam.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  Instagram
                </Button>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="order-1 md:order-2">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/projects/photography-sample.webp"
                alt="Film photography sample"
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
