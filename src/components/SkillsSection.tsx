import { TECHNICAL_SKILLS } from "@/data/resume";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 md:py-28 border-b border-[var(--border-subtle)]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] tracking-wider mb-2">
          <span className="text-[var(--accent-vermilion)] font-bold">04 //</span>
          <span>SKILLS</span>
        </div>

        <h2
          id="skills-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-instrument-serif)] text-[var(--text-ink)] mb-12"
        >
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILLS.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-lg bg-[var(--bg-surface)]/60 border border-[var(--border-subtle)] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-vermilion)] font-semibold block mb-4 border-b border-[var(--border-subtle)] pb-2">
                  {cat.category}
                </span>

                <ul className="flex flex-wrap gap-2" aria-label={`Skills for ${cat.category}`}>
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-2.5 py-1 rounded bg-[var(--bg-vellum)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-ink)] shadow-2xs"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
