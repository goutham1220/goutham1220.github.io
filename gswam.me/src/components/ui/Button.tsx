import { cn } from "@/lib/utils";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline";
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200",
        variant === "primary" &&
          "bg-accent text-text-inverse hover:bg-accent-light hover:scale-105",
        variant === "outline" &&
          "border-2 border-accent text-accent hover:bg-accent hover:text-text-inverse",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
