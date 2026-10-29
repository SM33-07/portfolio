export default function ChapterNavigation() {
  const chapters = [
    { id: "hero", number: "01", label: "Introduction" },
    { id: "work", number: "02", label: "Work" },
    { id: "about", number: "03", label: "About" },
    { id: "skills", number: "04", label: "Skills" },
    { id: "contact", number: "05", label: "Contact" },
  ];

  return (
    <nav
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3 pointer-events-auto"
      aria-label="Chapter wayfinding"
    >
      <div className="text-[10px] uppercase font-mono tracking-widest text-[var(--text-muted)] rotate-90 origin-right translate-x-4 mb-4">
        Chapters
      </div>
      <ul className="flex flex-col gap-2.5 items-end">
        {chapters.map((ch) => (
          <li key={ch.id}>
            <a
              href={`/#${ch.id}`}
              className="group flex items-center gap-2.5 py-1 pl-3 text-right focus-visible:outline-none"
              aria-label={`Jump to Chapter ${ch.number}: ${ch.label}`}
            >
              <span className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 text-[11px] font-mono text-[var(--text-muted)] transition-opacity bg-[var(--bg-vellum)] px-1.5 py-0.5 rounded border border-[var(--border-subtle)] shadow-xs">
                {ch.label}
              </span>
              <span className="text-xs font-mono font-medium text-[var(--text-muted)] group-hover:text-[var(--accent-vermilion)] transition-colors">
                {ch.number}
              </span>
              <span className="w-2 h-0.5 bg-[var(--border-strong)] group-hover:bg-[var(--accent-vermilion)] group-hover:w-4 transition-all" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
