import { PORTFOLIO_DATA } from '../data/portfolio';

export function AboutSection() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="border-b border-zinc-200 bg-white py-20 sm:py-24 dark:border-zinc-800/80 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Sticky Header Column */}
          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              About Me
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 [text-wrap:balance] sm:text-4xl dark:text-zinc-50">
              {about.title}
            </h2>
          </div>

          {/* Right Readable Biography & Architectural Principles */}
          <div className="lg:col-span-8">
            <div className="max-w-[68ch] space-y-5 text-base leading-[1.7] text-zinc-600 dark:text-zinc-300">
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Guiding Principles separated by subtle hairlines */}
            <div className="mt-12 divide-y divide-zinc-200 border-t border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {about.principles.map((item) => (
                <div
                  key={item.index}
                  className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-6"
                >
                  <div className="sm:col-span-4">
                    <span className="font-mono-tabular text-xs font-medium text-blue-600 dark:text-blue-400">
                      {item.index}.
                    </span>
                    <h3 className="mt-1 font-display text-base font-semibold text-zinc-950 dark:text-zinc-50">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-600 sm:col-span-8 dark:text-zinc-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
