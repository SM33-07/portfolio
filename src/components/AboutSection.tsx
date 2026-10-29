import { EDUCATION, EXPERIENCE } from "@/data/resume";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-28 border-b border-[var(--border-subtle)]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] tracking-wider mb-2">
          <span className="text-[var(--accent-vermilion)] font-bold">03 //</span>
          <span>ABOUT</span>
        </div>

        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-instrument-serif)] text-[var(--text-ink)] mb-12"
        >
          Engineering Background & Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Education */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] lg:sticky lg:top-24">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-vermilion)] font-semibold block mb-2">
                Education
              </span>
              <h3 className="text-xl font-[family-name:var(--font-instrument-serif)] font-medium text-[var(--text-ink)] mb-1">
                {EDUCATION.institution}
              </h3>
              <p className="text-sm font-sans text-[var(--text-ink)] mb-1">
                {EDUCATION.degree}
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)]">
                <span>{EDUCATION.location}</span>
                <span>{EDUCATION.period}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-3">
              Experience & Roles
            </h3>

            <div className="space-y-10">
              {EXPERIENCE.map((exp) => (
                <div key={exp.organization} className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-xl font-[family-name:var(--font-instrument-serif)] font-medium text-[var(--text-ink)]">
                      {exp.organization}
                    </h4>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      {exp.location}
                    </span>
                  </div>

                  <div className="space-y-6 border-l border-[var(--border-subtle)] pl-4 sm:pl-6 ml-1">
                    {exp.roles.map((role) => (
                      <div key={role.title} className="relative space-y-2">
                        <span className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent-vermilion)]" />
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <span className="font-mono text-sm font-semibold text-[var(--text-ink)]">
                            {role.title}
                          </span>
                          <span className="font-mono text-xs text-[var(--text-muted)]">
                            {role.period}
                          </span>
                        </div>
                        <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs sm:text-sm text-[var(--text-ink)] leading-relaxed">
                          {role.bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
