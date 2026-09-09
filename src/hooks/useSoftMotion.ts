import { useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { detectSoftMotion } from '../lib/motion'

export function useSoftMotion() {
  const reduce = Boolean(useReducedMotion())
  const [cheap] = useState(detectSoftMotion)
  return reduce || cheap
}
