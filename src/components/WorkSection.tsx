import Link from "next/link";
import { PROJECTS, Project } from "@/data/projects";

function StatusBadge({ badge, label }: { badge: Project["statusBadge"]; label: string }) {
  const styles = {
    shipped: "bg-emerald-950/5 text-emerald-800 border-emerald-800/20",
    production: "bg-blue-950/5 text-blue-800 border-blue-800/20",
    in_development: "bg-amber-950/5 text-amber-900 border-amber-900/30",
    team_project: "bg-stone-900/5 text-stone-800 border-stone-800/20",
  }[badge];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${styles}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      <span>{label}</span>
    </span>
  );
}

export default function WorkSection() {
  return (
    <section
      id="work"
      className="py-16 md:py-28 border-b border-[var(--border-subtle)]"
      aria-labelledby="work-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] tracking-wider mb-2">
            <span className="text-[var(--accent-vermilion)] font-bold">02 //</span>
            <span>SELECTED WORK</span>
          </div>
          <h2
            id="work-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-instrument-serif)] text-[var(--text-ink)]"
          >
            Selected work
          </h2>
        </div>

        {/* Project List */}
        <div className="divide-y divide-[var(--border-subtle)]">
          {PROJECTS.map((project) => (
            <article
              key={project.slug}
              className="py-10 md:py-12 group transition-colors hover:bg-[var(--bg-surface)]/40 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg"
              aria-labelledby={`project-title-${project.slug}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Column 1: Index & Status */}
                <div className="lg:col-span-3 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-2xl font-light text-[var(--text-muted)] group-hover:text-[var(--accent-vermilion)] transition-colors">
                      {project.number}
                    </span>
                    <StatusBadge badge={project.statusBadge} label={project.status} />
                  </div>
                  <h3
                    id={`project-title-${project.slug}`}
                    className="text-2xl sm:text-3xl font-[family-name:var(--font-instrument-serif)] text-[var(--text-ink)] mt-1"
                  >
                    <Link
                      href={`/work/${project.slug}`}
                      className="hover:text-[var(--accent-vermilion)] transition-colors focus-visible:outline-none"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-xs font-mono text-[var(--text-muted)]">
                    {project.subtitle}
                  </p>
                </div>

                {/* Column 2: Problem Summary & Contribution */}
                <div className="lg:col-span-6 space-y-4">
                  <p className="text-sm sm:text-base text-[var(--text-ink)] leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[14px] sm:text-[15px] font-sans text-[var(--text-ink)] leading-relaxed">
                    <span className="font-mono font-semibold text-[var(--accent-vermilion)] uppercase tracking-wider block mb-1.5 text-xs">
                      What I built:
                    </span>
                    <p>
                      {project.contribution}
                    </p>
                  </div>
                </div>

                {/* Column 3: Stack Tags & Action Links */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full gap-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-vellum)] border border-[var(--border-subtle)] text-[var(--text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 pt-2 text-xs font-mono">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 font-medium text-[var(--accent-vermilion)] hover:underline focus-visible:outline-none"
                    >
                      <span>Explore Project Detail</span>
                      <span aria-hidden="true">→</span>
                    </Link>

                    <div className="flex items-center gap-3 text-[var(--text-muted)]">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[var(--text-ink)] transition-colors inline-flex items-center gap-1"
                          aria-label={`Open live demonstration for ${project.title}`}
                        >
                          <span>Live Demo</span>
                          <span aria-hidden="true" className="text-[10px]">↗</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[var(--text-ink)] transition-colors inline-flex items-center gap-1"
                          aria-label={`Open GitHub repository for ${project.title}`}
                        >
                          <span>GitHub</span>
                          <span aria-hidden="true" className="text-[10px]">↗</span>
                        </a>
                      )}
                      {!project.liveUrl && !project.githubUrl && (
                        <span className="text-[11px] text-[var(--text-muted)] italic">
                          In development
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
