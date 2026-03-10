"use client";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/layout/SocialIcon";
import { socialLinks } from "@/data/social";

export function ContactInfo() {
  return (
    <AnimatedSection delay={0.2}>
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-3xl font-bold md:text-4xl">
            Have any questions?
          </h1>
          <h2 className="mt-2 font-heading text-2xl text-text-light md:text-3xl">
            Want to set up a meeting?
          </h2>
        </div>

        <p className="text-lg leading-relaxed text-text-light">
          Whether you want to collaborate on a project, discuss photography, or just say hi —
          I&apos;d love to hear from you. Drop me an email and I&apos;ll get back to you as
          soon as I can.
        </p>

        <Button href="mailto:goutham.swaminathan@gmail.com">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Send Me an Email
        </Button>

        <div className="pt-4">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-light">
            Find me on
          </h3>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="rounded-full bg-surface p-3 text-text-light transition-all hover:bg-accent hover:text-text-inverse"
              >
                <SocialIcon icon={link.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-surface-dark bg-surface p-6">
          <p className="mb-2 text-sm font-semibold text-text-light">
            Support my work
          </p>
          <p className="text-sm text-text-light">
            If you enjoy my content or photography, consider buying me a coffee! Scan the QR
            code or visit{" "}
            <a
              href="https://buymeacoffee.com/gswam"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:underline"
            >
              buymeacoffee.com/gswam
            </a>
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
