import { socialLinks, darkroomUrl } from "@/data/social";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="border-t border-surface-dark bg-surface py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6">
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-text-light transition-colors hover:text-accent"
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
          <a
            href={darkroomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-text-light transition-colors hover:text-accent"
          >
            Darkroom Store
          </a>
        </div>
        <p className="text-sm text-text-light">
          &copy; {new Date().getFullYear()} Goutham Swaminathan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
