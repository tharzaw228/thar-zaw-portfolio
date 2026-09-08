import { SketchDoodles } from './SketchDoodles'

export function PaperBackdrop() {
  return (
    <>
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden>
        <defs>
          <pattern
            id="pencil-hatch"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(42)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="6"
              stroke="#2c261c"
              strokeWidth="0.7"
              opacity="0.28"
            />
          </pattern>
          <pattern
            id="pencil-hatch-soft"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-28)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="5"
              stroke="#2c261c"
              strokeWidth="0.55"
              opacity="0.18"
            />
          </pattern>
          <filter id="pencil-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="saturate"
              values="0"
              result="mono"
            />
            <feBlend in="SourceGraphic" in2="mono" mode="multiply" />
          </filter>
        </defs>
      </svg>

      <div className="paper-backdrop pointer-events-none fixed inset-0" />
      <div className="paper-fiber pointer-events-none fixed inset-0 opacity-80" />
      <div className="pointer-events-none fixed inset-y-0 left-[7%] hidden w-px bg-pencil-terra/25 sm:block" />
      <div className="pointer-events-none fixed inset-y-0 left-[calc(7%+5px)] hidden w-px bg-pencil-terra/12 sm:block" />
      <SketchDoodles />
    </>
  )
}

export function WashiTape({
  className = '',
  rotate = -8,
}: {
  className?: string
  rotate?: number
}) {
  return (
    <span
      className={`washi-tape pointer-events-none absolute h-3.5 w-[4.25rem] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden
    />
  )
}
