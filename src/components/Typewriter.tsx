import { TYPEWRITER_PHRASES } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'

export function Typewriter() {
  const text = useTypewriter(TYPEWRITER_PHRASES)

  return (
    <p className="font-hand text-xl text-graphite sm:text-2xl">
      <span className="text-pencil-terra">~</span>{' '}
      <span className="text-ink">{text}</span>
      <span
        className="typewriter-cursor ml-0.5 inline-block h-[1em] w-[2px] translate-y-[3px] bg-pencil-terra"
        aria-hidden
      />
    </p>
  )
}
