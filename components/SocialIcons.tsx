type IconProps = {
  className?: string;
};

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BehanceIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M4 7.5h5.2c2 0 3.3 1 3.3 2.6 0 1.1-.6 1.9-1.6 2.2 1.3.3 2 1.2 2 2.7 0 2-1.5 3.2-3.9 3.2H4V7.5Zm4.8 4.3c1 0 1.6-.4 1.6-1.2S9.8 9.4 8.8 9.4H6.4v2.4h2.4Zm.2 4.5c1.1 0 1.8-.5 1.8-1.4s-.6-1.4-1.8-1.4H6.4v2.8H9Zm5.6-7.8h5.5v1.3h-5.5V8.5Zm2.8 9.8c2.2 0 3.7-1 4.2-2.7h-2.1c-.3.6-1 1-2 1-1.4 0-2.2-.8-2.3-2.2h6.5v-.7c0-2.8-1.7-4.6-4.4-4.6s-4.6 1.9-4.6 4.7 1.9 4.5 4.7 4.5Zm-2.2-5.5c.2-1.2 1-1.9 2.1-1.9 1.2 0 1.9.7 2.1 1.9h-4.2Z" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M13.5 8.5V6.9c0-.7.4-.9.9-.9H16V3h-2.3c-2.6 0-3.7 1.2-3.7 3.5v2H8v3h2v9h3.5v-9H16l.4-3h-2.9Z" />
    </svg>
  );
}

export function WebsiteIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4M12 3.8c2.2 2.2 3.4 5.1 3.4 8.2s-1.2 6-3.4 8.2M12 3.8c-2.2 2.2-3.4 5.1-3.4 8.2s1.2 6 3.4 8.2" />
    </svg>
  );
}
