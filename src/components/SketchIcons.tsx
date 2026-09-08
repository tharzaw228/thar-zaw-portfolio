import type { ReactNode } from 'react'

type IconProps = {
  className?: string
  title?: string
}

function Frame({
  children,
  className = 'h-14 w-14',
  title,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`shrink-0 overflow-visible ${className}`}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

function Stroke({ d }: { d: string }) {
  return (
    <>
      <path
        d={d}
        fill="none"
        stroke="#2c261c"
        strokeWidth="1.05"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.22"
        transform="translate(0.85 0.7)"
      />
      <path
        d={d}
        fill="none"
        stroke="#2c261c"
        strokeWidth="1.45"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d={d}
        fill="none"
        stroke="#2c261c"
        strokeWidth="0.7"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.28"
        transform="translate(-0.35 0.35)"
      />
    </>
  )
}

export function IconIsoCube({ className, title }: IconProps) {
  const top = 'M32 10 L54 20 L32 30 L10 20 Z'
  const right = 'M32 30 L54 20 L54 42 L32 52 Z'
  const left = 'M32 30 L10 20 L10 42 L32 52 Z'

  return (
    <Frame className={className} title={title}>
      <path d={left} fill="#8a6a28" />
      <path d={left} fill="url(#pencil-hatch)" />
      <path d={right} fill="#c9a44a" />
      <path d={right} fill="url(#pencil-hatch-soft)" />
      <path d={top} fill="#e6d08a" />
      <Stroke d={top} />
      <Stroke d={right} />
      <Stroke d={left} />
    </Frame>
  )
}

export function IconIsoPhone({ className, title }: IconProps) {
  const body = 'M24 12 L40 19 L40 47 L24 40 Z'
  const side = 'M40 19 L46 16 L46 44 L40 47 Z'
  const top = 'M24 12 L30 9 L46 16 L40 19 Z'
  const screen = 'M27 17 L37 21.4 L37 40 L27 35.6 Z'

  return (
    <Frame className={className} title={title}>
      <path d={side} fill="#4a6178" />
      <path d={side} fill="url(#pencil-hatch)" />
      <path d={body} fill="#6d879c" />
      <path d={top} fill="#9ab0c2" />
      <path d={screen} fill="#d8ead8" />
      <path d={screen} fill="url(#pencil-hatch-soft)" />
      <Stroke d={top} />
      <Stroke d={body} />
      <Stroke d={side} />
      <Stroke d={screen} />
    </Frame>
  )
}

export function IconIsoShield({ className, title }: IconProps) {
  const face = 'M32 10 L50 16 L48 36 C46 46 32 54 32 54 C32 54 18 46 16 36 L14 16 Z'
  const ridge = 'M32 12 L32 52'
  const band = 'M18 24 L46 24'

  return (
    <Frame className={className} title={title}>
      <path d={face} fill="#5d7a4f" />
      <path d={face} fill="url(#pencil-hatch)" />
      <path d="M32 10 L50 16 L48 36 C46 46 32 54 32 54 Z" fill="#7d9a68" />
      <path d="M32 10 L50 16 L48 36 C46 46 32 54 32 54 Z" fill="url(#pencil-hatch-soft)" />
      <Stroke d={face} />
      <Stroke d={ridge} />
      <Stroke d={band} />
    </Frame>
  )
}

export function IconIsoBuilding({ className, title }: IconProps) {
  const front = 'M16 26 L32 34 L32 54 L16 46 Z'
  const side = 'M32 34 L48 26 L48 46 L32 54 Z'
  const roof = 'M16 26 L32 18 L48 26 L32 34 Z'

  return (
    <Frame className={className} title={title}>
      <path d={front} fill="#8b4a4a" />
      <path d={front} fill="url(#pencil-hatch)" />
      <path d={side} fill="#b25a38" />
      <path d={roof} fill="#d8b48a" />
      <Stroke d={roof} />
      <Stroke d={front} />
      <Stroke d={side} />
      <path d="M21 34 L21 40" stroke="#2c261c" strokeWidth="1.4" />
      <path d="M26 36.5 L26 42.5" stroke="#2c261c" strokeWidth="1.4" />
      <path d="M37 32 L37 38" stroke="#2c261c" strokeWidth="1.4" />
      <path d="M42 30 L42 36" stroke="#2c261c" strokeWidth="1.4" />
    </Frame>
  )
}

export function IconIsoBook({ className, title }: IconProps) {
  const left = 'M14 18 L30 26 L30 50 L14 42 Z'
  const right = 'M34 26 L50 18 L50 42 L34 50 Z'
  const spine = 'M30 26 L34 26 L34 50 L30 50 Z'
  const coverL = 'M14 18 L32 12 L30 26 L14 18 Z'
  const coverR = 'M32 12 L50 18 L34 26 L32 12 Z'

  return (
    <Frame className={className} title={title}>
      <path d={left} fill="#4a6178" />
      <path d={left} fill="url(#pencil-hatch)" />
      <path d={right} fill="#6d879c" />
      <path d={spine} fill="#2c261c" opacity="0.35" />
      <path d={coverL} fill="#c9a44a" />
      <path d={coverR} fill="#e6d08a" />
      <Stroke d={left} />
      <Stroke d={right} />
      <Stroke d={coverL} />
      <Stroke d={coverR} />
    </Frame>
  )
}

export function IconIsoEnvelope({ className, title }: IconProps) {
  const body = 'M10 24 L54 24 L54 46 L10 46 Z'
  const flap = 'M10 24 L32 38 L54 24'
  const fold = 'M10 46 L32 34 L54 46'

  return (
    <Frame className={className} title={title}>
      <path d={body} fill="#d8b48a" />
      <path d={body} fill="url(#pencil-hatch-soft)" />
      <path d="M10 24 L32 38 L54 24 L54 20 L10 20 Z" fill="#efe3c8" />
      <Stroke d={body} />
      <Stroke d={flap} />
      <Stroke d={fold} />
    </Frame>
  )
}

export function IconIsoLink({ className, title }: IconProps) {
  return <IconSketchLinkedin className={className} title={title} />
}

export function IconIsoCode({ className, title }: IconProps) {
  return <IconSketchGithub className={className} title={title} />
}

export function IconSketchGithub({ className, title }: IconProps) {
  const ring = 'M15 33 C14 20 22 13 31.5 12.5 C42 11.8 50 19 50.5 32 C51 46 42 53.5 31 53 C19 52.2 16 45 15 33 Z'
  const earL = 'M22 24 L20 13 L29 21'
  const earR = 'M36 21 L45 12 L43 25'
  const face = 'M23 29 C23 22 27 19 32 19 C38 19 41 23 41 30 C41 37 37 41 32 41 C26 41 23 36 23 29 Z'
  const eyeL = 'M27 29.5 C27 28 28.5 28 29 29.5 C29 31 27.4 31.2 27 29.5 Z'
  const eyeR = 'M35 29.2 C35 27.8 36.6 27.8 37 29.3 C37 30.8 35.4 31 35 29.2 Z'
  const smile = 'M29 35 C30.5 37.2 33.6 37.4 35.2 34.8'
  const chest = 'M27 40.5 C25 47 23 51 27 52 C30 50 31.5 46 32 42 C34 47 37 51 41 52 C44 50 42 46 39 40.8'

  return (
    <Frame className={className} title={title}>
      <path d={ring} fill="#efe3c8" />
      <path d={ring} fill="url(#pencil-hatch)" />
      <Stroke d={ring} />
      <Stroke d={earL} />
      <Stroke d={earR} />
      <path d={face} fill="#e6d08a" />
      <path d={face} fill="url(#pencil-hatch-soft)" />
      <Stroke d={face} />
      <path d={eyeL} fill="#2c261c" />
      <path d={eyeR} fill="#2c261c" />
      <Stroke d={smile} />
      <Stroke d={chest} />
    </Frame>
  )
}

export function IconSketchLinkedin({ className, title }: IconProps) {
  const plate = 'M13 17 C13 14 15.5 13 18 13.4 L46.5 14 C49 14.3 51 16 50.6 19 L50 46.5 C49.7 49.5 47 51.4 44 51 L17.5 50.2 C14.5 49.9 13.2 47.5 13.5 44.5 Z'
  const stem = 'M21.2 28 L20.6 44'
  const hook = 'M31.5 44 L31.8 32.5 C32 29 35.5 27.8 38.5 29.2 C41 30.4 41.6 33.8 41.2 37 L40.8 44.2'
  const dot = 'M20 21 C20 19.6 21.6 19.2 22.6 20.6 C23.4 21.8 22.6 23.6 21 23.5 C19.8 23.4 20 22.2 20 21 Z'

  return (
    <Frame className={className} title={title}>
      <path d={plate} fill="#c5d0da" />
      <path d={plate} fill="url(#pencil-hatch)" />
      <Stroke d={plate} />
      <path d={dot} fill="#2c261c" />
      <Stroke d={stem} />
      <Stroke d={hook} />
    </Frame>
  )
}

export function IconIsoGlobe({ className, title }: IconProps) {
  return (
    <Frame className={className} title={title}>
      <ellipse cx="32" cy="32" rx="18" ry="18" fill="#6d879c" />
      <ellipse cx="32" cy="32" rx="18" ry="18" fill="url(#pencil-hatch-soft)" />
      <ellipse cx="32" cy="32" rx="8" ry="18" fill="none" stroke="#2c261c" strokeWidth="1.5" />
      <ellipse cx="32" cy="32" rx="18" ry="7" fill="none" stroke="#2c261c" strokeWidth="1.5" />
      <path d="M14 32 H50" stroke="#2c261c" strokeWidth="1.4" />
      <circle
        cx="32"
        cy="32"
        r="18"
        fill="none"
        stroke="#2c261c"
        strokeWidth="1.6"
      />
      <circle
        cx="32.6"
        cy="32.5"
        r="18"
        fill="none"
        stroke="#2c261c"
        strokeWidth="1"
        opacity="0.28"
      />
    </Frame>
  )
}

export function IconIsoServer({ className, title }: IconProps) {
  const top = 'M14 18 L50 18 L54 24 L18 24 Z'
  const face = 'M18 24 L54 24 L54 46 L18 46 Z'
  const side = 'M14 18 L18 24 L18 46 L14 40 Z'

  return (
    <Frame className={className} title={title}>
      <path d={side} fill="#8a6a28" />
      <path d={side} fill="url(#pencil-hatch)" />
      <path d={face} fill="#c9a44a" />
      <path d={top} fill="#e6d08a" />
      <Stroke d={top} />
      <Stroke d={face} />
      <Stroke d={side} />
      <path d="M24 30 H46" stroke="#2c261c" strokeWidth="1.3" />
      <path d="M24 36 H40" stroke="#2c261c" strokeWidth="1.3" />
      <circle cx="48" cy="33" r="1.6" fill="#4d6a42" stroke="#2c261c" strokeWidth="0.8" />
    </Frame>
  )
}

export function IconIsoPencil({ className, title }: IconProps) {
  const shaft = 'M18 40 L36 14 L44 20 L26 46 Z'
  const tip = 'M18 40 L14 50 L26 46 Z'
  const wood = 'M18 40 L22 34 L30 40 L26 46 Z'

  return (
    <Frame className={className} title={title}>
      <path d={shaft} fill="#b25a38" />
      <path d={shaft} fill="url(#pencil-hatch)" />
      <path d={wood} fill="#e6d08a" />
      <path d={tip} fill="#2c261c" />
      <path d="M36 14 L42 12 L48 18 L44 20 Z" fill="#4a6178" />
      <Stroke d={shaft} />
      <Stroke d={wood} />
      <Stroke d={tip} />
      <Stroke d="M36 14 L42 12 L48 18 L44 20 Z" />
    </Frame>
  )
}

export const projectIcons = {
  insurance: IconIsoPhone,
  microfinance: IconIsoBuilding,
  odoo: IconIsoServer,
} as const

export const contactIcons = {
  email: IconIsoEnvelope,
  linkedin: IconSketchLinkedin,
  github: IconSketchGithub,
} as const

export const skillIcons = {
  backend: IconIsoServer,
  frontend: IconIsoPhone,
  devops: IconIsoCube,
  erp: IconIsoBuilding,
  engineering: IconIsoPencil,
  professional: IconIsoGlobe,
} as const
