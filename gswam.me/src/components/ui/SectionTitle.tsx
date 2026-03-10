"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={cn("mb-10 text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{children}</h2>
      <motion.div
        className="mx-auto mt-3 h-[2px] bg-accent"
        initial={{ width: 0 }}
        animate={inView ? { width: 80 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}
