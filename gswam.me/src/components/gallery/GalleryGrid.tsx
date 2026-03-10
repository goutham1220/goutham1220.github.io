"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { galleryImages } from "@/data/gallery";

export function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <>
      <div className="gallery-masonry">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setLightboxIndex(index)}
            className="group relative w-full overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
          </button>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={galleryImages.map((img) => ({
          src: img.src,
          alt: img.alt,
          width: img.width,
          height: img.height,
        }))}
        plugins={[Zoom]}
        animation={{ fade: 250 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}
