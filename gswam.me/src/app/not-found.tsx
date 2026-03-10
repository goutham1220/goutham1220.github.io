import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-text-light">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-accent-light"
      >
        Go Home
      </Link>
    </div>
  );
}
