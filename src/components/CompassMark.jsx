export function CompassMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" fill="none">
      <path d="M32 2 39 23 62 32 39 39 32 62 25 39 2 32 25 23 32 2Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M32 11 35 29 53 32 35 35 32 53 29 35 11 32 29 29 32 11Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="m32 21 11 11-11 11-11-11 11-11Z" stroke="currentColor" strokeWidth=".9" />
      <circle cx="32" cy="32" r="2.4" fill="currentColor" />
    </svg>
  );
}
