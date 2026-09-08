import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'

type Phase = 'off' | 'static' | 'bumper' | 'live'

const BroadcastLiveContext = createContext(true)

export function useBroadcastLive() {
  return useContext(BroadcastLiveContext)
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function CoverBroadcast({
  children,
  live = true,
}: {
  children: ReactNode
  live?: boolean
}) {
  const [phase, setPhase] = useState<Phase>(() =>
    prefersReducedMotion() ? 'live' : 'off',
  )
  const runRef = useRef(0)

  useEffect(() => {
    if (!live) return
    if (prefersReducedMotion()) {
      setPhase('live')
      return
    }

    const run = ++runRef.current
    setPhase('off')
    const timers = [
      window.setTimeout(() => {
        if (runRef.current === run) setPhase('static')
      }, 320),
      window.setTimeout(() => {
        if (runRef.current === run) setPhase('bumper')
      }, 780),
      window.setTimeout(() => {
        if (runRef.current === run) setPhase('live')
      }, 2100),
    ]
    return () => timers.forEach((id) => window.clearTimeout(id))
  }, [live])

  const onAir = phase === 'live'

  return (
    <BroadcastLiveContext.Provider value={onAir}>
      <div className="tv-set">
        <div className="tv-antenna" aria-hidden>
          <span className="tv-prong tv-prong-left" />
          <span className="tv-prong tv-prong-right" />
          <span className="tv-joint" />
        </div>

        <div className="tv-housing">
          <div className="tv-badge font-label">CH 01 · PAPER</div>
          <div className={`tv-screen ${onAir ? 'is-live' : ''}`}>
            {!onAir && (
              <button
                type="button"
                className="tv-skip font-label"
                onClick={() => {
                  runRef.current += 1
                  setPhase('live')
                }}
              >
                skip ad
              </button>
            )}

            {phase === 'off' && (
              <div className="tv-off">
                <span className="tv-phosphor" />
              </div>
            )}

            {phase === 'static' && <div className="tv-static" />}

            {phase === 'bumper' && (
              <div className="tv-bumper">
                <p className="font-label text-[11px] tracking-[0.32em] text-pencil-ochre">
                  now appearing
                </p>
                <p className="font-hand text-5xl text-[#f4ead4] sm:text-6xl">
                  Thar Zaw
                </p>
                <span className="tv-bumper-rule" />
                <p className="font-note text-lg text-[#efe3c8]/80">
                  Full-Stack Engineer · a short broadcast
                </p>
              </div>
            )}

            <div className={`tv-program ${onAir ? 'is-on' : ''}`}>{children}</div>

            <div className="tv-scanlines" aria-hidden />
            <div className="tv-vignette" aria-hidden />
          </div>

          <div className="tv-panel" aria-hidden>
            <span className={`tv-lamp ${onAir ? 'is-on' : ''}`} />
            <span className="tv-knob" />
            <span className="tv-knob" />
            <span className="font-label tv-onair">
              {onAir ? 'ON AIR' : 'STANDBY'}
            </span>
          </div>
        </div>
      </div>
    </BroadcastLiveContext.Provider>
  )
}
