// Minimal stroke-based SVG icons

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.5',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconCycle = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <polyline points="3 3 3 8 8 8" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <polyline points="16 16 21 16 21 21" />
  </svg>
)

export const IconUsers = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

export const IconTrendDown = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
)

export const IconLayers = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
)

export const IconZap = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

export const IconActivity = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)

export const IconBook = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="11" x2="12" y2="11" />
  </svg>
)

export const IconCrosshair = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <circle cx="12" cy="12" r="10" />
    <line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" />
    <line x1="12" y1="6" x2="12" y2="2" />
    <line x1="12" y1="22" x2="12" y2="18" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const IconArrowRight = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export const IconShield = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

export const IconShuffle = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <polyline points="16 3 21 3 21 8" />
    <line x1="4" y1="20" x2="21" y2="3" />
    <polyline points="21 16 21 21 16 21" />
    <line x1="15" y1="15" x2="21" y2="21" />
    <line x1="4" y1="4" x2="9" y2="9" />
  </svg>
)

export const IconGlobe = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

export const IconWifi = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
)

export const IconEye = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const IconBell = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

export const IconSprout = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <path d="M7 20h10" />
    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
    <path d="M14.1 6a7 7 0 0 1 1.4 7.3c-1.2 1.3-2.6 1.8-3.8 1.7-1.2-1.8-.1-4.5.9-6.4C13 7.2 13.5 6.5 14.1 6z" />
  </svg>
)

export const IconStar = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export const IconBarChart = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
)

export const IconTrendUp = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
)

export const IconFlag = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
)

export const IconCheck = ({ className = 'w-5 h-5' }) => (
  <svg className={className} {...base}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
