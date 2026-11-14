import { Code2, LayoutTemplate, Database, Compass, Wrench } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

function CategoryIcon({ id }: { id: string }) {
  const iconClass = 'h-5 w-5 text-blue-600 dark:text-blue-400';
  switch (id) {
    case 'languages':
      return <Code2 className={iconClass} aria-hidden="true" />;
    case 'frontend':
      return <LayoutTemplate className={iconClass} aria-hidden="true" />;
    case 'backend':
      return <Database className={iconClass} aria-hidden="true" />;
    case 'ui-ux':
      return <Compass className={iconClass} aria-hidden="true" />;
    default:
      return <Wrench className={iconClass} aria-hidden="true" />;
  }
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b border-zinc-200 bg-white py-20 sm:py-24 dark:border-zinc-800/80 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Capabilities &amp; Stack
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 [text-wrap:balance] sm:text-4xl dark:text-zinc-50">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            Core languages, frameworks, design practices, and tooling applied across production engineering engagements.
          </p>
        </div>

        {/* Structured Category Matrix without fabricated proficiency meters */}
        <div className="mt-12 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          {PORTFOLIO_DATA.skillCategories.map((category) => (
            <div
              key={category.id}
              className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-12 lg:gap-12"
            >
              {/* Category Header */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                    <CategoryIcon id={category.id} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-zinc-950 dark:text-zinc-50">
                    {category.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {category.summary}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
                {category.items.map((skill) => (
                  <div key={skill.name} className="group">
                    <p className="text-sm font-semibold text-zinc-950 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                      {skill.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
