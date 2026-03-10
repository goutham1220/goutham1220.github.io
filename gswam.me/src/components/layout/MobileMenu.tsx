"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { darkroomUrl } from "@/data/social";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  pathname: string;
}

export function MobileMenu({ open, onClose, links, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-72 bg-white p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="mb-8 text-2xl text-text-light hover:text-accent"
              aria-label="Close menu"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-accent",
                    pathname === link.href || pathname === link.href.slice(0, -1)
                      ? "text-accent"
                      : "text-text"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={darkroomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-text-inverse transition-colors hover:bg-accent"
              >
                Shop Prints
              </a>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
