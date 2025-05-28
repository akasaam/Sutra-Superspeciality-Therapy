interface IllustrationProps {
  type: "healthcare" | "wellness" | "team" | "contact" | "services"
  className?: string
}

export function Illustration({ type, className = "" }: IllustrationProps) {
  const illustrations = {
    healthcare: (
      <svg viewBox="0 0 400 300" className={`w-full h-full ${className}`}>
        <rect width="400" height="300" fill="#D8B9A1" />
        <circle cx="200" cy="150" r="80" fill="#1993e5" opacity="0.2" />
        <rect x="180" y="130" width="40" height="40" rx="8" fill="#1993e5" />
        <circle cx="160" cy="120" r="15" fill="#ffffff" />
        <circle cx="240" cy="120" r="15" fill="#ffffff" />
        <path d="M170 180 Q200 200 230 180" stroke="#1993e5" strokeWidth="3" fill="none" />
      </svg>
    ),
    wellness: (
      <svg viewBox="0 0 400 300" className={`w-full h-full ${className}`}>
        <rect width="400" height="300" fill="#D8B9A1" />
        <circle cx="200" cy="150" r="60" fill="#1993e5" opacity="0.3" />
        <path
          d="M200 100 L220 140 L260 140 L230 170 L240 210 L200 190 L160 210 L170 170 L140 140 L180 140 Z"
          fill="#1993e5"
        />
      </svg>
    ),
    team: (
      <svg viewBox="0 0 400 300" className={`w-full h-full ${className}`}>
        <rect width="400" height="300" fill="#D8B9A1" />
        <circle cx="150" cy="120" r="25" fill="#1993e5" />
        <circle cx="200" cy="120" r="25" fill="#1993e5" />
        <circle cx="250" cy="120" r="25" fill="#1993e5" />
        <rect x="130" y="160" width="40" height="60" rx="20" fill="#1993e5" opacity="0.7" />
        <rect x="180" y="160" width="40" height="60" rx="20" fill="#1993e5" opacity="0.7" />
        <rect x="230" y="160" width="40" height="60" rx="20" fill="#1993e5" opacity="0.7" />
      </svg>
    ),
    contact: (
      <svg viewBox="0 0 400 300" className={`w-full h-full ${className}`}>
        <rect width="400" height="300" fill="#D8B9A1" />
        <rect x="100" y="80" width="200" height="140" rx="10" fill="#1993e5" opacity="0.3" />
        <circle cx="200" cy="150" r="30" fill="#1993e5" />
        <path d="M185 140 L200 155 L215 140" stroke="#ffffff" strokeWidth="3" fill="none" />
      </svg>
    ),
    services: (
      <svg viewBox="0 0 400 300" className={`w-full h-full ${className}`}>
        <rect width="400" height="300" fill="#D8B9A1" />
        <rect x="80" y="100" width="60" height="60" rx="8" fill="#1993e5" opacity="0.4" />
        <rect x="170" y="100" width="60" height="60" rx="8" fill="#1993e5" opacity="0.6" />
        <rect x="260" y="100" width="60" height="60" rx="8" fill="#1993e5" opacity="0.8" />
        <circle cx="110" cy="130" r="15" fill="#1993e5" />
        <circle cx="200" cy="130" r="15" fill="#1993e5" />
        <circle cx="290" cy="130" r="15" fill="#1993e5" />
      </svg>
    ),
  }

  return <div className={className}>{illustrations[type]}</div>
}
