import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-100 via-zinc-200/70 to-zinc-100 p-6 text-center dark:from-zinc-900 dark:via-zinc-800/80 dark:to-zinc-900 ${className}`}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-300/80 bg-white/80 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
          <ImageOff className="h-5 w-5" aria-hidden="true" />
        </div>
        {fallbackTitle && (
          <p className="max-w-[22ch] text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {fallbackTitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 ${className}`}>
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200/70 dark:from-zinc-900 dark:to-zinc-800/70"
        />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
