import { useEffect, useState } from 'react'

type Phase = 'typing' | 'pausing' | 'deleting'

const TYPING_MS = 48
const DELETING_MS = 28
const PAUSE_MS = 1800

export function useTypewriter(phrases: readonly string[]) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState<Phase>('typing')

  useEffect(() => {
    const current = phrases[phraseIndex] ?? ''

    if (phase === 'typing') {
      if (displayText.length < current.length) {
        const timer = window.setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1))
        }, TYPING_MS)
        return () => window.clearTimeout(timer)
      }
      const timer = window.setTimeout(() => setPhase('pausing'), PAUSE_MS)
      return () => window.clearTimeout(timer)
    }

    if (phase === 'pausing') {
      const timer = window.setTimeout(() => setPhase('deleting'), 400)
      return () => window.clearTimeout(timer)
    }

    if (displayText.length > 0) {
      const timer = window.setTimeout(() => {
        setDisplayText(displayText.slice(0, -1))
      }, DELETING_MS)
      return () => window.clearTimeout(timer)
    }

    setPhraseIndex((i) => (i + 1) % phrases.length)
    setPhase('typing')
  }, [displayText, phase, phraseIndex, phrases])

  return displayText
}
