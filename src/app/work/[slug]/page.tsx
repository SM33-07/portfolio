import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import { PROJECTS } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Soham More`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Soham More`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const hasAnyLink = Boolean(project.liveUrl || project.githubUrl);

  return (
    <>
      <TopBar />
      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back button */}
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent-vermilion)] transition-colors focus-visible:outline-none"
            >
              <span aria-hidden="true">←</span>
              <span>Back to Selected Work</span>
            </Link>
          </div>

          {/* Project Header with Actions Placed Directly Beneath Title & Subtitle */}
          <header className="pb-8 border-b border-[var(--border-subtle)] space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--accent-vermilion)] font-bold">
                Project {project.number}
              </span>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                {project.status}
              </span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-instrument-serif)] text-[var(--text-ink)] leading-tight">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl font-light text-[var(--text-muted)] font-[family-name:var(--font-instrument-serif)] italic mt-2">
                {project.subtitle}
              </p>
            </div>

            {/* Project Actions & Verified Status (Positioned high up) */}
            <div className="pt-2">
              {hasAnyLink ? (
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded bg-[var(--text-ink)] text-[var(--bg-vellum)] hover:bg-[var(--accent-vermilion)] transition-colors font-medium shadow-xs"
                    >
                      <span>Live demo</span>
                      <span aria-hidden="true" className="ml-1.5">↗</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-ink)] hover:bg-[var(--bg-vellum)] transition-colors font-medium"
                    >
                      <span>GitHub repository</span>
                      <span aria-hidden="true" className="ml-1.5">↗</span>
                    </a>
                  )}
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 py-2 px-3.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)]">
                  <span className="w-2 h-2 rounded-full bg-amber-600 inline-block" />
                  <span>In development, no public demo yet</span>
                </div>
              )}

              {project.notes && (
                <p className="text-xs font-mono text-[var(--text-muted)] pt-3">
                  {project.notes}
                </p>
              )}
            </div>
          </header>

          {/* Project Content Body */}
          <div className="py-10 space-y-12">
            {/* Objective & Overview */}
            <section className="space-y-3" aria-labelledby="overview-heading">
              <h2
                id="overview-heading"
                className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold"
              >
                Overview
              </h2>
              <p className="text-base sm:text-lg text-[var(--text-ink)] leading-relaxed">
                {project.summary}
              </p>
            </section>

            {/* What I built */}
            <section className="space-y-4" aria-labelledby="contribution-heading">
              <h2
                id="contribution-heading"
                className="font-mono text-xs uppercase tracking-wider text-[var(--accent-vermilion)] font-semibold"
              >
                What I built
              </h2>

              <div className="p-5 sm:p-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                <p className="text-[15px] sm:text-base text-[var(--text-ink)] leading-relaxed">
                  {project.contribution}
                </p>
              </div>
            </section>

            {/* Stack */}
            <section className="space-y-4" aria-labelledby="stack-heading">
              <h2
                id="stack-heading"
                className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold"
              >
                Stack
              </h2>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-ink)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Footer Back Link */}
          <footer className="pt-10 border-t border-[var(--border-subtle)]">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[var(--accent-vermilion)] hover:underline"
            >
              <span aria-hidden="true">←</span>
              <span>Return to Selected Work</span>
            </Link>
          </footer>
        </div>
      </main>
    </>
  );
}
