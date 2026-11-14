import { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Award, FileText, Printer, X } from 'lucide-react';
import { PORTFOLIO_DATA, TimelineCategory } from '../data/portfolio';

type TimelineFilter = 'All' | TimelineCategory;

const TIMELINE_FILTERS: TimelineFilter[] = ['All', 'Experience', 'Education', 'Certifications'];

function TimelineIcon({ category }: { category: TimelineCategory }) {
  switch (category) {
    case 'Experience':
      return <Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />;
    case 'Education':
      return <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />;
    case 'Certifications':
      return <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />;
  }
}

export function ExperienceSection() {
  const [filter, setFilter] = useState<TimelineFilter>('All');
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (!resumeOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setResumeOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [resumeOpen]);

  const entries =
    filter === 'All'
      ? PORTFOLIO_DATA.timeline
      : PORTFOLIO_DATA.timeline.filter((item) => item.category === filter);

  return (
    <section
      id="experience"
      className="border-b border-zinc-200 bg-zinc-50 py-20 sm:py-24 dark:border-zinc-800/80 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col justify-between gap-6 border-b border-zinc-200 pb-8 lg:flex-row lg:items-end dark:border-zinc-800">
          <div>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Background &amp; Credentials
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 [text-wrap:balance] sm:text-4xl dark:text-zinc-50">
              Experience, Education &amp; Certifications
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div
              role="group"
              aria-label="Filter timeline entries"
              className="flex flex-wrap items-center gap-1 rounded-xl border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900"
            >
              {TIMELINE_FILTERS.map((option) => {
                const isSelected = filter === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFilter(option)}
                    aria-pressed={isSelected}
                    className={`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
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

            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-xs font-semibold text-zinc-900 whitespace-nowrap shrink-0 transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span>Printable Resume</span>
            </button>
          </div>
        </div>

        {/* Clean Hairline Timeline */}
        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-4 hidden w-px bg-zinc-200 sm:block dark:bg-zinc-800"
          />

          <div className="space-y-8">
            {entries.map((entry) => (
              <div key={entry.id} className="relative sm:pl-12">
                {/* Timeline Node Marker */}
                <div
                  aria-hidden="true"
                  className="absolute top-1 left-0 hidden h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white sm:flex dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <TimelineIcon category={entry.category} />
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 sm:p-7 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                    <div>
                      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {entry.category} · {entry.location}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-bold text-zinc-950 sm:text-xl dark:text-zinc-50">
                        {entry.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                        {entry.organization}
                      </p>
                    </div>

                    <p className="font-mono-tabular text-xs font-medium text-zinc-600 whitespace-nowrap shrink-0 dark:text-zinc-400">
                      {entry.period}
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {entry.summary}
                  </p>

                  {entry.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5 border-t border-zinc-200/80 pt-4 dark:border-zinc-800">
                      {entry.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Printable Resume / CV Modal */}
      {resumeOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/70 p-4 backdrop-blur-xs sm:p-6"
          onClick={() => setResumeOpen(false)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="no-print sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/95">
              <h3 id="resume-modal-title" className="font-display text-lg font-bold text-zinc-950 dark:text-zinc-50">
                Curriculum Vitae — {PORTFOLIO_DATA.profile.fullName}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex min-h-[38px] items-center gap-2 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:text-zinc-950"
                >
                  <Printer className="h-4 w-4" aria-hidden="true" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setResumeOpen(false)}
                  aria-label="Close resume modal"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              <div className="border-b border-zinc-200 pb-5 dark:border-zinc-800">
                <h4 className="font-display text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                  {PORTFOLIO_DATA.profile.fullName}
                </h4>
                <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {PORTFOLIO_DATA.profile.roleTitle}
                </p>
                <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                  {PORTFOLIO_DATA.profile.location} · {PORTFOLIO_DATA.profile.email}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-semibold tracking-wide text-zinc-500 dark:text-zinc-400">
                  Summary
                </h5>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {PORTFOLIO_DATA.profile.heroIntro}
                </p>
              </div>

              <div className="space-y-4">
                <h5 className="text-xs font-semibold tracking-wide text-zinc-500 dark:text-zinc-400">
                  Experience &amp; Education
                </h5>
                {PORTFOLIO_DATA.timeline.map((item) => (
                  <div key={item.id} className="border-t border-zinc-200/80 pt-3 dark:border-zinc-800">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                        {item.title} — <span className="font-normal text-zinc-600 dark:text-zinc-400">{item.organization}</span>
                      </p>
                      <span className="font-mono-tabular text-xs text-zinc-500 dark:text-zinc-400">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
