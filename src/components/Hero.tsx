import { ArrowDownRight, ArrowRight, Sun, Moon, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ResilientImage } from './ResilientImage';
import { SocialIcon } from './SocialIcon';

interface HeroProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export function Hero({ theme, onToggleTheme }: HeroProps) {
  const { profile, socials } = PORTFOLIO_DATA;

  return (
    <section
      id="top"
      className="border-b border-zinc-200 bg-zinc-50 pt-10 pb-14 sm:pt-14 sm:pb-20 dark:border-zinc-800/80 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Utility Bar: Role/Location + Theme Mode Switcher */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200/80 pb-5 dark:border-zinc-800/80">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="font-medium text-zinc-900 dark:text-zinc-200">
              {profile.roleTitle}
            </span>
            <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">
              /
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" aria-hidden="true" />
              {profile.location}
            </span>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} color theme`}
            className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-700 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-50"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                <span>Light Theme</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5 text-zinc-600" aria-hidden="true" />
                <span>Dark Theme</span>
              </>
            )}
          </button>
        </div>

        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="mb-3 text-sm font-medium tracking-wide text-blue-600 dark:text-blue-400">
                {profile.availability}
              </p>

              <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-950 [text-wrap:balance] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08] dark:text-zinc-50">
                {profile.fullName}
                <span className="mt-2 block font-semibold text-zinc-600 dark:text-zinc-400">
                  {profile.headline}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
                {profile.heroIntro}
              </p>

              {/* Primary & Secondary Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:text-zinc-950 dark:hover:bg-blue-400"
                >
                  <span>View My Projects</span>
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-zinc-400 hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
                >
                  <span>Contact Me</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Social Links Strip */}
            <div className="mt-10 border-t border-zinc-200/80 pt-6 dark:border-zinc-800/80">
              <p className="mb-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Connect &amp; Code Profiles
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
                  >
                    <SocialIcon
                      platform={social.platform}
                      className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-blue-600 dark:text-zinc-400 dark:group-hover:text-blue-400"
                    />
                    <span>{social.label}</span>
                  </a>
                ))}

                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex min-h-[40px] items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
                >
                  <SocialIcon
                    platform="email"
                    className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-blue-600 dark:text-zinc-400 dark:group-hover:text-blue-400"
                  />
                  <span>{profile.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Frame */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:min-h-[440px] lg:min-h-0 dark:border-zinc-800 dark:bg-zinc-900">
              <ResilientImage
                src={profile.portrait}
                alt={profile.portraitAlt}
                fallbackTitle={profile.fullName}
                priority
                className="h-full w-full"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/25 to-transparent p-5">
                <p className="text-xs font-medium text-zinc-200">
                  {profile.fullName} · {profile.roleTitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Highlights Row Below the Split */}
        <div className="mt-12 grid grid-cols-2 divide-y divide-zinc-200 border-y border-zinc-200 sm:divide-y-0 sm:divide-x lg:grid-cols-4 dark:divide-zinc-800 dark:border-zinc-800">
          {profile.metrics.map((metric) => (
            <div key={metric.label} className="px-2 py-5 sm:px-6 first:pl-0 last:pr-0">
              <p className="font-display font-mono-tabular text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50">
                {metric.value}
              </p>
              <p className="mt-1 text-xs font-medium text-zinc-600 sm:text-sm dark:text-zinc-400">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
