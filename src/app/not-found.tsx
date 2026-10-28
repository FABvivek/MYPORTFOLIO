import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg flex items-center justify-center section-padding">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-6">
          404 / PAGE NOT FOUND
        </p>
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl text-fg mb-6">
          Lost in the <em className="text-accent italic">void.</em>
        </h1>
        <p className="text-muted text-lg mb-12 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent font-mono text-sm uppercase tracking-wider rounded-full hover:bg-accent hover:text-bg transition-all duration-300"
        >
          Back to home
          <span>←</span>
        </Link>
      </div>
    </main>
  );
}
