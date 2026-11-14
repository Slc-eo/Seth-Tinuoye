import { Github, Linkedin, Globe, Mail } from 'lucide-react';
import { SocialLink } from '../data/portfolio';

export function SocialIcon({
  platform,
  className = 'h-4 w-4',
}: {
  platform: SocialLink['platform'] | 'email';
  className?: string;
}) {
  switch (platform) {
    case 'github':
      return <Github className={className} aria-hidden="true" />;
    case 'linkedin':
      return <Linkedin className={className} aria-hidden="true" />;
    case 'x':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      );
    case 'dribbble':
      return <Globe className={className} aria-hidden="true" />;
    case 'email':
      return <Mail className={className} aria-hidden="true" />;
  }
}
