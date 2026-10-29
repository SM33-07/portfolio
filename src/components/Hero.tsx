import { APPROVED_POSITIONING_LINE, EDUCATION, PERSONAL_LINKS } from "@/data/resume";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-12 pb-16 md:pt-24 md:pb-32 border-b border-[var(--border-subtle)]"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial index marker */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 font-mono text-xs text-[var(--text-muted)] tracking-wider">
          <span className="text-[var(--accent-vermilion)] font-bold">01 //</span>
          <span className="uppercase">Introduction</span>
          <span className="inline-block w-8 h-px bg-[var(--border-subtle)]" />
          <span className="hidden sm:inline">JAIPUR, RAJASTHAN</span>
        </div>

        {/* Semantic Title & Approved Positioning */}
        <div className="max-w-4xl">
          <h1
            id="hero-title"
            className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight font-[family-name:var(--font-instrument-serif)] leading-[1.05] text-[var(--text-ink)] mb-8"
          >
            Soham More
          </h1>

          {/* Approved Positioning Statement */}
          <div className="relative pl-5 border-l-2 border-[var(--accent-vermilion)] mb-8">
            <p className="text-base sm:text-lg text-[var(--text-ink)] leading-relaxed font-sans max-w-2xl">
              {APPROVED_POSITIONING_LINE}
            </p>
          </div>

          {/* Academic Anchor Badge */}
          <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 py-2 px-3 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] mb-10">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-vermilion)] inline-block shrink-0" />
            <span className="font-medium text-[var(--text-ink)]">
              {EDUCATION.institution}
            </span>
            <span className="text-[var(--text-muted)]">—</span>
            <span>{EDUCATION.degree}</span>
            <span className="text-[var(--text-muted)]">({EDUCATION.period})</span>
          </div>

          {/* Deliberate Responsive Hero Action Layout */}
          <div className="w-full max-w-xl font-mono text-xs sm:text-sm">
            {/* Desktop / Tablet layout (>= 640px) */}
            <div className="hidden sm:flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center justify-center min-h-[44px] gap-2 px-5 py-2.5 rounded bg-[var(--text-ink)] text-[var(--bg-vellum)] hover:bg-[var(--accent-vermilion)] transition-colors font-medium focus-visible:outline-none"
              >
                <span>Explore Selected Work</span>
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href={PERSONAL_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] gap-2 px-5 py-2.5 rounded border border-[var(--border-strong)] bg-transparent hover:bg-[var(--bg-surface)] text-[var(--text-ink)] transition-colors"
              >
                <span>View Résumé (PDF)</span>
                <span aria-hidden="true" className="text-xs">↗</span>
              </a>
              <a
                href={PERSONAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] gap-1 px-3.5 py-2.5 text-[var(--text-muted)] hover:text-[var(--text-ink)] transition-colors"
              >
                <span>GitHub</span>
                <span aria-hidden="true" className="text-xs">↗</span>
              </a>
              <a
                href={PERSONAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] gap-1 px-3.5 py-2.5 text-[var(--text-muted)] hover:text-[var(--text-ink)] transition-colors"
              >
                <span>LinkedIn</span>
                <span aria-hidden="true" className="text-xs">↗</span>
              </a>
            </div>

            {/* Mobile layout (< 640px): Clean vertical stack and balanced 2-column social row */}
            <div className="flex sm:hidden flex-col gap-2.5">
              <a
                href="#work"
                className="w-full inline-flex items-center justify-center min-h-[48px] gap-2 px-5 py-3 rounded bg-[var(--text-ink)] text-[var(--bg-vellum)] hover:bg-[var(--accent-vermilion)] transition-colors font-medium text-center"
              >
                <span>Explore Selected Work</span>
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href={PERSONAL_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center min-h-[48px] gap-2 px-5 py-3 rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-ink)] transition-colors text-center"
              >
                <span>View Résumé (PDF)</span>
                <span aria-hidden="true">↗</span>
              </a>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={PERSONAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[44px] gap-1 px-3 py-2.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 text-[var(--text-ink)] hover:border-[var(--text-ink)] transition-colors text-center"
                >
                  <span>GitHub</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={PERSONAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[44px] gap-1 px-3 py-2.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 text-[var(--text-ink)] hover:border-[var(--text-ink)] transition-colors text-center"
                >
                  <span>LinkedIn</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
