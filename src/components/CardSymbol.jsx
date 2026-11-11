export function CardSymbol({ type = 'orbit' }) {
  if (type === 'math') {
    return (
      <svg viewBox="0 0 120 120" className="card-symbol" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.05">
          <path d="M60 9 105 35 105 85 60 111 15 85 15 35Z" />
          <path d="M60 9 60 111M15 35l90 50M105 35 15 85M15 35l45 76 45-76M105 85 60 9 15 85" opacity=".75" />
          <path d="M60 25 89 42 89 78 60 95 31 78 31 42Z" />
          <path d="M60 25v70M31 42l58 36M89 42 31 78" opacity=".6" />
          <circle cx="60" cy="60" r="5" fill="currentColor" />
        </g>
      </svg>
    );
  }

  if (type === 'feather') {
    return (
      <svg viewBox="0 0 120 120" className="card-symbol" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 95C32 75 40 54 53 35 67 15 91 15 102 18 99 41 91 63 75 78 59 93 40 98 23 95Z" />
          <path d="M23 95c24-23 45-45 73-74M46 74l-4-17m17 2-2-17m6 47 17-4m-4-17 17-3" opacity=".8" />
          <path d="M23 95 14 106" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" className="card-symbol" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.1">
        <ellipse cx="60" cy="60" rx="48" ry="18" transform="rotate(-27 60 60)" />
        <ellipse cx="60" cy="60" rx="48" ry="18" transform="rotate(27 60 60)" />
        <ellipse cx="60" cy="60" rx="48" ry="18" transform="rotate(90 60 60)" opacity=".7" />
        <circle cx="60" cy="60" r="25" />
        <circle cx="60" cy="60" r="5" fill="currentColor" />
        <path d="M60 20v80M20 60h80" opacity=".35" />
      </g>
      <circle cx="60" cy="60" r="3" fill="currentColor" />
    </svg>
  );
}
