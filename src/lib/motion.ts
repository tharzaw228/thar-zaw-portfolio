export const CHEAP_MOTION_CLASS = 'cheap-motion'

function isSoftwareRenderer() {
  try {
    const canvas = document.createElement('canvas')
    const hardware = canvas.getContext('webgl', {
      failIfMajorPerformanceCaveat: true,
    })
    return !hardware
  } catch {
    return true
  }
}

let cached: boolean | null = null

export function detectSoftMotion() {
  if (typeof window === 'undefined') return false
  if (cached != null) return cached

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cached = true
    return cached
  }

  const nav = navigator as Navigator & { deviceMemory?: number }
  if (typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 2) {
    cached = true
    return cached
  }
  if (nav.hardwareConcurrency > 0 && nav.hardwareConcurrency <= 2) {
    cached = true
    return cached
  }

  cached = isSoftwareRenderer()
  return cached
}

export function applySoftMotionClass() {
  if (detectSoftMotion()) {
    document.documentElement.classList.add(CHEAP_MOTION_CLASS)
  }
}
