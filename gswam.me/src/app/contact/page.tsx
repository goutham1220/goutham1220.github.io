import type { Metadata } from "next";
import Image from "next/image";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Goutham Swaminathan.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/contact/contact-photo.webp"
              alt="Goutham Swaminathan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 448px"
              priority
            />
          </div>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
