import { PERSONAL_LINKS } from "@/data/resume";

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="py-20 md:py-32 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-16 md:pb-24 border-b border-[var(--border-subtle)] space-y-8">
          {/* Section Index Marker */}
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] tracking-wider">
            <span className="text-[var(--accent-vermilion)] font-bold">05 //</span>
            <span>CONTACT</span>
          </div>

          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-instrument-serif)] text-[var(--text-ink)] leading-tight"
          >
            Contact
          </h2>

          {/* Verified Contact & Profile Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs sm:text-sm">
            <a
              href={PERSONAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded bg-[var(--text-ink)] text-[var(--bg-vellum)] hover:bg-[var(--accent-vermilion)] transition-colors gap-1.5 font-medium"
            >
              <span>GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={PERSONAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded border border-[var(--border-strong)] bg-[var(--bg-vellum)] hover:bg-[var(--bg-surface)] text-[var(--text-ink)] transition-colors gap-1.5 font-medium"
            >
              <span>LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={PERSONAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-vellum)] hover:border-[var(--text-ink)] text-[var(--text-ink)] transition-colors gap-1.5 font-medium"
            >
              <span>Résumé (PDF)</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-xs font-mono text-[var(--text-muted)]">
          <p>© 2026 Soham More.</p>
        </div>
      </div>
    </footer>
  );
}
