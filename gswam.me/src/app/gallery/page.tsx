import type { Metadata } from "next";
import Image from "next/image";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Button } from "@/components/ui/Button";
import { darkroomUrl } from "@/data/social";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery by Goutham Swaminathan — film and digital photography.",
};

export default function GalleryPage() {
  return (
    <>
      <div className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/images/gallery/hero.webp"
          alt="Gallery hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Gallery
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <GalleryGrid />

        <div className="mt-16 text-center">
          <p className="mb-4 text-text-light">Like what you see?</p>
          <Button
            href={darkroomUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Purchase Prints
          </Button>
        </div>
      </section>
    </>
  );
}
