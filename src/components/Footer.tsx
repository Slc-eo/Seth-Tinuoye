import { ArrowUp, Sun, Moon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface FooterProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function Footer({ theme, onToggleTheme }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-10 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-zinc-950 dark:text-zinc-100">
            {PORTFOLIO_DATA.profile.fullName}
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            &copy; <span className="font-mono-tabular">{currentYear}</span> {PORTFOLIO_DATA.profile.fullName}. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#about" className="hover:text-zinc-950 dark:hover:text-zinc-100">
            About
          </a>
          <a href="#projects" className="hover:text-zinc-950 dark:hover:text-zinc-100">
            Projects
          </a>
          <a href="#skills" className="hover:text-zinc-950 dark:hover:text-zinc-100">
            Skills
          </a>
          <a href="#experience" className="hover:text-zinc-950 dark:hover:text-zinc-100">
            Experience
          </a>
          <a href="#contact" className="hover:text-zinc-950 dark:hover:text-zinc-100">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} color theme`}
            className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Dark</span>
              </>
            )}
          </button>

          <a
            href="#top"
            className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
