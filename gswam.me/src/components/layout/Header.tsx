"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { darkroomUrl } from "@/data/social";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-heading text-xl font-bold tracking-tight text-primary"
          >
            Goutham&apos;s Website
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  pathname === link.href || pathname === link.href.slice(0, -1)
                    ? "text-accent"
                    : "text-text-light"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={darkroomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-text-inverse transition-colors hover:bg-accent"
            >
              Shop
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-6 bg-primary" />
            <span className="block h-0.5 w-6 bg-primary" />
            <span className="block h-0.5 w-6 bg-primary" />
          </button>
        </nav>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </>
  );
}
