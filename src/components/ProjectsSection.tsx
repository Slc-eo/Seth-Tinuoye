import { useState } from 'react';
import { ArrowUpRight, Github, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectCategory, ProjectItem } from '../data/portfolio';
import { ResilientImage } from './ResilientImage';
import { ProjectModal } from './ProjectModal';

type FilterOption = 'All' | ProjectCategory;

const FILTER_OPTIONS: FilterOption[] = ['All', 'Full-Stack', 'Design Systems', 'Developer Tools'];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeFilter === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="border-b border-zinc-200 bg-zinc-50 py-20 sm:py-24 dark:border-zinc-800/80 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col justify-between gap-6 border-b border-zinc-200 pb-8 md:flex-row md:items-end dark:border-zinc-800">
          <div>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Selected Work
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 [text-wrap:balance] sm:text-4xl dark:text-zinc-50">
              Featured Projects &amp; Case Studies
            </h2>
            <p className="mt-3 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
              Production platforms, design systems, and developer tools built with measurable performance and usability outcomes.
            </p>
          </div>

          {/* Interactive Category Filter Segmented Control */}
          <div
            role="group"
            aria-label="Filter projects by discipline"
            className="flex flex-wrap items-center gap-1 rounded-xl border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = activeFilter === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setActiveFilter(option)}
                  aria-pressed={isSelected}
                  className={`min-h-[36px] rounded-lg px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    isSelected
                      ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-200 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              {/* Project Visual Frame */}
              <div className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                <ResilientImage
                  src={project.image}
                  alt={project.imageAlt}
                  fallbackTitle={project.title}
                  className="aspect-[4/3] w-full transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  {/* Quiet 1-line unboxed metadata kicker */}
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {project.category} · <span className="font-mono-tabular">{project.year}</span> · {project.role}
                  </p>

                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl dark:text-zinc-50">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
                    {project.summary}
                  </p>

                  {/* Key Features / Achievements */}
                  <ul className="mt-5 space-y-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800">
                    {project.achievements.slice(0, 2).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm leading-snug text-zinc-600 dark:text-zinc-400"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack & Action Row */}
                <div className="mt-6 border-t border-zinc-200/80 pt-5 dark:border-zinc-800">
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {project.technologies.join(' · ')}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:text-zinc-950 dark:hover:bg-blue-400"
                    >
                      <Eye className="h-4 w-4" aria-hidden="true" />
                      <span>Preview &amp; Case Study</span>
                    </button>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-medium text-zinc-700 whitespace-nowrap transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
                      >
                        <span>Live Site</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-medium text-zinc-700 whitespace-nowrap transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study & Live Interactive Preview Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
